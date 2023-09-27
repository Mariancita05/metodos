//-------------------------------------------------------------------NO MODIFICAR 👇-------------------------------------------------------------------//

const peliculas = [
    { titulo: "Titanic", año: 1997, produccion: "Estados Unidos", genero: "Drama", estreno: false, img: './src/img/titanic.jpg' },
    { titulo: "Inception", año: 2010, produccion: "Estados Unidos", genero: "Ciencia ficción", estreno: false, img: './src/img/Inception.jpg' },
    { titulo: "The 'odfather", año: 1972, produccion: "Estados Unidos", genero: "Crimen", estreno: false, img: "./src/img/thegodfather.jpg" },
    { titulo: "The Shawshank Redemption", año: 1994, produccion: "Estados Unidos", genero: "Drama", estreno: false, img: "./src/img/shawshank.jpg" },
    { titulo: "Oppenheimer", año: 2023, produccion: "Estados Unidos", genero: "Drama", estreno: true, img: "./src/img/oppenheimer.jpg" },
    { titulo: "My Adventures with Superman", año: 2023, produccion: "Estados Unidos", genero: "Acción", estreno: true, img: "./src/img/my_adventures_with_superman.jpg" },
    { titulo: "Black Widow", año: 2021, produccion: "Estados Unidos", genero: "Acción", estreno: false, img: "./src/img/5915477.jpg" },
    { titulo: "Hijack", año: 2023, produccion: "Reino Unido", genero: "Drama", estreno: true, img: "./src/img/hijack.jpg" },
    { titulo: "Barrabrava", año: 2023, produccion: "Argentina", genero: "Crimen", estreno: true, img: "./src/img/barrabrava_2023.jpg" },
    { titulo: "Spider-Man: No Way Home", año: 2021, produccion: "Estados Unidos", genero: "Acción", estreno: false, img: "./src/img/0243323.jpg" }
];


const pelis = document.querySelector('.peli') // Obtenemos sección de pelis. donde se deben agregar las img de cada pelicula

//-------------------------------------------------------------------NO MODIFICAR 👆-------------------------------------------------------------------//

/* const imgPelis = [
    {
        img: 'src/img/0243323.jpg'
    },
    {
        img: 'src/img/5915477.jpg'
    },
    {
        img: 'barrabrava_2023.jpg'
    },
    {
        img: 'Dune-209834814-large.jpg'
    },
    {
        img: 'hijack.jpg'
    },
    {
        img: 'Inception.jpg'
    },
    {
        img: 'my_adventures_with_superman.jpg'
    },
    {
        img: 'oppenheimer.jpg'
    },
    {
        img: 'shawshank.jpg'
    },
    {
        img: 'thegodfather.jpg'
    },
    {
        img: 'titanic.jpg'
    }
] */


//BOTON TODOS => Debe devolver todas las portadas (img) de las peliculas que hay.
const allFilms = () => {
    pelis.innerHTML = "";
    peliculas.map(obj => {
        pelis.innerHTML +=
            `<img src=${obj.img} alt="">`
    })
}
//const btnAllFilms = document.querySelector('#buttons')
//btnAllFilms.addEventListener('click', allFilms)
//BOTON ESTRENOS => Debe devolver las portadas (img) solo de las peliculas que esten en estreno 'estreno: true'
const estrenos = () => {
    const estreno = peliculas.filter((p) => p.estreno === true)
    pelis.innerHTML = "";
    estreno.map((p) => {
        pelis.innerHTML +=
            `<img src=${p.img} alt="">`
    })       
    
}

//BOTON ACCION => Debe devolver solo aquellas peliculas que contengan como genero ‘Acción’.
const accion = () => {
    const acc = peliculas.filter((a) => a.genero === "Acción")
    pelis.innerHTML = "";
    acc.map((a) => {
        pelis.innerHTML +=
            `<img src=${a.img} alt="">`
    })  
}

//BOTON DRAMA => Debe devolver solo aquellas peliculas que contengan como genero ‘Drama’.
const drama = () => {
    const dra = peliculas.filter((d) => d.genero === "Drama")
    pelis.innerHTML = "";
    dra.map((d) => {
        pelis.innerHTML +=
            `<img src=${d.img} alt="">`
    }) 
}

//BOTON CRIMEN => Debe devolver solo aquellas peliculas que contengan como genero ‘Crimen’.
const crimen = () => {
    const cri = peliculas.filter((c) => c.genero === "Crimen")
    pelis.innerHTML = "";
    cri.map((c) => {
        pelis.innerHTML +=
            `<img src=${c.img} alt="">`
    }) 
}

//BOTON TODOS => debe devolver aquellas peliculas que NO estén dentro de los generos anteriores.
const otros = () => {
    const otro = peliculas.filter((o) => o.genero !== "Acción" && o.genero !== "Drama" && o.genero !== "Crimen")
    pelis.innerHTML = "";
    otro.map((o) => {
        pelis.innerHTML +=
            `<img src=${o.img} alt="">`
    }) 
}