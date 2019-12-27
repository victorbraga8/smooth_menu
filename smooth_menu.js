    
    // Exemplo de Estrutura de Menu Nav

    // O Calculo da Altura no HeaderAltura, considera a Tag nav que está logo abaixo da abertura do Header.

    // <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">				
    //     <ul class="nav navbar-nav navbar-right">
    //         <li class="dropdown mm-menu">
    //             <a class="slide-menu" href="#">Home</a>							
    //         </li>      	
    //     </ul>
    // </div>

     // Importante -> Importar esse Script no FOOTER
    
  $(document).ready(function(){
    // Aqui vai a Classe do Menu Nav que é aberta após a abertura do Header  
    var headerAltura = $('.navbar-inverse').height();  

    // Exemplo de como obter a altura de forma Responsiva.
    // var headerAltura = $('.navbar-inverse').height() + $('.seletor-do-menu-collapse/responsivo').height();  

    // Aqui vai a Classe que esta na TAG a do Menu Nav 
    $('.slide-menu').click(function(e){              
        var linkHref = $(this).attr('href');        
        $('html, body').animate({            
            scrollTop:$(linkHref).offset().top - headerAltura},500); // O 500 é a velocidade que a "animação" na tela irá apresentar, esse valor pode ser aumentado ou diminuido.      
        e.preventDefault();
    });
});
