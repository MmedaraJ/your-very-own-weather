$(document).ready(function(){
    $('form').submit(function(){
        var city = $('#city').val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=aad44339dfef1ca75f84d388b17727f7";
        $.get(url, function(res){
            $('h2').text(res.main.temp);
        }, 'json');
        return false;
    });
});