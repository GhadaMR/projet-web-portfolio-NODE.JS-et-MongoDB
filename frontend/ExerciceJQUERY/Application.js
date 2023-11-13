$(document).ready(function() {
    $("#btn_Exe1").click(function() {
        if ($("#Exe1").is(":visible")) {
            alert("Element visible");
            $("#Exe1").hide();
        } else {
            alert("Element caché");
            $("#Exe1").show();
        }
    });
    $("#btn_Exe2").click(function() {
        var contenuTextarea = $("#textareaEx2").val();
        alert(contenuTextarea);
    });
    $("#btn_Exe3").click(function() {
        $("#imageEx3").attr("src", "download.jpeg");
    });
    $('#btn_Exe4').click(function(){
        $('#Exe4').css({'transform': 'rotate(45deg)', 'text-shadow': '2px 2px 4px #000'});
    });
    $('#btn_Exe4').click(function() {
        $("#imageEx5").fadeTo('slow', 0.5);
    }, function(){
        $("#imageEx5").fadeTo('slow', 1);
    });
    var radioHtml = '<input type="radio" name="niveauEtude" value="1er"> 1er' +
                    '<input type="radio" name="niveauEtude" value="2eme"> 2eme' +
                    '<input type="radio" name="niveauEtude" value="3eme"> 3eme';
     $("#Exe6").append(radioHtml);
     $("#Exe6").hide();
    $("#btn_Exe6").click(function() {
        $("#Exe6").show();         
     });
    $("#btn_Exe7").click(function() {
        var valeurRadio = $("input[name='niveauEtude']:checked").val();
        alert("Niveau d'étude sélectionné : " + valeurRadio);
    });

    var checkboxHtml = '<input type="checkbox" id="chk_ex"> J\'accepte les règles et droits du site';
    $("#Exe8").append(checkboxHtml);
    $("#Exe8").hide();
    $("#btn_Exe8").click(function() {
        $("#Exe8").show();         
     });
   
    $("#btn_Exe9").click(function() {
        if ($("#chk_ex").is(":checked")) {
            alert("Case cochée");
        } else {
            alert("Case non cochée");
            $('#bip')[0].play();
        }
    });
    $("#btn_Exe10").click(function() {
    $("td[id^='Exe']").hide();
    });
});