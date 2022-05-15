/**
  * WhatsApp  : wa.me/6288232991394
  * Instagram : https://instagram.com/rdtyaptralvrtha
  * YouTube   : https://youtube.com/channel/UCIDFLJlqldM5PVx_U_HbXWw
  * GitHub    : https://github.com/ThadzBotZ
  * Library   : @adiwajshing/baileys
  * Thanks To : 
  *  - Allah SWT
  *  - Thadz BotZ (Me)
  *  - Hardianto (Website APIKey's)
  *
  *
  * © 2022 Thadz BotZ. All Right Reserved
**/
const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6282301133993','6285210474324','6285784775269','6289675602174']
global.premium = ['6282301133993','6285210474324','6285784775269','6289675602174']
global.ownername = 'OWNER'
global.botname = 'exzy Bot'
global.ig = 'https://instagram.com'
global.youtube = 'https://youtube.com'
global.github = 'https://github.com/fakeexzy'
global.packname = 'Exzy ygy'
global.author = '+6282301133993'
global.sessionName = 'session'
global.prefa = ['!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success!',
    admin: 'Only Admin!',
    botAdmin: 'Bot Harus Admin Dulu!',
    owner: 'Only Owner Bot!',
    group: 'Only Group!',
    private: 'Only Private Chat!',
    bot: 'Only Bot!',
    wait: 'Loading...',
    error: 'Error! Mungkin ApiKey Invalid!',
    endLimit: 'Limit Harian Anda Telah Habis, Batas Akan Direset Setiap 12 Jam',
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/zarn.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
