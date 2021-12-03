"use strict";
var _a;
(_a = document.getElementById("butao")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', iniciar);
const CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
    "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
    "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
    "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
    "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
function iniciar() {
    let cores = CSS_COLOR_NAMES;
    let coresSorteadas = [];
    let corEscolhida = '';
    let corUsuario = '';
    let vidas = 5;
    let res = document.querySelector('p#res');
    while (coresSorteadas.length != 10) { //sortea 10 valores e adiciona no vetor
        coresSorteadas.push(cores[Math.floor((Math.random() * cores.length) + 1)].toLowerCase());
        coresSorteadas = [...new Set(coresSorteadas)]; //remove valores duplicados
        coresSorteadas.sort(); //ordena o vetor em ordem alfabética
    }
    corEscolhida = coresSorteadas[Math.floor((Math.random() * coresSorteadas.length) + 1)]; //adiciona uma cor aleatoria na variavel
    while (vidas != 0) {
        corUsuario = prompt(`Eu estou pensando em uma dessas cores:\n\n"${coresSorteadas.join(', ')}"\n\nQual cor eu estou pensando?\n\nVidas: ${vidas}`).toLowerCase();
        if (corUsuario.length === 0 || !corUsuario.trim()) { //verifica se o usuário não digitou a cor
            alert('Por favor, digite uma cor!!');
        }
        else if (!coresSorteadas.includes(corUsuario)) { //verificar se a cor existe 
            alert('Essa cor não está entre as 10 possiveis ou não existe!\n\nTente novamente');
        }
        else if (corUsuario != corEscolhida) { //verifica se o usuário acertou o valor ou não
            compararString(corEscolhida, corUsuario, vidas);
            vidas--;
        }
        else if (corUsuario == corEscolhida) {
            alert('Parabéns, você acertou!!');
            document.body.style.backgroundColor = corUsuario; //muda a cor de fundo para a cor acertada
            res.innerHTML = 'Obrigado por jogar!!!';
            vidas = 0;
        }
    }
    function compararString(x, y, v) {
        if (x.charCodeAt(0) > y.charCodeAt(0)) {
            if (v == 1) {
                alert(`Desculpe, mas suas vidas acabaram!\n\nA correta era: "${x}"\n\nObrigado por jogar!!!`);
                res.innerHTML = 'Atualize a página ou dê um F5 para jogar novamente.';
            }
            else {
                alert('Você errou!!\n\nDica: Sua cor é alfabéticamente menor que a minha\n\nPor favor, tente novamente!');
            }
        }
        else {
            alert('Você errou!!\n\nDica: Sua cor é alfabéticamente maior que a minha\n\nPor favor, tente novamente!');
        }
    }
}
