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
        this.saveChance = 1000;
        this.star = Math.floor(Math.random() * this.saveChance) + 1
    }
    generate() {
        if (this.rarity == 'Mythic'){
            $(this.element).addClass('Mythic')
        };

        if (this.star == 1){
            this.cont = `
            <div id="star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
            `;
        }

        this.cont = this.cont + this.cardNumber;

        $(this.element).html(this.cont);
        $(this.element).css({
            'color': this.color,
            'background-image': `linear-gradient(#291624 50%, ${this.color}5d)`
        });
        $(`${this.element} #star svg`).css({
            'fill': this.color
        });
    }
    regenerate(){
        //? generate Data
        this.detailReturn = cardData();
        this.cardNumber = this.detailReturn[0];
        this.color = this.detailReturn[1];
        this.rarity = this.detailReturn[2];
        this.cont = '';

        this.star = Math.floor(Math.random() * this.saveChance) + 1

        //? generate Card
        if (this.rarity == 'Mythic'){
            $(this.element).addClass('Mythic')
        };

        if (this.star == 1){
            this.cont = `
            <div id="star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
            </div>
            `;
        }
        this.cont = this.cont + this.cardNumber;

        $(this.element).html(this.cont);
        $(this.element).css({
            'color': this.color,
            'background-image': `linear-gradient(#291624 50%, ${this.color}5d)`
        });
        $(`${this.element} #star svg`).css({
            'fill': this.color
        });
    }
}