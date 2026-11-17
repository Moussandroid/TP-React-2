# TP React JS 2 : Gestion de Catalogue de Livres

## Réalisé par

Mouhamadou Moussa Paye

## Description du projet

Ce projet consiste à développer une application React permettant de gérer le catalogue de livres d'une bibliothèque universitaire.

L'application permet :

- D'afficher une liste de livres.
- De visualiser leur disponibilité.
- D'emprunter ou de rendre un livre.
- D'ajouter un nouveau livre au catalogue.
- D'afficher en temps réel le nombre de livres disponibles.

## Technologies utilisées

- React JS
- Vite
- JavaScript
- JSX
- CSS

## Étapes réalisées

### Étape 1 : Initialisation du projet

- Création du projet React avec Vite.
- Suppression des fichiers inutiles générés par défaut.
- Création du dossier components dans le dossier src.

### Étape 2 : Création du composant BookCard

Création du fichier BookCard.jsx.

Le composant reçoit les propriétés suivantes :

- titre
- auteur
- estDisponible
- onClickEmprunt

Fonctionnalités :

- Affichage du titre du livre.
- Affichage de l'auteur.
- Affichage du statut du livre (Disponible ou Emprunté).
- Bouton permettant d'emprunter ou de rendre un livre.

### Étape 3 : Affichage dynamique des livres

Dans le fichier App.jsx :

- Importation du Hook useState.
- Création d'un tableau contenant les livres.
- Utilisation de la méthode .map() pour afficher chaque livre.
- Utilisation de la propriété key pour identifier chaque composant.

### Étape 4 : Gestion de l'emprunt

Création de la fonction onClickEmprunt().

Cette fonction permet :

- D'identifier le livre concerné.
- D'inverser son état de disponibilité.
- De mettre à jour automatiquement l'affichage.

### Étape 5 : Ajout d'un nouveau livre

Création d'un formulaire contenant :

- Un champ pour le titre.
- Un champ pour l'auteur.

À la soumission :

- Vérification que les champs sont remplis.
- Ajout du nouveau livre à la liste.
- Réinitialisation des champs du formulaire.

## Concepts React utilisés

- Composants
- Props
- useState
- JSX
- Événements React (onClick, onChange, onSubmit)
- Rendu conditionnel
- Méthode map()
- Gestion d'état

## Résultat obtenu

L'application permet de gérer efficacement un catalogue de livres. L'utilisateur peut consulter les livres disponibles, emprunter ou rendre un ouvrage et ajouter de nouveaux livres grâce à une interface simple et interactive développée avec React.

