const config = {
    tema: "Oscuro",
    // El idioma no viene aquí
};

const { tema, idioma = "es" } = config;

console.log(tema, idioma);
