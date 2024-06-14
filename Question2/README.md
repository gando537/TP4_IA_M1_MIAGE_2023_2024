# TP4_IA_M1_MIAGE_2023_2024

Chatbot MiageGPT avec DALL-E et Synthèse Vocale

Ce projet implémente un chatbot capable de traiter différents types de commandes en texte utilisant l'API de chat d'open AI et le moteur GPT-3.5-turbo, et de générer des images via le service de DALL-E. Il inclut également une fonctionnalité de synthèse vocale pour répondre aux commandes spécifiques.

Fonctionnalités:

Le chatbot prend en charge les commandes suivantes :

    1. Commandes de chat : Utilisez la commande <message> pour envoyer un message au chatbot.

    2. Génération d'images avec DALL-E : Utilisez la commande /image <prompt> pour générer des images. On peut aussi utiliser une Interface GUI pour les prompts : Un menu pop-up pour générer des prompts spécifiques, avec des options pour choisir le type d'image et le nombre d'images à générer etc.

    3. Synthèse vocale : Utilisez la commande /speech <prompt> pour obtenir une réponse vocalisée.

    4. Affichage d'images générée avec DALL-E deux par ligne.

    5. Affichage de la réponse vocalisée.

    6. Historique des conversations.

    7. Possibilité de créer un nouveau chat

Prérequis :

Un serveur backend pour gérer les requêtes et communiquer avec les API de chat d'open AI et de DALL-E
Un navigateur moderne compatible avec les APIs Web.

Installation:

Installez les dépendances nécessaires sur le serveur backend (par exemple, avec Node.js et Express) :

`npm install express multer`

Configurez la variable d'environnement pour l'API d'open AI.

node server.js

- Utilisation :

    * Lancez le serveur backend :
    `node server.js` ou `npm start`

    * Ouvrez le fichier index.html dans un navigateur moderne.

    * Utilisez les commandes de chat pour interagir avec le chatbot.

    * Utilisez les commandes /image et /speech pour générer des images et obtenir des réponses vocalisées.

    * Consultez l'historique des conversations pour voir les messages précédents.

    * Profitez de l'expérience de chatbot MiageGPT avec DALL-E et Synthèse Vocale !

