const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Marisel*
> *BUGATTI REPO:*
*|* *https://github.com/betingrich3/Mercedes*
> *CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x*
*╰──────────────●●►*
> *Successfuly Updated*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363299029326322@newsletter',
      newsletterName: "Marisel",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Marisel',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/betingrich3/Mercedes" ,
thumbnailUrl: "https://i.imgur.com/Siem1bb.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
