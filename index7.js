$(document).ready(function(){
    
    $('.tgl2').before('<img id="imgtg" src="setinhad.ico" />');
    
    $('.tgl2').css('display', 'none')
    
    $('img', '#box-toggle2').click(function() {
        
    $(this).next().slideToggle('fast')
    .siblings('.tgl2:visible').slideToggle('fast');
    
    // aqui começa o funcionamento do plugin
    
    //$(this).toggleText('Revelar','Esconder')
    
    //.siblings('span').next('.tgl:visible').prev()
    
    //.toggleText('Revelar','Esconder')
    
    });

    })