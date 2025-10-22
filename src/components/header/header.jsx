export default function Header({ nome }) {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1 className="m-0">{nome}</h1>
    </header>
  );
}