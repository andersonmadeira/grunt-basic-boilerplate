$(document).ready(function() {
    var count = 0;
    $span = $(document).find('span1');
    $span.text(count);
    $('#btn').click(function() {
        $span.text(++count+'');    
    });
});