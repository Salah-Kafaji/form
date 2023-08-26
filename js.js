var steps = 0;
var next_steps = 0;
$('.Main_logo li').eq(0).fadeIn(300)

$(".first_next").click(function(){
        $('.sub-title li').removeClass('show_sub_title');
        $(".first_next").fadeOut(300);
        $(".description").fadeOut(300);
        $(".loader_CC").fadeOut(300,function(){
            $('.personal_info_forma').fadeIn(300); 
            $('.sub-title li').eq(1).addClass('show_sub_title');
        });
});

$(".next_to_start").click(function(){
    $('.sub-title li').removeClass('show_sub_title');
    $('.Main_logo li').fadeOut(300)

    $(".personal_info_forma").fadeOut(300,function(){
        $(".loader_CC").attr('style',''); 
        // $(".loader_CC").hide().fadeIn(300);
        $(".Evaluation-content").fadeIn(300);
        $(".secont_next").fadeIn(300);
        $('.sub-title li').eq(2).addClass('show_sub_title');
        $('.Evaluation-buttons li').eq(0).fadeIn(300)
        $('.Main_logo li').eq(1).fadeIn(300)
        
    });
});

$(".Evaluation-buttons button").click(function(){
    $(".Evaluation-buttons button").removeClass('button-not-checked');
    $(".Evaluation-buttons button").removeClass('button-checked');
    $(this).addClass('button-checked');
    var thisIndex = $(this).index();
    var thisParent = $(this).parent();
    thisParent.attr('data-eval', thisIndex)
    for(i=0 ;i < thisIndex;i++){
        thisParent.find('button').eq(i).addClass('button-not-checked');
    };
});


$(".secont_next").click(function(){
    next_steps++;
    $('.progress-circle').removeClass("p"+steps+"");
    steps=steps+9;
    if(steps >= 50){
        $('.progress-circle').addClass("over50");
    }
    if(steps < 100){
        if(steps == 90){
            steps++;
            $('.secont_next').fadeOut(300,function(){
                $('.send-info').fadeIn(300);
            });
            
        }
        $('.Main_logo li').fadeOut(300);
        $('.Evaluation-buttons li').fadeOut(300,function(){
          $('.Evaluation-buttons li').eq(next_steps).fadeIn(300);
          $('.progress-circle').addClass("p"+steps+"");
          $('.Main_logo li').eq(next_steps + 1).fadeIn(300);
      });
    }

});

