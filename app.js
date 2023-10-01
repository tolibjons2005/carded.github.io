var tg= window.Telegram.WebApp;
tg.expand()

tg.MainButton.textColor='#fff'
tg.MainButton.color='#000'

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText('dfs')
        item='4'
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(item);

});


