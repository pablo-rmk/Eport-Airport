
$('document').ready(function () {

    $('.modal').modal('show');

    $('#flightNumber').text(Math.floor((Math.random() * 8999) + 1000));
    $('#terminalNumber').text(Math.floor((Math.random() * 10) + 10));
    $('#insertDate').text(fechaActual());
    $('#insertTime').text(horaActual());

    $('#button').click(function () {
        $('.modal').modal('hide')
    });
});

let fechaActual = () => {

    const fecha = new Date();

    let year = fecha.getFullYear();
    let month = parseInt(fecha.getMonth()) + 1;
    let day = parseInt(fecha.getDate());

    if (day < 10) {
        day = '0' + day;
    };
    if (month < 10) {
        month = '0' + month;
    };

    return `${day}/${month}/${year}`;

};

let horaActual = () => {

    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();

    if (horas === 0) {
        horas = '00';
    } else if (horas >= 1 && horas < 10) {
        horas = '0' + horas;
    }

    if (minutos === 0) {
        minutos = '00';
    } else if (minutos >= 1 && minutos < 10) {
        minutos = '0' + minutos;
    }

    return `${horas}:${minutos}`;
};

