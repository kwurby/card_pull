function urlUpdate() {
    var Common = document.getElementById('Common').value;
    var Uncommon = document.getElementById('Uncommon').value;
    var Rare = document.getElementById('Rare').value;
    var Epic = document.getElementById('Epic').value;
    var Legendary = document.getElementById('Legendary').value;
    var Mythic = document.getElementById('Mythic').value;

    var Data = [Common, Uncommon, Rare, Epic, Legendary, Mythic];

    window.location = '?' + btoa(Data);
}

 function cardReader(cardNumber){
    document.getElementById('cardTable').innerHTML = '';
    var wh = 'style="--ww: 144px; --hh: 208px;"'
    if (cardNumber < 15){
        var wh = 'style="--ww: 288px; --hh: 416px;"'
    }
    while (cardNumber > 0) {

        document.getElementById('cardTable').innerHTML +=`
        <div class="card-container" ${wh}>
            <div class="card" id="${cardNumber}card">
                <div class="back"></div>
                <div class="front">#</div>
            </div>
        </div>
        `;


        cardNumber -= 1;
    }
}

function cardIdReturn(){
    var cardNumber = document.getElementById('cardsNumber').value
    var cards = []
    while (cardNumber > 0) {
        cards.push(`#${cardNumber}card .back`)
        cardNumber -= 1;
    }
    console.log(cards)
    return cards
}
function cardData(){
    var Common = document.getElementById('Common').value;
    var Uncommon = document.getElementById('Uncommon').value;
    var Rare = document.getElementById('Rare').value;
    var Epic = document.getElementById('Epic').value;
    var Legendary = document.getElementById('Legendary').value;
    var Mythic = document.getElementById('Mythic').value;

    var chance = Math.floor(Math.random() * 5000) + 1;

    if (chance <= 15) rarity = 'Mythic';
    else if (chance <= 65) rarity = 'Legendary';
    else if (chance <= 232) rarity = 'Epic';
    else if (chance <= 733) rarity = 'Rare';
    else if (chance <= 2400) rarity = 'Uncommon'
    else rarity = 'Common';

    switch (rarity) {
        case 'Common':    return [(Math.floor(Math.random() * Common) + 1),    '#727272', rarity];
        case 'Uncommon':  return [(Math.floor(Math.random() * Uncommon) + 1),  '#00a703', rarity];
        case 'Rare':      return [(Math.floor(Math.random() * Rare) + 1),      '#35abd6', rarity];
        case 'Epic':      return [(Math.floor(Math.random() * Epic) + 1),      '#a42cc7', rarity];
        case 'Legendary': return [(Math.floor(Math.random() * Legendary) + 1), '#ddc11f', rarity];
        case 'Mythic':    return [(Math.floor(Math.random() * Mythic) + 1),    '#ff0000', rarity];
    }
}

class newCard {
    constructor(element) {
        this.element = element

        this.detailReturn = cardData();

        this.cardNumber = this.detailReturn[0];
        this.color = this.detailReturn[1];
        this.rarity = this.detailReturn[2];

        this.cont = '';
        this.saveChance = 750;
        this.fireChance = 50;
        this.musicChance = 250;
        this.LBChance = 500;



        this.star = Math.floor(Math.random() * this.saveChance) + 1

        this.fire = Math.floor(Math.random() * this.fireChance) + 1
        this.music = Math.floor(Math.random() * this.musicChance) + 1
        this.LB = Math.floor(Math.random() * this.LBChance) + 1



        if (this.star == 1){
            this.cont = `
            <div id="star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
            `;
            if (this.fire == 1){
                this.cont = `
                <div id="star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>
                </div>
                `;
            }
            if (this.music == 1){
                this.cont = `
                <div id="star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>
                </div>
                `;
            }
            if (this.LB == 1){
                this.cont = `
                <div id="star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                </div>
                `;
            }
        }

        this.cont = this.cont + this.cardNumber;

        $(this.element).html(this.cont);
        $(this.element).css({
            'color': this.color,
            'background-image': `linear-gradient(#222222 50%, ${this.color}5d)`
        });
        $(`${this.element} #star svg`).css({
            'fill': this.color
        });
    }
}