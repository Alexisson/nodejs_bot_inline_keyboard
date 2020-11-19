const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '';
console.log('Bot has been started...');
const bot = new TelegramBot(TOKEN,{
    polling:{
        interval:300,
        autoStart:true,
        params:{
            timeout:10
        }
    }
});

bot.on('message',msg=>{
    const {id} = msg.chat;
        bot.sendMessage(id, 'Inline keyboard',{
            reply_markup:{
                inline_keyboard:[
                    [
                        {
                            text: 'Google',
                            url:'https://google.kz',
                            callback_data: '1'
                        }
                    ],
                    [
                        {
                            text: 'Reply',
                            callback_data: 'reply'
                        },
                        {
                            text: 'Forward',
                            callback_data: 'forward'
                        }
                    ],
                ]
            }

        })
    
})
