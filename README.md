# api-NodeJS
Creer une api avec Node js &amp; Express

Job 00 : Installation

Comme vous l’avez vu et compris, ExpressJs est un framework javascript basé sur
NodeJs. Par conséquent, avant de démarrer le projet, vous allez devoir créer votre
environnement de travail.
Accédez au site officiel de Node pour télécharger et installer la dernière version de
Node. NPM (node Package Manager), outil indispensable, sera installé en même temps.
NPM est un gestionnaire de paquet officiel de Node.Js qui automatise toute la gestion
des dépendances et des paquets Javascript.
Une fois votre environnement de développement prêt, vous allez devoir installer
Express. Pour se faire, vous allez utiliser votre gestionnaire de paquet comme indiqué
dans la documentation.

Projet Annuaire

Maintenant que vous êtes prêts à utiliser Node JS, il est temps de développer votre
propre API. Le projet de la semaine va être de développer le back end d’un annuaire.
Cette API comportera plusieurs entités avec les champs pour chaque entité associés :
- Les users :
- email
- password
- firstname
- lastname

- createdAt
- updatedAt
- Les groupes :
- name
- createdAt
- updatedAt

Les utilisateurs peuvent appartenir à un seul groupe et les groupes peuvent avoir
plusieurs utilisateurs.
Votre annuaire va être composé de plusieurs routes:
- Une route qui permet à un utilisateur de s’enregistrer en complétant les champs
prenom, nom, email et un groupe.
- Une route qui permet à l’utilisateur de se connecter
- Une route qui retourne tous les utilisateurs dans une liste contenant les champs
prenom et nom.
- Une route qui retourne uniquement les noms des groupes (groupe 1, groupe 2, ...)
- Une route qui retourne les groupes ainsi que les users qui y sont rattachés
(uniquement prenom et nom)
- Une route qui permet d’avoir les détails d’un user (nom prenom email groupe)
- Une route qui permet aux utilisateur de s’ajouter à un groupe
- Une route qui permet de modifier ses informations (uniquement celles de
l’utilisateur connecté)
- Les routes qui permettent de supprimer, modifier un user
- Les routes qui permettent d’ajouter, modifier, supprimer un groupe
- Une route qui permet de modifier les utilisateurs présents dans un groupe
En vert : ce sont les routes ouvertes à tous, qui ne requièrent pas d’authentification
En orange : ce sont les routes ouvertes uniquement aux utilisateurs authentifiés, et à
l’admin
En rouge: ce sont les routes ouvertes uniquement à l’admin

Rendu

Le projet est à rendre sur github https://github.com/prenom-nom/api-nodeJS

Base de connaissances
● Documentation officiel NodeJs
● Documentation officiel Express
● Le routage avec Express
● Les middlewares
● Intégration de bases de donnée avec ExpressJs
