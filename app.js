// Importar mongoose
const mongoose = require('mongoose');

// URL de la base de datos
const url_bd = 'mongodb://localhost:27017/Libreria';

// Conectar a la base de datos
mongoose.connect(url_bd)
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch((err) => {
    console.log(err);
});

// Esquema para la colección libros
const esquema_Libro = new mongoose.Schema({
    nombre_del_libro: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    año_de_publicacion: {
        type: Date,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    existencia: {
        type: Number,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
});

// Modelo para la colección libros
const Libro = mongoose.model('Libro', esquema_Libro);

// Crear un nuevo documento en la colección libros
Libro.create({
    nombre_del_libro: 'La sombra del viento',
    autor: 'Gabriel de Anton',
    año_de_publicacion: new Date('1967-05-30'),
    editorial: 'Porrua',
    existencia: 10,
    paginas: 477,
    categoria: 'Novela'
})
.then((libro) => {
    console.log('Libro creado:', libro);
})
.catch((err) => {
    console.log(err);
});
