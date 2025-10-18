// Espera a que todo el contenido del HTML se cargue primero
document.addEventListener('DOMContentLoaded', () => {

    // 1. Selecciona los elementos que vamos a usar
    const miTitulo = document.querySelector('h1');
    const miParrafo = document.querySelector('p');

    // 2. Agrega un "escuchador de eventos" al título
    // Esto significa: "cuando alguien haga clic en 'miTitulo', ejecuta esta función"
    miTitulo.addEventListener('click', () => {
        
        // 3. La acción que se ejecuta al hacer clic:
        // Cambia el texto del párrafo
        miParrafo.textContent = '¡Me hiciste clic!';
        
        // También cambiemos el color del título
        miTitulo.style.color = '#e63946'; // Un color rojo
    });

});