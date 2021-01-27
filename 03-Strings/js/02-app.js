let reproductor = {
    rola:"",
    reproducir: id => console.log(`Reproduciendo canción con el ${id}.`),
    pausar: id => consolole.log(`Pausa en la canción ${id}.`),
    crearPlaylist: playlist => console.log(`Creada lista de reproducción de ${playlist}.`),
    set nuevaCancion(rola){
        this.rola = rola;
        console.log(`Añadiendo nueva canción: ${rola}.`);
    },
    get obtenerCancion(){
        console.log(`Su canción es ${this.rola}.`);
    }
}

reproductor.reproducir(2);
reproductor.crearPlaylist("Pop");

reproductor.nuevaCancion="Tijuana";
reproductor.obtenerCancion;