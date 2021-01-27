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

let aprender = function(materia, materia2){
    return console.log(`Bienvenido al estudio de ${materia} y ${materia2}.`);
}

aprender("Historia", "Geografia");

aprendiendo = (materias, materias2) => console.log(`Bienvenido al estudio de ${materias} y ${materias2}.`);


aprendiendo("Programacion", "SQL");