const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function Mega_MdPair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let MegaMdEmpire = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Ubuntu", "Chrome", "20.0.04" ],
             });
             if(!MegaMdEmpire.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await MegaMdEmpire.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            MegaMdEmpire.ev.on('creds.update', saveCreds)
            MegaMdEmpire.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionMegaMD = fs.readFileSync('./session/creds.json');
                    MegaMdEmpire.groupAcceptInvite("F7PWUrpk5etGXKUh");
				const MegaMds = await MegaMdEmpire.sendMessage(MegaMdEmpire.user.id, { document: sessionMegaMD, mimetype: `application/json`, fileName: `creds.json` });
				
await MegaMdEmpire.sendMessage(MegaMdEmpire.user.id, {
  text: `> *𝗧𝗘𝗖𝗛𝗞𝗘𝗘𝗗 𝗕𝗢𝗜𝗜 sᴇssɪᴏɴ ɪᴅ ᴏʙᴛᴀɪɴᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ.*     
📁ᴜᴘʟᴏᴀᴅ ᴛʜᴇ ᴄʀᴇᴅs.ᴊsᴏɴ ғɪʟᴇ ᴘʀᴏᴠɪᴅᴇᴅ ɪɴ ʏᴏᴜʀ sᴇssɪᴏɴ ғᴏʟᴅᴇʀ. 

_*🪀𝗙𝗢𝗟𝗟𝗢𝗪 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗙𝗢𝗥 𝗠𝗢𝗥𝗘 𝗨𝗣𝗗𝗔𝗧𝗘𝗦:*_ 
> _https://whatsapp.com/channel/0029VbAZxXw5K3zbGOsMxK1g

> *ℂℝ𝔸𝔽𝕋𝔼𝔻 𝔸ℕ𝔻 ℂℝ𝔼𝔸𝕋𝔼𝔻 𝔹𝕐 𝕋𝕖𝕔𝕙𝕂𝕖𝕖𝕕*


> 🫩Ꭰϴ ΝϴͲ ՏᎻᎪᎡᎬ ᎽϴႮᎡ ՏᎬՏՏᏆϴΝ ᏆᎠ ϴᎡ ᏟᎡᎬᎠՏ.ᎫՏϴΝ ᏔᏆͲᎻ ᎪΝᎽϴΝᎬ ᎪΝᎠ ᏆҒ Ⴎ ΝᎬᎬᎠ ᎻᎬᏞᏢ ᏔᏆͲᎻ ᎠᎬᏢᏞϴᎽᎷᎬΝͲ ᏦᏆΝᎠᏞᎽ _*𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐓𝐇𝐄 𝐎𝐖𝐍𝐄𝐑 https://wa.me/27732521560*_  `,

  contextInfo: {
    externalAdReply: {
      title: "Successfully Generated Session",
      body: "TECHKEED-MD-Bots Session Generator 1",
      thumbnailUrl: "assets/connected.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VbAZxXw5K3zbGOsMxK1g",
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: MegaMds });

        await delay(100);
        removeFile('./session');
        return;
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Mega_MdPair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await Mega_MdPair()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
