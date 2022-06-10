$('document').ready(function(){
    //  alert("ready");
    $('button[id="btn"]').on("click", function(){
        var wd = $("input[id='nm']").val();
        var ht = $("input[id='rl']").val();
        var nmb = $("input[id='ab']").val();
        var res=wd*ht*nmb;
        $('#result').text(res);
    });
});