export default function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <img src="/images/logo.svg" alt="Logo" draggable={false} />
        <h1 data-testid="title">My Task Board</h1>
        <img src="/images/edit.svg" alt="Edit" draggable={false} />
      </div>

      <p className="header__subtitle">Tasks to keep organized</p>
    </header>
  );
}
