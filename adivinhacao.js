const allColors = [
  "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
  "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
  "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", 
  "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", 
  "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", 
  "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", 
  "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", 
  "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", 
  "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", 
  "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", 
  "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", 
  "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", 
  "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", 
  "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
  "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", 
  "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", 
  "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", 
  "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", 
  "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", 
  "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", 
  "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", 
  "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", 
  "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

const selectedColors = [];
while (selectedColors.length < 10) {
  const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
  if (!selectedColors.includes(randomColor)) {
    selectedColors.push(randomColor);
  }
}

selectedColors.sort();

document.getElementById("color-options").textContent = selectedColors.join(", ");

const correctColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

let errorCount = 0;

function checkGuess() {
  const userGuess = document.getElementById("color-input").value.trim();
  const feedback = document.getElementById("feedback");

  if (userGuess === "") {
    feedback.textContent = "Por favor, insira uma cor.";
    return;
  }

  if (userGuess.toLowerCase() === correctColor.toLowerCase()) {
    document.body.style.backgroundColor = correctColor;
    feedback.textContent = `Parabéns! Você acertou a cor: ${correctColor}`;
    errorCount = 0; 
  } else {
    errorCount++;
    const hint =
      userGuess.toLowerCase() < correctColor.toLowerCase()
        ? "A cor correta vem depois da sua na ordem alfabética."
        : "A cor correta vem antes da sua na ordem alfabética.";
    feedback.textContent = errorCount > 1 
      ? `Você errou novamente! ${hint}` 
      : `Errou! Dica: ${hint}`;
  }

  document.getElementById("color-input").value = "";
}
