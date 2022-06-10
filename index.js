$('document').ready(function(){
    //  alert("ready");
    $('button').on("click", function(){
        var name = $("input[id='nm']").val();
        var role = $("input[id='rl']").val();
        var adverb = $("input[id='ab']").val();
        var adjective = $("input[id='ae']").val();

        $('#result').html(`Бір күні <span id=col>${name}</span> <span id=col>${adverb}</span> келе жатып, <span id=col>${adjective}</span> <span id=col>${role}</span> туралы ойлады`);
    });
});