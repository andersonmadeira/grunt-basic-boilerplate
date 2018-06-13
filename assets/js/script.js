$(document).ready(function() {
    var count = 0;
    $span = $(document).find('span');
    $span.text(count);
    $('#btn').click(function() {
        $span.text(++count+'');    
    });
});