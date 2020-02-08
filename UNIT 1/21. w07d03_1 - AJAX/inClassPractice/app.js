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

/*
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

*/


/*
$(() => {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Tangled'
    }).then(
        (data) => {
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rated').html(data.Rated);
        },
        () => {
            console.log('bad');
        }
    );
})

*/

// Make dynamic AJAX requests // 

$(() => {
    $('form').on('submit', (event) => {

        event.preventDefault();

        const userInput = $('input[type="text"]').val();

        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data) => {
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            () => {
                console.log('bad');
            }
        );
    })
})