$(document).ready(function() {
    $(".message").hide();
    
    $("#msg").click(function(){
        $("#message1").show();
    });

    $("#message1").click(function(){
        $("#message2").show();
    });

    $("#message2").click(function(){
        $("#message3").show();
    });

    $("#message3").click(function() {
        $("#audio")[0].play();
        $("body").css("background-image", "url('Joyeux-anniversaire.jpg')");
    });
});
