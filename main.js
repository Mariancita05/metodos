const divProyectos = document.querySelector('#proyecto')

const IHTML = 'fa-brands fa-html5'
const ICSS = 'fa-brands fa-css3-alt'
const IJS = 'fa-brands fa-square-js'


const proyectos = [
    {
        img: 'https://tse1.mm.bing.net/th?id=OIP.kbRvdM0AQ-S2bp7B1LunCwHaJ4&pid=Api&P=0&h=180',
        title: 'Primer proyecto',
        description: 'Este es mi primer proyecto en el curso de programación',
        iconos: [IJS, IHTML, ICSS]
    },
    {
        img: 'https://tse1.mm.bing.net/th?id=OIP.kbRvdM0AQ-S2bp7B1LunCwHaJ4&pid=Api&P=0&h=180',
        title: 'Primer proyecto',
        description: 'Este es mi primer proyecto en el curso de programación',
        iconos: [IJS, IHTML, ICSS]
    }
]

const getCArds = proyectos.map(obj => {
    divProyectos.innerHTML += `<article>

    <div>
        <img src=${obj.img}
            alt="snauser" id="img-proyecto1">
    </div>
    <div class="descripcion">
        <h3>${obj.title}</h3>
        <p>${obj.description}
        </p>
    </div>
    <div class="iconos">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-square-js"></i>
    </div>



</article>`
})

/* AGREGAR ELEMENTO */
/* divProyectos.innerHTML += `<h1>Hola mundo! Estoy conectado</h1>` */
const setCards = () => {
    if (divProyectos.style.display === 'none') {
        divProyectos.style.display = 'flex'
    } else {
        divProyectos.style.display = 'none'
    }
}

const btnMC = document.querySelector('#btn-m-c')
btnMC.addEventListener('click', setCards)