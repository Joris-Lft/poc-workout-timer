# 🏋️‍♂️ Timers de Circuits Sportifs

Un petit site web en HTML/CSS/JS pour lancer facilement des circuits d'entraînement avec un minuteur intégré, des pauses automatiques, des bips de début/fin, et des liens vers des vidéos d'explication. Idéal pour se bouger à la maison, dans un parc ou à la salle.

---

## 🚀 Fonctionnalités

- ✅ Liste d'exercices avec durée prédéfinie
- ✅ Circuits pré-enregistrés
- ✅ Timer avec affichage dynamique et phase de pause
- ✅ Bips sonores de début et fin
- ✅ Mise en évidence de l'exercice en cours
- ✅ Affichage de la durée totale d’un circuit
- ✅ Lien direct vers une recherche YouTube pour chaque exercice
- ✅ Design responsive, sombre, simple et efficace

---

## 📁 Structure du projet

```
.
├── index.html              # Accueil
├── exercices.html          # Liste des exercices
├── circuits.html           # Liste des circuits
├── circuit-detail.html     # Détail d’un circuit + timer intégré
├── style.css               # Style global
├── data.js                 # Définition des circuits et exercices
└── assets/
    └── sounds/
        ├── start.mp3       # Bip de début
        └── end.mp3         # Bip de fin

```

---

## 🛠️ Comment utiliser

1. **Cloner le repo**

```bash
git clone https://github.com/Joris-Lft/poc-workout-timer
cd poc-workout-timer
```

2. **Lancer en local**

Pas besoin de serveur ! Ouvre simplement `index.html` dans ton navigateur.

---

## ✍️ Ajouter des circuits ou exercices

Tu peux modifier `data.js` :

- Pour **ajouter un exercice** :

```js
{
  id: 42,
  name: "Jumping Jacks",
  duration: 30
}
```

- Pour **ajouter un circuit** :

```js
{
  id: 2,
  name: "Cardio Express",
  exercises: [1, 42, 5]
}
```

Chaque exercice est lié automatiquement à une recherche YouTube avec le nom de l'exercice (pratique pour apprendre rapidement les mouvements).

---

## 📦 TODOs & améliorations possibles

- [ ] Barre de progression
- [ ] Musique de fond optionnelle
- [ ] Choix de durée
- [ ] Mode plein écran mobile
- [ ] Mode random ou daily challenge

---

## 🙌 Crédits

Projet personnel conçu par [Joris](https://github.com/Joris-Lft).

---

## 📄 Licence

MIT — Utilisation libre et open-source, pas d’excuses pour ne pas transpirer 😅
