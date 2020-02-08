$(() => {

    // all the code goes here
    $(".calc-btn").on('click', function () {
        if ($(this).attr('data-role') != 'operator') {
            $(".display").val($(".display").val() + $(this).val());
        }
        else {
            if ($(".display").val() != '') {
                $(".display").val($(".display").val() + $(this).val());
            }
        }
    });
    $(".clear-btn").on('click', function () {
        $(".display").val('');
    });
    $(".calculate-btn").on('click', function () {
        const expression = $(".display").val();
        $(".display").val(eval(expression));
    });



    console.log("jQuery + Javascript works")
})


