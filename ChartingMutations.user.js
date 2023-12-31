// ==UserScript==
// @name         ChartingMutations
// @version      1.0
// @description  Shows you how to mutate seeds in the garden.
// @author       FrustratedProgrammer
// @match        *://orteil.dashnet.org/cookieclicker/
// @icon         data:image/png;base64,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
// ==/UserScript==
(function () {
    let readyCheck = setInterval(() => {
        let theGame = unsafeWindow.Game || Game || window.Game;
        if(typeof theGame !== 'undefined' && typeof theGame.ready !== 'undefined' && theGame.ready){
            theGame.LoadMod('https://frustrated-programmer.github.io/ChartingMutations/ChartingMutations.js');
            clearInterval(readyCheck);
            theGame = 0;
            readyCheck = 0;
        }
    }, 1000);
})();
