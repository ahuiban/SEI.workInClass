console.log('app.js');

$(() => {

    $('.outside').on('click', () => {
        console.log('OUTSIDE is clicked');
    });

    $('.inside').on('click', () => {
        console.log('INSIDE is clicked');
    });

    $('body').on('click', () => {
        console.log('BODY is clicked');
    });

});