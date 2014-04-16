$( document ).ready(function() {
    cargarMapa();
});

window.onresize = function(event) {
    cargarMapa();
};

function cargarMapa(){
    var ancho = $('#columna_izquierda').width() - 60;
    var alto = Math.floor(ancho * 0.6);
    $('#contenedorMapa').html("<iframe src='https://mapsengine.google.com/map/embed?mid=zptRPYVWo6Ig.krIjweNgR7Qg' width='" + ancho + "' height='" + alto + "'></iframe>");
V}
