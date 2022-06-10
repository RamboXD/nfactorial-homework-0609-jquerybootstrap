$('document').ready(function(){
    //  alert("ready");
    $('button').on("click", function(){
        var name = $("input[id='nm']").val();
        var role = $("input[id='rl']").val();
        var adverb = $("input[id='ab']").val();
        var adjective = $("input[id='ae']").val();
        
        $('#result').text('Бір күні '+ name + ' ' + adverb+ ' келе жатып, '+ adjective+' '+role+' туралы ойлады');
    });
});