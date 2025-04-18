use tide::{Body, Request, Response, StatusCode};
use sqlx::{FromRow, PgPool};
use std::sync::Arc;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize, Clone, FromRow)]
struct Task {
  id: i32,
  title: String,
  desc: Option<String>,
  icon: i32,
  status: String
}


type DbPool = Arc<PgPool>;

pub fn init(app: &mut tide::Server<DbPool>) {
  app.at("/api/tasks").get(get_all_tasks);
}

async fn get_all_tasks(req: Request<DbPool>) -> tide::Result {
  let pool = req.state();
  let res: Vec<Task> = sqlx::query_as::<_, Task>("
    SELECT * FROM tasks;
  ").fetch_all(pool.as_ref()).await?;

  Ok(Response::builder(StatusCode::Ok)
    .body(Body::from_json(&res)?)
    .build())
}
