const typeImageOptions = ["None", "Line art drawing of", "Blue color ballpoint pen drawing of", "Colored pencil drawing of", "Aquarel drawing of", "Ink drawing of", "Pastel art drawing of", "Painting drawing of", "3D render drawing of", "Photo drawing of", "Black and white photo"];
const styleOptions = ["None", "Realism", "Impressionism", "Expressionism", "Surrealism", "Abstract", "Cubism", "Pop Art", "Fauvism", "Minimalism", "Hyperrealism"];
const colorOptions = ["None", "Black and white", "Monochrome", "Color", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Brown", "White", "Gray", "Black", "Gold", "Silver", "Bronze", "Copper", "Metallic", "Pastel", "Neon", "Rainbow", "Gradient", "Patterned", "Textured", "Blurred", "Custom", "Blurred city lights", "Blurred forest", "Paradisiacal beach"];
const sizeOptions = ["None", "Small", "Medium", "Large", "Custom", "Icon", "Avatar", "Banner", "Header", "Poster", "Wallpaper", "Cover", "Profile picture", "Background", "Thumbnail", "Logo", "Badge", "Emblem", "Stamp", "Seal", "Button", "Sticker", "Patch", "Label", "Sign", "Poster", "Billboard", "Banner"];
const orientationOptions = ["None", "Landscape", "Portrait", "Square", "Custom", "Horizontal", "Vertical", "Diagonal", "Wide", "Tall", "Panoramic", "Narrow", "Oval", "Circular", "Spherical", "Cylindrical", "Triangular", "Star-shaped", "Spiral-shaped", "Squiggly", "Zigzag", "Wavy", "Curvy", "Angular", "Sharp", "Blunt", "Pointy", "Round", "Flat", "Solid", "Hollow", "Transparent", "Opaque", "Glossy", "Matte", "Metallic", "Plastic", "Glass", "Wooden", "Stone", "Leather", "Fabric", "Digital", "Custom", "Old", "New", "Vintage", "Retro", "Modern", "Futuristic", "Surreal", "Minimalist", "Geometric", "Patterned", "Textured", "Graffiti", "Cartoon", "Anime", "Manga", "Pixel art", "Vector art", "Watercolor", "Oil painting", "Acrylic painting", "Pastel drawing", "Ink drawing", "Pencil drawing", "Charcoal drawing", "Chalk drawing", "Digital art", "3D art", "Photorealistic", "Abstract art", "Impressionist", "Expressionist", "Cubist", "Pop art", "Fauvist", "Minimalist", "Hyperrealist"];
const backgroundOptions = ["None", "White", "Black", "Transparent", "Colorful", "Patterned", "Textured", "Blurry", "Gradient", "Image", "Custom", "Blurred city lights background", "Blurred forest background", "Paradisiacal beach background"];
const qualityOptions = ["None", "Low", "Medium", "High", "Ultra high", "Custom", "Pixel art", "Vector art", "HD", "4K", "8K"];
const shapeMenu = ["None", "Heart-shaped", "Square-shaped", "Rounded", "Cylinder shaped", "Triangle shaped", "Star-shaped", "Spiral shaped", "Squiggly", "Zigzag", "Wavy"];
const themeMenu = ["None", "Nature", "City", "People", "Animals", "Abstract", "Fantasy", "Sci-fi", "Horror", "Romantic", "Funny", "Cute", "Dark", "Gothic", "Vintage", "Retro", "Futuristic", "Surreal", "Minimalist", "Geometric", "Patterned", "Textured", "Graffiti", "Cartoon", "Anime", "Manga", "Pixel art", "Vector art", "Watercolor", "Oil painting", "Acrylic painting", "Pastel drawing", "Ink drawing", "Pencil drawing", "Charcoal drawing", "Chalk drawing", "Digital art", "3D art", "Photorealistic", "Abstract art", "Impressionist", "Expressionist", "Cubist", "Pop art", "Fauvist", "Minimalist", "Hyperrealist"];
const moodMenu = ["None", "Happy", "Sad", "Angry", "Surprised", "Scared", "Disgusted", "Excited", "Calm", "Relaxed", "Tired", "Energetic", "Bored", "Stressed", "Confused", "In love", "Lonely", "Nostalgic", "Hopeful", "Proud", "Shy", "Silly", "Serious", "Playful", "Peaceful", "Anxious", "Curious", "Determined", "Frustrated", "Grateful", "Guilty", "Jealous", "Regretful", "Sympathetic", "Threatened", "Worried", "Awkward", "Embarrassed", "Envious", "Homesick", "Horrified", "Humbled", "Hurt", "Inspired", "Intimidated", "Irritated", "Overwhelmed", "Pity", "Relieved", "Satisfied", "Shocked", "Skeptical", "Stunned", "Suspicious", "Uncomfortable", "Unsettled", "Vulnerable", "Weird", "Welcoming", "Wistful", "Yearning", "Zany"];
const timeMenu = ["None", "Day", "Night", "Morning", "Afternoon", "Evening", "Sunrise", "Sunset", "Dawn", "Dusk", "Twilight", "Midnight", "Noon", "Midday", "Sunlight", "Moonlight", "Starlight", "Cloudy", "Rainy", "Sunny", "Snowy", "Windy", "Stormy", "Foggy", "Misty", "Rainbow", "Aurora borealis", "Thunderstorm", "Tornado", "Hurricane", "Blizzard", "Heatwave", "Drought", "Flood", "Earthquake", "Volcano", "Tsunami", "Wildfire", "Avalanche", "Landslide", "Sandstorm", "Hailstorm", "Meteor shower", "Eclipse", "Comet", "Rainbow", "Full moon", "New moon", "Crescent moon", "Half moon", "Blue moon", "Blood moon", "Supermoon", "Harvest moon", "Solar eclipse", "Lunar eclipse", "Annular eclipse", "Partial eclipse", "Total eclipse", "Penumbra", "Umbra", "Solar flare", "Asteroid", "Meteor", "Meteorite", "Comet", "Constellation", "Galaxy", "Nebula", "Black hole", "Supernova", "Quasar", "Pulsar", "Star", "Planet", "Moon", "Asteroid", "Meteor", "Meteorite", "Comet", "Constellation", "Galaxy", "Nebula", "Black hole", "Supernova", "Quasar", "Pulsar", "Star", "Planet", "Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Moon", "Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const supportMenu = ["None", "Paper", "Canvas", "Wood", "Metal", "Plastic", "Glass", "Stone", "Leather", "Fabric", "Digital", "Custom", "Old paper", "Old canvas", "Old wood", "Old metal", "Old plastic", "Old glass", "Old stone", "Old leather", "Old fabric", "Old digital", "Old custom", "Burnt paper", "Burnt canvas", "Burnt wood", "Burnt metal", "Burnt plastic", "Burnt glass", "Burnt stone", "Burnt leather", "Burnt fabric", "Burnt digital", "Burnt custom", "Torn paper", "Torn canvas", "Torn wood", "Torn metal", "Torn plastic", "Torn glass", "Torn stone", "Torn leather", "Torn fabric", "Torn digital", "Torn custom", "Folded paper", "Folded canvas", "Folded wood", "Folded metal", "Folded plastic", "Folded glass", "Folded stone", "Folded leather", "Folded fabric", "Folded digital", "Folded custom", "Crumpled paper", "Crumpled canvas", "Crumpled wood", "Crumpled metal", "Crumpled plastic", "Crumpled glass", "Crumpled stone", "Crumpled leather", "Crumpled fabric", "Crumpled digital", "Crumpled custom", "Ripped paper", "Ripped canvas", "Ripped wood", "Ripped metal", "Ripped plastic", "Ripped glass", "Ripped stone", "Ripped leather", "Ripped fabric", "Ripped digital", "Ripped custom", "Burnt paper", "Burnt canvas", "Burnt wood", "Burnt metal", "Burnt plastic", "Burnt glass", "Burnt stone", "Burnt leather", "Burnt fabric", "Burnt digital", "Burnt custom", "Torn paper", "Torn canvas", "Torn wood", "Torn metal", "Torn plastic", "Torn glass", "Torn stone", "Torn leather", "Torn fabric", "Torn digital", "Torn custom", "Folded paper", "Folded canvas", "Folded wood", "Folded metal", "Folded plastic", "Folded glass", "Folded stone", "Folded leather", "Folded fabric", "Folded digital", "Folded custom"];

const options = {
    width: 600,
    height: 400,
    left: (window.screen.width - 400) / 2,
    top: (window.screen.height - 400) / 2,
    resizable: 'no', // Désactiver la redimension
    scrollbars: 'no', // Désactiver les barres de défilement
    toolbar: 'no', // Masquer la barre d'outils
    menubar: 'no', // Masquer la barre de menus
    location: 'no', // Masquer la barre d'adresse
    status: 'no' // Masquer la barre d'état
};
// Fonction pour ouvrir la fenêtre pop-up avec les menus déroulants
export async function openPopup(prompt, callback) {
    // Créer la fenêtre pop-up
    const popup = window.open('', 'Popup', Object.entries(options).map(([key, value]) => `${key}=${value}`).join(','));

    // Créer les éléments HTML dans la fenêtre pop-up
    const container = document.createElement('div');
    container.classList.add('popup-content');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.backgroundColor = "#343541";

    const title = document.createElement('h2');
    title.classList.add('popup-title');
    title.textContent = "Image Settings";
    title.style.color = '#007bff';
    title.style.fontSize = '24px';
    title.style.fontWeight = 'bold';
    title.style.textTransform = 'capitalize';
    title.style.textAlign = 'center';
    title.style.marginTop = '10px';
    title.style.marginBottom = '10px';
    container.appendChild(title);

    // Créer le champ de saisie du nombre de variations
    const variationsInput = document.createElement('input');
    const menuLabel = document.createElement('label');
    menuLabel.textContent = "Number of Variations: ";
    menuLabel.style.marginRight = '10px';
    menuLabel.style.marginTop = '10px';
    menuLabel.style.fontWeight = 'bold';
    menuLabel.style.fontSize = '16px';
    menuLabel.style.color = '#007bff';
    menuLabel.style.textTransform = 'capitalize';
    menuLabel.style.display = 'inline-block';
    menuLabel.style.textAlign = 'right';
    menuLabel.style.marginRight = '10px';
    container.appendChild(menuLabel);
    variationsInput.type = 'number';
    variationsInput.placeholder = '1';
    variationsInput.id = 'variations';
    variationsInput.style.marginTop = '10px';
    variationsInput.style.marginBottom = '10px';
    variationsInput.style.marginRight = '10px';
    variationsInput.style.padding = '5px 10px';
    variationsInput.style.fontSize = '16px';
    variationsInput.style.fontWeight = 'bold';
    variationsInput.style.color = '#007bff';
    variationsInput.style.backgroundColor = 'white';
    variationsInput.style.border = '2px solid #007bff';
    variationsInput.style.borderRadius = '5px';
    variationsInput.style.cursor = 'pointer';
    container.appendChild(variationsInput);
    container.appendChild(document.createElement('br'));

    // Créer les menus déroulants
    menuDeroulant(typeImageOptions, "typeImage", container);
    menuDeroulant(styleOptions, "style", container);
    menuDeroulant(colorOptions, "color", container);
    menuDeroulant(sizeOptions, "size", container);
    menuDeroulant(orientationOptions, "orientation", container);
    menuDeroulant(backgroundOptions, "background", container);
    menuDeroulant(qualityOptions, "quality", container);
    menuDeroulant(shapeMenu, "shape", container);
    menuDeroulant(themeMenu, "theme", container);
    menuDeroulant(moodMenu, "mood", container);
    menuDeroulant(timeMenu, "time", container);
    menuDeroulant(supportMenu, "support", container);

    // Bouton pour générer l'image
    const generateButton = document.createElement('button');
    generateButton.classList.add('popup-button');
    generateButton.textContent = "Generate Image";
    generateButton.onclick = async () => {
        const prmpt = await generateImage(prompt, popup);
        const nombreVariations = popup.document.getElementById('variations').value;
        popup.close();
        callback(prmpt, nombreVariations);
    };
    generateButton.style.marginTop = '10px';
    generateButton.style.marginBottom = '10px';
    generateButton.style.marginRight = '10px';
    generateButton.style.backgroundClip = 'padding-box';
    generateButton.style.borderRadius = '5px';
    generateButton.style.cursor = 'pointer';
    generateButton.style.padding = '5px 10px';
    generateButton.style.fontSize = '16px';
    generateButton.style.fontWeight = 'bold';
    generateButton.style.color = 'white';
    generateButton.style.backgroundColor = '#007bff';
    container.appendChild(generateButton);

    // Ajouter le conteneur à la fenêtre pop-up
    popup.document.body.appendChild(container);
}

function menuDeroulant(listOptions, menuId, container = document.body) {
    const menuLabel = document.createElement('label');
    menuLabel.textContent = menuId.charAt(0).toUpperCase() + menuId.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase() + ": "; // Convertir le nom de l'id en libellé
    menuLabel.style.marginRight = '10px';
    menuLabel.style.marginTop = '10px';
    menuLabel.style.fontWeight = 'bold';
    menuLabel.style.fontSize = '16px';
    menuLabel.style.color = '#007bff';
    menuLabel.style.textTransform = 'capitalize';
    menuLabel.style.display = 'inline-block';
    menuLabel.style.textAlign = 'right';
    menuLabel.style.marginRight = '10px';
    container.appendChild(menuLabel);
    const menuDeroulant = document.createElement('select');
    menuDeroulant.id = menuId;
    listOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        menuDeroulant.appendChild(optionElement);
    });
    menuDeroulant.style.marginTop = '10px';
    menuDeroulant.style.marginBottom = '10px';
    menuDeroulant.style.marginRight = '10px';
    menuDeroulant.style.padding = '5px 10px';
    menuDeroulant.style.fontSize = '16px';
    menuDeroulant.style.fontWeight = 'bold';
    menuDeroulant.style.color = '#007bff';
    menuDeroulant.style.backgroundColor = 'white';
    menuDeroulant.style.border = '2px solid #007bff';
    menuDeroulant.style.borderRadius = '5px';
    menuDeroulant.style.cursor = 'pointer';
    container.appendChild(menuDeroulant);
    container.appendChild(document.createElement('br'));
}

async function generateImage(prompt, popup) {
    // Récupérer les valeurs des menus déroulants
    const typeImage = popup.document.getElementById('typeImage').value;
    const style = popup.document.getElementById('style').value;
    const color = popup.document.getElementById('color').value;
    const size = popup.document.getElementById('size').value;
    const orientation = popup.document.getElementById('orientation').value;
    const background = popup.document.getElementById('background').value;
    const quality = popup.document.getElementById('quality').value;
    const shape = popup.document.getElementById('shape').value;
    const theme = popup.document.getElementById('theme').value;
    const mood = popup.document.getElementById('mood').value;
    const time = popup.document.getElementById('time').value;
    const support = popup.document.getElementById('support').value;

    // Générer la requête pour l'image
    let prmpt = `Generate a ${prompt}`;
    if (typeImage != "None") prmpt += ` ${typeImage}`;
    if (style != "None") prmpt += ` in ${style} style`;
    if (color != "None") prmpt += ` with ${color} colors`;
    if (size != "None") prmpt += ` of ${size} size`;
    if (orientation != "None") prmpt += ` in ${orientation} orientation`;
    if (background != "None") prmpt += ` with ${background} background`;
    if (quality != "None") prmpt += ` of ${quality} quality`;
    if (shape != "None") prmpt += ` with ${shape} shape`;
    if (theme != "None") prmpt += ` with ${theme} theme`;
    if (mood != "None") prmpt += ` with ${mood} mood`;
    if (time != "None") prmpt += ` at ${time} time`;
    if (support != "None") prmpt += ` on ${support} support`;
    prmpt += ".";
    return prmpt;
}

