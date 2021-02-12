$(document).ready(function(){
    $.get('api/countVal', function(data) {
        let count = JSON.parse(data).count;

        $('#button1').html("Count: " + count);
    });

    $('#button1').click(function() {
        $.post('api/increment', {'count': 2}, function(data) {
            let count = JSON.parse(data).count;
            $('#button1').html("Count: " + count);
        });
    });
});

/*
$(document).ready(function(){
    var count = 0;

    $('#button1').click(function() {
        count++;
        $('#button1').html("Count: " + count);
    });
});
*/