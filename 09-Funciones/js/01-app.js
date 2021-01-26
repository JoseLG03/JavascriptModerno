let reproductor = {
    play: function(id){
        console.log(`Reproduciendo canción n° ${id}.`);
    },
    stop: function(id){
        console.log(`Pausa en la canción n° ${id}.`);
    },
    borrar: function(id){
        console.log(`Borrada canción n° ${id}.`);
    }
}

reproductor.play(2);
reproductor.stop(4);
reproductor.borrar(3);

function aprender(materia){
    return console.log(`Bienvenido a el estudio de ${materia}.`);
}

aprender("Historia");

aprendiendo = (materias) => {
    return console.log(`Bienvenido a el estudio de ${materias}.`);
}

aprendiendo("Programacion");