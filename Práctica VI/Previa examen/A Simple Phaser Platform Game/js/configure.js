let configState = {
    preload: loadConfigAssets,
    create: doConfig
};

let btnEasy, btnAvg, btnNgtm;

function loadConfigAssets() {
    game.load.image('easyButton', 'assets/imgs/easyButton.png');
    game.load.image('avgButton', 'assets/imgs/averageButton.png');
    game.load.image('ngtmButton', 'assets/imgs/nightmareButton.png');
}

function doConfig() {
    game.add.image(0, 0, 'bg');

    let textTitle = 'Choose play level:';
    let styleTitle = {
        font: 'Rammetto One',
        fontSize: '20pt',
        fontWeight: 'bold',
        fill: '#b60404'
    };
    game.add.text(200, 40, textTitle, styleTitle);

    let vSpace = (game.world.height - 80) / 3;

    btnEasy = game.add.button(game.world.width / 2, vSpace, 'easyButton', onButtonPressed);
    btnEasy.anchor.setTo(0.5, 0.5);
    btnAvg = game.add.button(game.world.width / 2, vSpace * 2, 'avgButton', onButtonPressed);
    btnAvg.anchor.setTo(0.5, 0.5);
    btnNgtm = game.add.button(game.world.width / 2, vSpace * 3, 'ngtmButton', onButtonPressed);
    btnNgtm.anchor.setTo(0.5, 0.5);
}

function onButtonPressed(button) {
    // Write the code for this function
}