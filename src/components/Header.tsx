export default function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <img src="/images/logo.svg" alt="Logo" />
        <h1>My Task Board</h1>
        <img src="/images/edit.svg" alt="Edit" />
      </div>

      <p className="header__subtitle">Tasks to keep organized</p>
    </header>
  );
}
