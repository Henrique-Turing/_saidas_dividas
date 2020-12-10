$(document).ready(function(){
    
    $('.tgl1').before('<img id="imgtg" src="setinhad.ico" />');
    
    $('.tgl1').css('display', 'none')
    
    $('img', '#box-toggle1').click(function() {
        
    $(this).next().slideToggle('fast')
    .siblings('.tgl1:visible').slideToggle('fast');
    
    // aqui começa o funcionamento do plugin
    
    //$(this).toggleText('Revelar','Esconder')
    
    //.siblings('span').next('.tgl:visible').prev()
    
    //.toggleText('Revelar','Esconder')
    
    });

    })