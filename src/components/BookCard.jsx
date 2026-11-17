export default function BookCard({
  titre,
  auteur,
  estDisponible,
  onClickEmprunt,
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h3>{titre}</h3>

      <p>
        <strong>Auteur :</strong> {auteur}
      </p>

      <p>
        {estDisponible
          ? "🟢 Disponible"
          : "🔴 Emprunté"}
      </p>

      <button onClick={onClickEmprunt}>
        {estDisponible
          ? "Emprunter"
          : "Rendre"}
      </button>
    </div>
  );
}