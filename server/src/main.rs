use std::env;
use std::str::FromStr;
use std::sync::Arc;
use tide::log;
use tide::security::{CorsMiddleware, Origin};
use tide::http::headers::HeaderValue;

mod controllers;
mod modules {
  pub mod db;
}

use modules::db;

#[async_std::main]
async fn main() -> tide::Result<()> {
  dotenv::dotenv().ok();
  log::with_level(log::LevelFilter::Debug);

  let pool = db::init_pool().await?;
  let pool = Arc::new(pool);
  let mut app = tide::with_state(pool.clone());

  let cors = CorsMiddleware::new()
    .allow_origin(Origin::from(if env::var("RAILWAY_ENVIRONMENT_NAME") == Ok("production".into()) {"https://task-list-dev-challenge.up.railway.app"} else {"http://localhost:5173"}))
    .allow_methods(HeaderValue::from_str("GET, POST, PUT, PATCH, DELETE, OPTIONS")?)
    .allow_headers(HeaderValue::from_str("Content-Type")?)
    .allow_headers(HeaderValue::from_str("Authorization")?);

  app.with(cors);

  controllers::tasks::init(&mut app);

  let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
  let address = format!("127.0.0.1:{}", port);
  app.listen(address).await?;
  Ok(())
}
