const cliente = {
    id: "CLI-992",
    nombre: "Laura",
    direccion: {
        ciudad: "Barcelona",
        codigoPostal: "08001",
        pais: "España",
    },
};

const {
    nombre,
    direccion: { ciudad, pais },
} = cliente;

console.log(nombre, ciudad, pais);
