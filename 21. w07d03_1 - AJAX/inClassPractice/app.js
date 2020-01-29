console.log("works")

//old way to do AJAX
/*
$(() => {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
        success: (data) => {
            console.log(data);
        },
        error: () => {
            console.log("bad request");
        }
    });
});

*/

// new way with PROMISE

const promise = $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
});

promise.then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('bad request');
    }
);