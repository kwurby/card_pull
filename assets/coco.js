$(document).ready(function() {
    //NOTE: This is the code that is used to get the data from the url.
    var Url = window.location.href;
    var urlData = Url.indexOf("?") + 1;

    var Common = 1;
    var Uncommon = 1;
    var Rare = 1;
    var Epic = 1;
    var Legendary = 1;
    var Mythic = 1;

    if (urlData != 0) {
        console.log(atob(Url.substring(urlData)));
        urlString = atob(Url.substring(urlData));
        var DataIn = urlString.split(',');

        var Common = DataIn[0];
        var Uncommon = DataIn[1];
        var Rare = DataIn[2];
        var Epic = DataIn[3];
        var Legendary = DataIn[4];
        var Mythic = DataIn[5];
    }

    document.getElementById('Common').value = Common;
    document.getElementById('Uncommon').value = Uncommon;
    document.getElementById('Rare').value = Rare;
    document.getElementById('Epic').value = Epic;
    document.getElementById('Legendary').value = Legendary;
    document.getElementById('Mythic').value = Mythic;

    let CardA = new newCard('#a');
    let CardB = new newCard('#b');

    CardA.generate();
    CardB.generate();

    $(".card").click( function() {
        $(this).toggleClass('flip');
    });

    function reroll() {
        $("#a").removeClass('Mythic');
        $("#b").removeClass('Mythic');

        $(".left a").addClass('disabled');
        $(".card").addClass('disabled');
        setTimeout(function(){
            CardA.regenerate();
            CardB.regenerate();

            $(".left a").removeClass('disabled');
            $(".card").removeClass('disabled');
        }, 1000);
        $(".card").removeClass('flip');
    }

    $(".cardReset").click( function() { reroll() });

    $("#setBut").click( function() {
        $("#settings").toggleClass('menu');
        $("#settings").toggleClass('menuNone');
    });
});