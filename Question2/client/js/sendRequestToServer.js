import { openPopup } from './interfaceGUI.js';

const url = 'http://localhost:3001';

window.onload = init;

let outputElement, submitButton, inputElement, title, newChatButton;

// Liste pour stocker les chats
let chatHistory = [];
let chatListElement;
let currentChat = [];
let indexItem;

function init() {
    outputElement = document.querySelector('#output');
    submitButton = document.querySelector('#submit');
    newChatButton = document.querySelector('#new-chat');
    submitButton.onclick = getMessage;

    inputElement = document.querySelector('#input');
    title = document.querySelector('.h1');
    title.innerHTML = "Chatbot MiageGPT";

    makeListener();
}

// 2. Fonction pour afficher la liste des conversations
function displayChatList() {

    chatListElement = document.querySelector('.history');
    chatListElement.innerHTML = ''; // Efface le contenu précédent

    // Ajoute chaque conversation à la liste
    chatHistory.forEach(chat => {
        const firstQuestion = chat[0].content.slice(0, 20); // Prend les 20 premiers caractères de la première question
        const chatItem = document.createElement('div');
        chatItem.classList.add('chat-item');
        chatItem.textContent = firstQuestion;
        chatListElement.appendChild(chatItem);
    });

    // Ajoute les écouteurs d'événements après avoir créé tous les éléments de la liste
    addChatListeners();
}


// 4. Fonction pour afficher une conversation sélectionnée
function displayConversation(chat) {
    outputElement.innerHTML = ''; // Efface le contenu précédent

    // Affiche chaque message de la conversation
    chat.forEach(message => {
        if (message.sender === 'DallE') {
            displayMessage('DallE', "Voici l'image que vous avez demandée :", true);
            displayImages(message.sender, message.content);
            return;
        }
        displayMessage(message.sender, message.content, true);
    });
}

function addChatListeners() {
    const chatListItems = document.querySelectorAll('.chat-item');
    chatListItems.forEach((chatItem, index) => {
        chatItem.addEventListener('click', () => {
            selectedItem(chatListItems, chatItem);
            displayConversation(chatHistory[index]);
            currentChat = chatHistory[index];
            indexItem = index;
        });
    });
}

function selectedItem(chatListItems, chatItem) {
    // Retirer la classe 'selected-chat-item' de tous les éléments
    chatListItems.forEach(item => {
        item.classList.remove('selected-chat-item');
    });
    // Ajouter la classe 'selected-chat-item' à l'élément sélectionné
    chatItem.classList.add('selected-chat-item');
}

function newChat() {
    clearChat();
    title.innerHTML = "Chatbot MiageGPT";
    currentChat = [];
}

function clearChat() {
    outputElement.innerHTML = '';
    title.innerHTML = '';
}

async function makeListener() {
    // Écouteur d'événement pour la touche "Enter" pour envoyer le message
    if (inputElement) {
        inputElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                getMessage();
            }
        });
    }

    // Écouteur d'événement pour le clic sur le bouton "New chat"
    if (newChatButton) {
        newChatButton.addEventListener('click', () => {
            console.log('New chat');
            newChat();
        });
    }
}

function clearInput() {
    inputElement.value = '';
}

async function getMessage() {
    let prompt = inputElement.value;
    prompt = prompt.toLowerCase();
    if (prompt === '' || (prompt.startsWith('/image') && (prompt.length < 8))) return;

    if (prompt.startsWith('/image')) {
        prompt = prompt.slice(7);
        clearInput();
        try {
            let images = await getImageFromDallE(prompt);
            displayMessage('DallE', "Voici l'image que vous avez demandée :");
            displayImages(prompt, images, true);
        } catch (error) {
            console.error(error);
        }
        return;
    }
    // Si le prompt commence par "/speech" alors on utilise la synthèse vocale pour répondre
    if (prompt.startsWith('/speech')) {
        prompt = prompt.slice(8);
        displayMessage('Vous', prompt);
        clearInput();
        let responseText = await getResponseFromServer(prompt);

        speakText(responseText);
        return;
    }
    displayMessage('Vous', prompt);
    getResponseFromServer(prompt);
    clearInput();
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR'; // Définir la langue sur français si nécessaire
    speechSynthesis.speak(utterance);
}

async function getImageFromDallE(prompt) {
    return new Promise(async (resolve, reject) => {
        try {
            const promptData = new FormData();

            openPopup(prompt, async (prmpt, nombreVariations) => {
                promptData.append('prompt', prmpt);
                promptData.append('nombreVariations', nombreVariations);
                displayMessage('Vous', prmpt);

                showLoadingMessage();

                const response = await fetch(url + '/image', {
                    method: 'POST',
                    body: promptData
                });

                const data = await response.json();
                hideLoadingMessage();
                resolve(data); // Résoudre la promesse avec les données récupérées
                addHistoryElement('DallE', prmpt, data);
            });
        } catch (error) {
            reject(error); // Rejeter la promesse en cas d'erreur
        }
    });
}


function showLoadingMessage() {
    // Afficher un message ou une animation de chargement
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('loading-message');
    loadingMessage.textContent = 'Chargement en cours...';
    outputElement.appendChild(loadingMessage);
}

function hideLoadingMessage() {
    // Masquer le message ou l'animation de chargement
    const loadingContainer = document.querySelector('.loading-message');
    outputElement.removeChild(loadingContainer);
}

async function addHistoryElement(sender, prompt, response) {
    // Ajout dans l'historique sur la gauche
    currentChat.push({ sender: 'Vous', content: prompt });
    currentChat.push({ sender: sender, content: response });
    if (currentChat.length === 2) {
        chatHistory.unshift(currentChat);
        displayChatList();
        const chatListItems = document.querySelectorAll('.chat-item');
        selectedItem(chatListItems, chatListItems[0]);
    } else {
        chatHistory[indexItem] = currentChat;
    }
}

function displayImages(prompt, images, isHistory = false) {
    let imageRow = null;
    images.data.forEach((imageObj, index) => {
        if (index % 2 === 0) { // Commencer une nouvelle ligne d'images pour chaque paire
            imageRow = document.createElement('div');
            imageRow.classList.add('image-row');
            imageRow.style.display = 'flex';
            imageRow.style.justifyContent = 'center';
        }
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.style.maxWidth = '256px';
        imageContainer.style.maxHeight = '256px';
        imageContainer.style.margin = '10px';

        const imgElement = document.createElement('img');
        imgElement.src = imageObj.url;
        imgElement.width = 256;
        imgElement.height = 256;

        imageContainer.append(imgElement);

        imageRow.append(imageContainer);

        if (index % 2 === 1 || index === images.data.length - 1) {
            outputElement.append(imageRow);
        }
    });
}

// Fonction pour afficher un message dans la conversation
function displayMessage(sender, message, isHistory = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Créer un élément d'image
    const imageElement = document.createElement('img');
    const bool = isMiageGPT(sender);
    imageElement.src = bool ? './assets/chatbot.png' : './assets/user.jpg';

    title.innerHTML = '';

    const imgElement = document.createElement('div');
    imgElement.classList.add('img');
    imgElement.appendChild(imageElement);

    // Ajouter l'image à l'élément du message
    messageElement.appendChild(imgElement);

    const msgElement = document.createElement('div');
    msgElement.classList.add('msg');

    // Créer un élément pour le nom de l'expéditeur
    const senderElement = document.createElement('p');
    senderElement.textContent = sender;

    // Ajouter le nom de l'expéditeur à l'élément du message
    msgElement.appendChild(senderElement);

    // Créer un élément pour le message
    let textElement = document.createElement('p');
    textElement.textContent = message;

    // Ajouter le texte à l'élément du message
    msgElement.appendChild(textElement);

    // Ajouter l'élément du message à l'élément du message
    messageElement.appendChild(msgElement);
    if (bool && !isHistory) {
        msgElement.removeChild(textElement);
        textElement = document.createElement('p');
        msgElement.appendChild(textElement);
        outputElement.appendChild(messageElement);
        displayMessageLetters(message, textElement);
    } else {
        outputElement.appendChild(messageElement);
    }
}

// Fonction pour afficher le message lettre par lettre avec des pauses
function displayMessageLetters(message, textElement) {
    let index = 0;

    function addLetter() {
        if (index < message.length) {
            textElement.textContent += message[index++];
            // Ajouter une classe pour afficher le curseur
            textElement.innerHTML += '<span class="cursor"></span>';
            // Ajouter une pause entre chaque lettre (par exemple, 30 millisecondes)
            setTimeout(() => {
                // Supprimer la classe pour masquer le curseur
                const cursor = textElement.querySelector('.cursor');
                cursor.parentNode.removeChild(cursor);
                addLetter();
            }, 30);
        }
    }

    addLetter();
}

function isMiageGPT(sender) {
    return sender === 'MiageGPT' || sender === 'DallE';
}


async function getResponseFromServer(prompt) {
    try {
        // On envoie le contenu du prompt dans un FormData (eq. formulaires multipart)
        const promptData = new FormData();
        promptData.append('prompt', prompt);

        // Envoi de la requête POST par fetch, avec le FormData dans la propriété body
        // côté serveur on récupèrera dans req.body.prompt la valeur du prompt,
        // avec nodeJS on utilisera le module multer pour récupérer les donénes 
        // multer gère les données multipart/form-data
        const response = await fetch(url + '/chat', {
            method: 'POST',
            body: promptData
        });

        const data = await response.json();

        console.log(data);
        const chatGptReponseTxt = data.choices[0].message.content;
        displayMessage('MiageGPT', chatGptReponseTxt);
        addHistoryElement('MiageGPT', prompt, chatGptReponseTxt);
        return chatGptReponseTxt;
    } catch (error) {
        console.log(error);
    }
}

