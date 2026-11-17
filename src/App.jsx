import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      titre: "React JS",
      auteur: "Aicha Diagne",
      estDisponible: true,
    },
    {
      id: 2,
      titre: "Langage C",
      auteur: "Alexandre Ndiaye",
      estDisponible: true,
    },
    {
      id: 3,
      titre: "Python",
      auteur: "Fatou Ndiaye",
      estDisponible: false,
    },
    {
      id: 4,
      titre: "Algorithme",
      auteur: "Aly Breukh",
      estDisponible: true,
    },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId
          ? {
              ...book,
              estDisponible:
                !book.estDisponible,
            }
          : book
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      titre.trim() === "" ||
      auteur.trim() === ""
    ) {
      alert("Remplissez tous les champs");
      return;
    }

    const newBook = {
      id: Date.now(),
      titre: titre,
      auteur: auteur,
      estDisponible: true,
    };

    setBooks([...books, newBook]);

    setTitre("");
    setAuteur("");
  };

  const nbDisponibles =
    books.filter(
      (book) => book.estDisponible
    ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Bibliothèque Universitaire
      </h1>

      <h2>
        Livres disponibles : {nbDisponibles}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) =>
            setTitre(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) =>
            setAuteur(e.target.value)
          }
        />

        <button type="submit">
          Ajouter
        </button>
      </form>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={
              book.estDisponible
            }
            onClickEmprunt={() =>
              onClickEmprunt(book.id)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;