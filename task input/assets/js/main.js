// 2 input və düymə verilir, istifadəçi 1 inputa ad daxil edir və düyməyə kliklədikdə inputdakı dəyər listə əlavə olunur (jquerydə append funksiyası var, onunla yazın). Digər input isə listdə olan adları axtarmaq üçün istifadə olunur və yazdıqca axtarışın nəticəsinə uyğun olan list itemları görsənir

$(document).ready(function(){
    $('.btn').click(function(){
        $('ul').append(`<li>${$('.text').val()}</li>`)
       
       
    })
    $('btn').click(function(){
         $('ul').append(`<li>${$('.search').val()}</li>`)
          $('ul').remove(`<li>${$('.search').val($('.text').val(''))})</li>`)
    })
});