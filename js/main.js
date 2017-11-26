$(document).ready(function(){
    $("#btnGiris").click(function(){
        var kullanici=$("#kullanici").val();
        var parola=$("#parola").val();
        if (kullanici=="admin"&&parola=="admin"){
            window.location="anasayfa.html"
        }
    })
})