let botNode = document.querySelector(`#bot`);
let bTextNode = document.querySelector(`#bot-text`);
let logoNode = document.querySelector(`#logo`);
let textNode = document.querySelector(`#text-1`);
let commandsNode = document.querySelector(`#commands`);
let mainNode = document.querySelector(`#main`);
let developNode = document.querySelector(`#develop`)


bTextNode.addEventListener(`click`, function() {
    bTextNode.innerHTML = `Telegram Bot :D`
});


commandsNode.addEventListener(`click`, function() {
    mainNode.innerHTML = `<h3>Основные команды бота</h3>
    <p>🕴Профиль » П - ваш игровой профиль</p>
    <p>🪄 Ник - ваш игровой ник и его меню</p>
    <p>💸 Баланс » Б - ваш игровой баланс</p>
    <p>🏛 Банк - ваш игровой банк</p>
    <p>👑 Рейтинг - ваш игровой рейтинг</p>
    <p>🫂 Дать (сумма) - перевод между игроками</p>
    <p>🔗 Реф - ваш игровой реферальная ссылка, статистика о вашей реферальной ссылке</p>
    <p>🛒 Донат - рублевый баланс и донатный магазин</p>
    <p>🤵 Топ - лучшие игроки!</p>

    <br>

    <h3>🏠 Имущество</h3>
    <p>🏡 Дом » Мой дом - выводить информацию вашего дома</p>
    <p>🏡 Название дома - вы можете дать имя дому</p>

    <br>
    
    <h3>🎲 Игры</h3>
    <p>🃏 КАЗИНО</p>
    <p>└ Казино (реплай) (кол-во)</p>
    <p>🥛 СТАКАНЧИК</p>
    <p>└ Стаканчик (кол-во)</p>
    <p>💣 МИНЫ</p>
    <p>└ Мины (кол-во)</p>
    <p>🪙 ФЛИП</p>
    <p>└ Флип (кол-во) [о/р]</p>

    <br>

    <h3>🪄 Остальное</h3>
    <p>🤖 КАЛЬКУЛЯТОР</p>
    <p>└ .cl 1+1 - канкулятор</p>
    <p>🌅 АВАТАРКА</p>
    <p>└ ава - меню установки и удаление аватарки</p>
    <p>⚙️ АЙДИ</p>
    <p>└ .ид - просмотр айди</p>
    `;
});
