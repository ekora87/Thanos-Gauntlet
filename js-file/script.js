
$('#guantlet').click(function() {
    //$('.article-section, .characters').fadeOut(3000);
    //while ($('.article-section').length > 0) {
    // let num = $('.article-section').length;
    //     do {
          
    //      var random = Math.floor(Math.random()*10);
    //         $(".characters-icon").eq(random).fadeOut(1000);
    //     num = num -1;
    //     console.log("length: " + num);
    //     }
    //     while (num >= 0);
        
    
        setInterval(function(){
            if ($('.fade').length > 0) {
                var random = Math.floor(Math.random()*5);
                //console.log($(".fade").eq(random));
                
                $(".fade").eq(random).fadeOut(1000);
            
          }
        }, 1500);
});


