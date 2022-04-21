$(function(){

    const myAjax = new Ajax();
    const tomb = [];
    let apivegpont = "szakdogak";  

    myAjax.adatbeolvas(apivegpont,tomb,megjelenit);

    function megjelenit(){
        const szulo = $(".listaadmin");
        const sablon = $(".fejlec");
        szulo.empty();
        sablon.show();
        tomb.forEach(function(elem,index){
            const szakdoga = sablon.clone().appendTo(szulo);
            const szakdogak = new Szakdoga(szakdoga, elem, index);
        });
        sablon.hide();
    }

    $("#uj").on("click", () => {
        let ujAdat = {
            'szakdoga_nev':$(".szakdoga_nev").val(),
            'githublink':$(".githublink").val(),
            'oldallink':$(".oldallink").val(),
            'tagokneve':$(".tagokneve").val()
        };
        myAjax.adatkuldes(apivegpont, ujAdat);
    });

    $(window).on("modosit",(esemeny)=>{
        let aktSorszam = esemeny.detail;
        let ujAdat = {
            'szakdoga_nev':$(".szakdoga_nev").val(),
            'githublink':$(".githublink").val(),
            'oldallink':$(".oldallink").val(),
            'tagokneve':$(".tagokneve").val()
        };
        myAjax.adatmodosit(apivegpont, ujAdat, aktSorszam);
    });

    $(window).on("torol", (esemeny)=>{
        let aktSorszam = esemeny.detail;
        myAjax.adattorles(apivegpont,aktSorszam);
    });    
});