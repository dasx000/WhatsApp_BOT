//Ini Ada Yg Eror Dikit Tapi
//semua bot pasti ada eror!!
//Jangan Ubah Thx Rest Api Dan Thx To
//Ambil Case? Silahkan Gw baik
//Jgn Lupa Subscribe Yah 


//=====> THX TO <==========//
// MY PACAR
// Arifi Razzaq
// Fajar <Eleh>
// Angga <Gua Lah>
// ltsmeiky
// manikk

//=========> Jgn Hapus Thxx To! <=============//
//=========> Subs FxAg Xc <=========//


const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const request = require('request')
const speed = require('performance-now')
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const imgbb = require('imgbb-uploader')
const imgbbKey = "579e940362fad0cdef0df6cc0958e2d8"
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, sleep, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
var config = require('./config.json')
const { indo, eng } = require('./message/')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const { uploadimg } = require('./lib/uploadimg')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:das.\n' //Ini Nama kontak lu
            + 'ORG: Creator Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6285283427860:+62 85283427860\n'  //ini kontak/nomor lu
            + 'END:VCARD'
            
const vcard1 = 'BEGIN:VCARD\n' // JAN DI GANTI
            + 'VERSION:3.0\n' // JAN DI GANTI
            + 'FN:Arifi Razzaqq\n' // JAN DI GANTI TOD NTAR EROR
            + 'ORG:Owner 2;\n' // GANTI AJA
            + 'TEL;type=CELL;type=VOICE;waid=6289646775713:+62 896-4677-5713\n' // JAN DI GANTI TOD
            + 'END:VCARD' // JAN DI GANTI
        
numbernye = '0@s.whatsapp.net'
fake = '© Created By Angga' //Ini fake
const prefix = config.prefix
blocked = []   
limitawal = 99999 //limit
memberlimit = 1 //maksimal member limit
cr1 = '*By AnggaGanzz*'
cr = '*AnggaGanzzNihbod*' //fake reply
// config.lol = "dikyadis" // BELI SU?
var apikey = config.lol
TobzKey = "291F6uRDLIhlSpHp1hOy" //APIKEY TOBZ
XteamKey = "AkiraBotWa" //BELI SU
AnggaKey = "AnggaGanz" // itu Di bawah Desk yt gw
namo = 'AnggaGanzz' //Bisa ubah / ga tapi hati hati
ator = '+6285283427860' //author
fakereply = '© Created By Angga' //fake reply
fakereply1 = '© Created By Angga' //fakereply

/******** OWNER NUMBER**********/
const ownerNumber = config.ownerNumber
const pacarNumber = ["6289646775713@s.whatsapp.net"]  //ganti nomor lu!  
/************************************/

       
/*********** LOAD FILE ***********/
const sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Tengah Malam🌃"; break;
                case 1: jams = "Tengah Malam🌃"; break;
                case 2: jams = "Tengah Malam🌃"; break;
                case 3: jams = "Tengah Malam🌃"; break;
                case 4: jams = "Sahur🍙"; break;
                case 5: jams = "Subuh🕌"; break;
                case 6: jams = "Pagi🏙"; break;
                case 7: jams = "Pagi🏙"; break;
                case 8: jams = "Pagi🏙"; break;
                case 9: jams = "Pagi🏙"; break;
                case 10: jams = "Pagi🏙"; break;
                case 11: jams = "Siang🌁"; break;
                case 12: jams = "Dzuhur🕌"; break;
                case 13: jams = "Siang🌁"; break;
                case 14: jams = "Siang🌁"; break;
                case 15: jams = "Ashar🕌"; break;
                case 16: jams = "Sore🌇"; break;
                case 17: jams = "Petang🌆"; break;
                case 18: jams = "Buka Puasa👨‍👩‍👧‍👦"; break;
                case 19: jams = "isya🕌"; break;
                case 20: jams = "Malam🌆"; break;
                case 21: jams = "Malam🌆"; break;
                case 22: jams = "Oyasumi Nassai🌌"; break;
                case 23: jams = "Tengah Malam🌃"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const das = new WAConnection()
   das.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('Yogiツ','red'),color('X','lime'),color('FxSx','red'))
})

das.on('credentials-updated', () => {
	const authInfo = das.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && das.loadAuthInfo('./session.json')
das.connect();



das.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await das.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = das.contacts[num] != undefined ? das.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : das.contacts[num].notify || das.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await das.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hasil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			das.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Met Dateng🗿, Jan lupa intro dan baca rules bruh...* @${num.split('@')[0]}`, contextInfo: { mentionedJid: [num] }})
			})
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		const moment = require('moment-timezone')
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = das.contacts[num] != undefined ? das.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : das.contacts[num].notify || das.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await das.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hasil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			das.sendMessage(mdata.id, fs.readFileSync('hasil.jpg'), MessageType.image, {caption: `*Sayonara👋🏻*@${num.split('@')[0]}\n`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
	das.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	das.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? das.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? das.user.jid : das.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? das.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
    ❏ Pesan : *${body ? body : '-'}*
─────────────────────`
				das.sendMessage(from, strConversation, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await das.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
─────────────────────`

				const buff = fs.readFileSync(savedFilename)
				das.sendMessage(from, strConversation, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				das.sendMessage(from, buff, MessageType.sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await das.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `─────────────────────
◪ *ANTIDELETE*
│
└ ❏ Nama : *${pushname}*
    ❏ Nomer : ${sender.replace('@s.whatsapp.net', '')}
    ❏ Tipe : Text
    ❏ Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
    ❏ Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
    ❏ Pesan : ${body ? body : '-'}\`\`\`
─────────────────────`
				das.sendMessage(from, buff, MessageType.image, { contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
	fakeimagecuy = fs.readFileSync('me.jpg')
   	        const mek2 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99, status: 200, thumbnail: fakeimagecuy, surface: 200, message: fakereply, orderTitle: fakereply1, sellerJid: '0@s.whatsapp.net'} } }              	 	         
	das.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			// if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const q1 = q.substring(0, q.indexOf('|') - 1)
			const q2 = q.substring(q.lastIndexOf('|') + 2)
			const ar = args.map((v) => v.toLowerCase())
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const botNumber = das.user.jid
			const sender = mek.key.fromMe ? das.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			// const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = das.contacts[sender] != undefined ? das.contacts[sender].vname || das.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await das.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender) || botNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const fakethumb = (teks, tex) => {
			das.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/fake.jpeg'),quoted:mek, caption: tex, contextInfo: {forwardingScore: 210, isForwarded: true}})
			}
			// 	das.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/fake.jpeg'),quoted:mek,caption:yes,  contextInfo: { mentionedJid: ["0@s.whatsapp.net", sender, config.ownerNumber, "62895418200111@s.whatsapp.net", "6281111111111@s.whatsapp.net","6282117236765@s.whatsapp.net"], forwardingScore: 210, isForwarded: true }})
			// }
			const reply = (teks) => {
				das.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				das.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? das.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : das.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    das.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			das.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    das.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    // Anti Call Encpryt
"AcJ8omdjg+kR442EUUZrymY8q+uVvecDjZp93Y8FYr2wG1TwzWVZMLmwrcsmVoiQKrqRFR5vd69Byn4FQHu9b9tZMWH91HFg0dpIwInRgEO2uDtJKeQuSxvNb475Zjn8ph5xyFHA2g7ar5TRvrlMQcFZwGTd1mDuREktIH5QL097cDGSnO4TJv/FZHmqvy8OXlRgo7oZV0/AxPwQrGdMR3WXBplRpPBGuByrvSIs4cbXeEojDnP59M+2lBRww4yLmdyyjAxyztWVIbj92EWhXwwTMUXbT7/uSLUl5HWSiFV/DOmJ3wF1VRLyXwBJfSj6lov8Zg+GLU+85LnXA3LcF4oTpMRMGkADCIKJrFrWMPKMO/wvJrseIyRthUtrc51Q/Ae6sqZNtguW7WqXJvcEQRPnzP1Cj8KUpxklVWsGh9s2Y2++TVqrkfRdPqAp1O6qFhCsUtnKTsCGywhBATGsDPYMQimdohccGotVtPD/b09l3SQacUHm8PGaCusrR9cdwxH5KNZI7pE"
	        /*****************END SCURITY FEATURE ********/
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'

           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
//////// ANTI LINK ///////////////////////////////////////////////
		if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		das.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*_「 Link Terdeteksi 」_*\nHei *${pushname}*  *「 LINK TERDETEKSI ⌋ MAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`)
		setTimeout( () => {
			das.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			das.updatePresence(from, Presence.composing)
			reply("SEEE YUO KACK;)")
		}, 0)
	}
	
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => das.groupRemove(from, sender))
                        .then(() => {
                            das.sendMessage(from, `*「 ANTI BADWORD 」*\n akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => das.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return das.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            das.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        das.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			
		for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    das.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
////////// Sambung Kata //////////////////////////////////////////////
		  if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
			kuis = true
			jawaban = sambungkata[sender.split('@')[0]]
			userAnswer = budy.toLowerCase()
			if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${apikey}&text=${userAnswer}`)
				await das.sendMessage(from, get_result.result, text, { quoted: mek }).then(() => {
					sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
					fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
				})
			} else {
				reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
			}
		}

 //========================================================================================================================//
	if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
		kuis = true
		var answer_array = ["0", "1", "2", "3", "4", "5"]
		if (!answer_array.includes(budy)) return reply("Beri jawaban antara 0, 1, 2, 3, 4, 5")
		var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
		if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
		var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
		var get_result = await fetchJson(ini_url)
		var get_result = get_result.result
		if (get_result.hasOwnProperty("name")) {
			var ini_name = get_result.name
			var description = get_result.description
			var ini_image = get_result.image
			var ini_image = await getBuffer(ini_image)
			ini_txt = `${ini_name} - ${description}\n\n`
			ini_txt += "Sekian dan terima kasih"
			await das.sendMessage(from, ini_image, image, { quoted: mek, caption: ini_txt }).then(() => {
				delete akinator[sender.split('@')[0]]
				fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
			})
			return
		}
		var { question, _, step } = get_result
		ini_txt = `${question}\n\n`
		ini_txt += "0 - Ya\n"
		ini_txt += "1 - Tidak\n"
		ini_txt += "2 - Saya Tidak Tau\n"
		ini_txt += "3 - Mungkin\n"
		ini_txt += "4 - Mungkin Tidak\n"
		ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
		if (budy == "5") {
			var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
			var get_result = await fetchJson(ini_url)
			var get_result = get_result.result
			var { question, _, step } = get_result
			ini_txt = `${question}\n\n`
			ini_txt += "0 - Ya\n"
			ini_txt += "1 - Tidak\n"
			ini_txt += "2 - Saya Tidak Tau\n"
			ini_txt += "3 - Mungkin\n"
			ini_txt += "4 - Mungkin Tidak"
			ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
		}
		await das.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
			const data_ = akinator[sender.split('@')[0]]
			data_["question"] = question
			data_["step"] = step
			akinator[sender.split('@')[0]] = data_
			fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
		})
	}

//========================================================================================================================//     
///////////////// Tebak Gambar //////////////////////////////////////////
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
    
        //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
switch(command) {

	case 'menu': 
			const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const uangku = checkATMuser(sender) 
			const levelnya = getLevelingLevel(sender)
			const xpnya = getLevelingXp(sender)
			const totalUser = _registered.length
			// try {
			// 	pp_user = await das.getProfilePicture(sender)
			// 	} catch {
				// pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
				// }
				// ppriu = await getBuffer(pp_user)
				// buffer2 = await getBuffer(`http://api.lolhuman.xyz/api/random/exo?apikey=${config.lol}`)
			// fakethumb(fs.readFileSync('./media/menu.jpeg'), ind.menu(pushname, sender, levelnya, xpnya,reqXp, uangku, role, totalUser))
			if ((args[0] === '1') || (ar[0] === 'media')) { 
                    await reply(`${ind.menuMedia()}`)
                } else if ((args[0] === '2') || (ar[0] === 'bot')) {
                    await reply(`${ind.menuBot()}`)
                } else if ((args[0] === '3') || (ar[0] === 'edukasi')) {
                    await reply(`${ind.menuEdu()}`)
                } else if ((args[0] === '4') || (ar[0] === 'stiker')) {
                    await reply(`${ind.menuSticker()}`)
                } else if ((args[0] === '5') || (ar[0] === 'anime')) {
                    await reply(`${ind.menuAnime()}`)
                } else if ((args[0] === '6') || (ar[0] === 'maker')) {
                    await reply(`${ind.menuMaker()}`)
                } else if ((args[0] === '7') || (ar[0] === 'grup')) {
                    await reply(`${ind.menuGrup()}`)
                } else if ((args[0] === '8') || (ar[0] === 'game')) {
                    await reply(`${ind.menuGame()}`)
                    
                } else if ((args[0] === '9') || (ar[0] === 'owner')) {
                    // if (!isOwner) return await reply(`${ind.ownerOnly()}`)
                    await reply(`${ind.menuOwner()}`)
                } else if ((args[0] === '10') || (ar[0] === 'leveling')) {
                    if (!isGroupMsg) return await reply(`${ind.groupOnly()}`)
                    await reply(`${ind.menuLeveling()}`)
                
                }  else if ((args[0] === '11') || (ar[0] === 'tools')) {
                    await reply(`${ind.menuTools()}`)
                } else if ((args[0] === '12') || (ar[0] === 'fun')) {
                    await reply(`${ind.menuFun()}`)
                }  else if ((args[0] === '13') || (ar[0] === 'suport')) {
                    await reply(`${ind.menuShop()}`)
                } else if ((args[0] === '14') || (ar[0] === 'shop')) {
                    await reply(`${ind.menuShop(noOwner)}`)
                } else if (args[0] === '15' || (ar[0] === 'link')) {
                    await reply(`${ind.linkgrup()}`)
                } else if ((args[0] === '16') || (ar[0] === 'premium')) {
                    await reply(`${ind.menuPremium()}`)
                } else if (args[0] === '17') {
                    await reply(`${ind.menuKerang()}`)

                } else  {
			das.sendMessage(from, fs.readFileSync('./me.jpg'), image, {thumbnail:fs.readFileSync('./media/fake.jpeg'),quoted:mek, caption: ind.menu(pushname, sender, levelnya, xpnya,reqXp, uangku, role, totalUser)})
			}
			break
//*********************************  MENU MEDIA ***********************************************************************************//
		case 'tovideo'://
					if (!isQuotedSticker) return reply('Reply Gif nya')
					reply('Wait...')
					anume = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await das.downloadAndSaveMediaMessage(anume)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						das.sendMessage(from, buffers, video, { quoted: mek, caption: 'Sudah...' })
						fs.unlinkSync(ran)
					})
					break
	case 'drakorongoing':
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = "Ongoing Drakor\n\n"
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Thumbnail : ${x.thumbnail}\n`
				ini_txt += `Year : ${x.category}\n`
				ini_txt += `Total Episode : ${x.total_episode}\n`
				ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
			}
			reply(ini_txt)
			break
	case 'pixiv':
	case 'gambar':
			if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			query = args.join(" ")
			ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${config.lol}&query=${query}`)
			await das.sendMessage(from, ini_buffer, image, { quoted: mek })
			break	
	case 'ytsearch':
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${config.lol}&query=${query}`)
			get_result = get_result.result
			ini_txt = ""
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Views : ${x.views}\n`
				ini_txt += `Published : ${x.published}\n`
				ini_txt += `Thumbnail : ${x.thumbnail}\n`
				ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
			}
			reply(ini_txt)
			break
	case 'play':   
	case 'lagu':   
				
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))

			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			reply(ind.wait())
			play = body.slice(5)
			anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${q}&apikey=${config.zeks}`)
			if (anu.error) return reply(anu.error)
			infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
			buffer = await getBuffer(anu.result.thumbnail)
			das.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
			lagu = await getBuffer(anu.result.url_audio)
			das.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
			await limitAdd(sender)
			break

	case 'fbdl':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			ini_url = args[0]
			ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${config.lol}&url=${ini_url}`)
			ini_url = ini_url.result[0].link
			ini_buffer = await getBuffer(ini_url)
			await das.sendMessage(from, ini_buffer, video, { quoted: mek })
			break
case 'togif':
		if ((isQuotedSticker)) {
		const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
		file_name = getRandom(".mp4")
		request({
			url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${config.lol}`,
			method: 'POST',
			formData: {
				"img": fs.createReadStream(filePath),
			}
		}, function(error, response, body) {
			fs.unlinkSync(filePath)
			get_result = JSON.parse(body)
			getBuffer(get_result.result).then(result => {
				das.sendMessage(from, result, video, { quoted: mek, mimetype: Mimetype.gif })
				fs.unlinkSync(file_name)
			})
		});
	} else {
		reply(`Reply stickernya kawan`)
	}
	break
case 'tomp4':
	if ((isQuotedSticker)) {
		const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
		file_name = getRandom(".mp4")
		request({
			url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${config.lol}`,
			method: 'POST',
			formData: {
				"img": fs.createReadStream(filePath),
			}
		}, function(error, response, body) {
			fs.unlinkSync(filePath)
			get_result = JSON.parse(body)
			getBuffer(get_result.result).then(result => {
				das.sendMessage(from, result, video, { quoted: mek, mimetype: Mimetype.mp4 })
				fs.unlinkSync(file_name)
			})
		});
	} else {
		reply(`Reply stickernya kawan`)
	}
	break

	case 'zippyshare':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
			ini_url = args[0]
			ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${config.lol}&url=${ini_url}`)
			ini_url = ini_url.result
			ini_txt = `File Name : ${ini_url.name_file}\n`
			ini_txt += `Size : ${ini_url.size}\n`
			ini_txt += `Date Upload : ${ini_url.date_upload}\n`
			ini_txt += `Download Url : ${ini_url.download_url}`
			reply(ini_txt)
			break
	case 'pinterest':
			if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			query = args.join(" ")
			ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${config.lol}&query=${query}`)
			ini_url = ini_url.result
			ini_buffer = await getBuffer(ini_url)
			await das.sendMessage(from, ini_buffer, image, { quoted: mek })
			break
	case 'pinterestdl':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
			ini_url = args[0]
			ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${config.lol}&url=${ini_url}`)
			ini_url = ini_url.result[0]
			ini_buffer = await getBuffer(ini_url)
			await das.sendMessage(from, ini_buffer, image, { quoted: mek })
			break
	case 'tiktokmusic':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			ini_link = args[0]
			get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${config.lol}&url=${ini_link}`)
			await das.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
			break	
			
	case 'joox':
			if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${config.lol}&query=${query}`)
			get_result = get_result.result
			cuy = `
─────────────────────
◪ 「 *JOOX PLAY* 」
│
└ ❏ Judul: *${get_result.info.song}*
❏ Artis: *${get_result.info.singer}*
❏ Album: *${get_result.info.album}*
❏ Durasi: ${get_result.info.duration}
❏ Tipe: *${command}*
─────────────────────`
			thumbnail = await getBuffer(get_result.image)
			await das.sendMessage(from, thumbnail, image, { quoted: mek, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
			get_audio = await getBuffer(get_result.audio[0].link)
			await das.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4',  filename: `${get_result.info.song}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
			break		
	case 'twitterdl':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			ini_url = args[0]
			ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${config.lol}&url=${ini_url}`)
			ini_url = ini_url.result
			ini_url = ini_url[ini_url.length - 1].link
			ini_buffer = await getBuffer(ini_url)
			await das.sendMessage(from, ini_buffer, video, { quoted: mek })
			break
	case 'tiktoknowm': 
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply('Urlnya mana sayang?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
			ige = body.slice(12)
			anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${config.lol}&url=${args[0]}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			buffer = await getBuffer(anu.result.link)
			das.sendMessage(from, buffer, video, )
			break
	case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
							if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
							ini_link = args[0]
							get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${config.lol}&url=${ini_link}`)
							get_result = get_result.result
							asu2 = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
	❏ Chanel: *${get_result.uploader}*
	❏ Durasi: ${get_result.duration}
	❏ Viewers: *${get_result.view}*
	❏ Tipe: *${command}*
─────────────────────`
							ini_buffer = await getBuffer(get_result.thumbnail)
							das.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu2, contextInfo: { forwardingScore: 2, isForwarded: true} })
							get_audio = await getBuffer(get_result.link[0].link)
							das.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
							break
	case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis())
							if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
							ini_link = args[0]
							get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${config.lol}&url=${ini_link}`)
							get_result = get_result.result
							asu = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
	❏ Chanel: *${get_result.uploader}*
	❏ Durasi: ${get_result.duration}
	❏ Viewers: *${get_result.view}*
	❏ Tipe: *${command}*
─────────────────────`
							ini_buffer = await getBuffer(get_result.thumbnail)
							das.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu, contextInfo: { forwardingScore: 508, isForwarded: true}})
							get_audio = await getBuffer(get_result.link[3].link)
							das.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4',filename: `${get_result.title}.mp3`, quoted: mek,  contextInfo: { forwardingScore: 508, isForwarded: true}})
							break
	case 'apkpure'://	
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${q}&apikey=${config.zeks}`, {method: 'get'})
			teks = '=================\n'
			for (let i of data.result) {
			teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
			}
			reply(teks.trim())
			await limitAdd(sender)
			break
	case 'igvideo': 
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply('Urlnya mana sayang?')
			if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
			ige = body.slice(9)
			anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${config.lol}&url=${args[0]}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			buffer = await getBuffer(anu.result)
			das.sendMessage(from, buffer, video, )
			break
	case 'igpost': 
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply('Urlnya mana sayang?')
			if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
			ige = body.slice(8)
			anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${config.lol}&url=${args[0]}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			buffer = await getBuffer(anu.result)
			das.sendMessage(from, buffer, image, )
			break
	case 'igtv': 
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply('Urlnya mana sayang?')
			if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
			ige = body.slice(6)
			anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${config.lol}&url=${args[0]}`, {method: 'get'})
			if (anu.error) return reply(anu.error)
			buffer = await getBuffer(anu.result)
			das.sendMessage(from, buffer, video, )
			break
	case 'imgtopdf':
			if (!isRegistered) return reply(ind.noregis())
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
				reply(ind.wait())
				owgi = await das.downloadAndSaveMediaMessage(ted)
				tels = body.slice(10)
				anu = await imgbb(imgbbKey, owgi)
				// hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${config.lol}&img=${anu.display_url}`)
				hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/convert/imgtopdf?apikey=${config.lol}&img=${anu.display_url}`) 
				das.sendMessage(from, hehe, document, {quoted:mek, mimetype: 'application/pdf',filename: `imgtopdf.pdf`, contextInfo: { forwardingScore: 210, isForwarded: true }})
				
			} else {
				reply('Jangan tambah kan apapun pada command') 
			}
	case 'removebg'://
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
			reply(ind.wait())
			owgi = await das.downloadAndSaveMediaMessage(ted)
			tels = body.slice(10)
			anu = await imgbb(imgbbKey, owgi)
			hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${config.lol}&img=${anu.display_url}`)
			das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
			} else {
			  reply('Jangan tambah kan apapun pada command')
			}
			break
	case 'tiktokstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
			get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${config.lol}`, {method: 'get'})
			get_result = get_result.result
			txt = `Link : ${get_result.username}\n`
			txt += `Bio : ${get_result.bio}\n`
			txt += `Followers : ${get_result.followers}\n`
			txt += `Following : ${get_result.followings}\n`
			txt += `Likes : ${get_result.likes}\n`
			txt += `Vidio : ${get_result.video}\n`
			buffer = await getBuffer(get_result.user_picture)
			das.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
			break							
	case 'igstalk':
			if (!isRegistered) return reply(ind.noregis())
			get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${args[0]}?apikey=${config.lol}`, {method: 'get'})
			get_result = get_result.result
			txt = `Link : https://www.instagram.com/${get_result.username}\n`
			txt += `Full : ${get_result.fullname}\n`
			txt += `Post : ${get_result.posts}\n`
			txt += `Followers : ${get_result.followers}\n`
			txt += `Following : ${get_result.following}\n`
			txt += `Bio : ${get_result.bio}\n`
			buffer = await getBuffer(get_result.photo_profile)
			das.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
			break
//*************************   MENU STICKER ************************************************************************ */\
	case 'tovideo'://
			 if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
			     const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			     filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
			     file_name = getRandom(".gif")
			     ini_txt = args.join(" ").split("|")
			     request({
			         url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${config.lol}`,
			         method: 'POST',
			         formData: {
			             "img": fs.createReadStream(filePath),
			         },
			         encoding: "binary"
			     }, function(error, response, body) {
			         fs.unlinkSync(filePath)
			         fs.writeFileSync(file_name, body, "binary")
			         ini_buff = fs.readFileSync(file_name)
			         das.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
			             fs.unlinkSync(file_name)
			         })
			     });
			 } else {
			     reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
			 }
			 break
	
		
	case 'tovideo'://
			if (!isQuotedSticker) return reply('Reply Gif nya')
			reply('Wait...')
			anume = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			anum = await das.downloadAndSaveMediaMessage(anume)
			ran = getRandom('.webp')
			exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
				fs.unlinkSync(anum)
				if (err) return reply(`Error: ${err}`)
				buffers = fs.readFileSync(ran)
				das.sendMessage(from, buffers, video, { quoted: mek, caption: 'Sudah...' })
				fs.unlinkSync(ran)
			})
			break
	case 'ttp':
	case 'ttp2':
	case 'ttp3':
	case 'ttp4':
	case 'attp':
			if (args.length == 0) return reply(`Salah\nCONTOH\n${prefix + command} Riu Cuy`)
			ini_txt = args.join(" ")
			ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${config.lol}&text=${ini_txt}`)
			await das.sendMessage(from, ini_buffer, sticker, { quoted: mek })
			break

	case 'semoji': 
			if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
			emoji = args[0]
			try {
			emoji = encodeURI(emoji[0])
			} catch {
			emoji = encodeURI(emoji)
			}
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${config.lol}`)
			das.sendMessage(from, ini_buffer, sticker, { quoted: mek})
			break  
	case 'tagstick':
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
				const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
				var value = args.join(" ")
				var group = await das.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				var options = {
					contextInfo: { mentionedJid: mem },
					quoted: mek
				}
				ini_buffer = fs.readFileSync(filePath)
				das.sendMessage(from, ini_buffer, sticker, options)
				fs.unlinkSync(filePath)
			} else {
				reply(`Tag sticker yang sudah dikirim`)
			}
			break
	case 'circle'://

			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
			reply("Wait Bro Comli Dlu:V")
			owgi = await das.downloadAndSaveMediaMessage(ted)
			tels = body.slice(7)
			anu = await imgbb(imgbbKey, owgi)
			hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${config.lol}&img=${anu.display_url}`)
			das.sendMessage(from, hedhe, sticker, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
			} else {
			reply('Heduh Si anjg')
			}
			break
	case 'sticker': 
	case 'stiker': 
	case 's': 
			if (!isRegistered) return reply(ind.noregis())
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				const media = await das.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						reply(ind.stikga)
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
							//if (error) {
									// reply(ind.stikga())
									// fs.unlinkSync(media)	
									// fs.unlinkSync(ran)
									// }
							das.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
							fs.unlinkSync(media)	
							fs.unlinkSync(ran)	
						})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
			} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				const media = await das.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				reply(ind.wait())
				await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`âŒ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
						console.log('Finish')
						exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
							//if (error) {
									// reply(ind.stikga())
									// fs.unlinkSync(media)	
									// fs.unlinkSync(ran)
									// }
							das.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
						})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
			}
			break

	case prefix+ 'colong':
			if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
			const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			const meidia = await das.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error.api)
			das.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(meidia)
			})
	break
	case 'stickerwa':
			if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${config.lol}&query=${query}`)
			get_result = get_result.result[0].stickers
			for (var x of get_result) {
				ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${config.lol}&img=${x}`)
				await das.sendMessage(from, ini_buffer, sticker, {quoted: mek })
			}
			break
			case 'nobadword': 
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   reply(`Fitur Badword Enable!`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    reply(`Fitur Badword Disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break

//*************************   MENU MAKER ************************************************************************ */\
 ///// EPHOTO 360 lolhuman ////////////////////////////////////////
 case 'wetglass':
	case 'multicolor3d':
	case 'luxurygold':
	case 'galaxywallpaper':
	case 'watercolor':
	case 'lighttext':
	case 'royaltext':
	case 'heartshaped':
	case 'birthdaycake':
	case 'galaxystyle':
	case 'greenneon':
	case 'hologram3d':
	case 'glossychrome':
	case 'greenbush':
	case 'metallogo':
	case 'noeltext':
	case 'textcake':
	case 'starsnight':
	case 'wooden3d':
	case 'textbyname':
	case 'writegalacy':
	case 'galaxybat':
	case 'snow3d':
	case 'birthdayday':
	case 'goldplaybutton':
	case 'silverplaybutton':
	case 'freefire':
	case 'beautifulflower':
	case 'starsnight':
	case 'glittergold':
	case 'pubgmaskot':
	case 'aovwall':
	case 'mlwall':
	case 'logogaming':
	case 'fpslogo':
	case 'avatarlolnew':
	case 'avatardota':
	case 'lolbanner':
			if (args.length == 0) return reply(`Example: ${command} LoL Human`)
			ini_txt = args.join(" ")
		
			ini_buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto1/${command}?apikey=${config.lol}&text=${q}`)
			
			fakethumb(ini_buffer);

			break

	case '1977':
	case 'aden':
	case 'brannan':
	case 'brooklyn':
	case 'clarendon':
	case 'gingham':
	case 'hudson':
	case 'inkwell':
	case 'earlybird':
	case 'kelvin':
	case 'lark':
	case 'lofi':
	case 'maven':
	case 'mayfair':
	case 'moon':
	case 'nashville':
	case 'perpetua':
	case 'reyes':
	case 'rise':
	case 'slumber':
	case 'stinson':
	case 'toaster':
	case 'valencia':
	case 'walden':
	case 'willow':
	case 'xpro2':
	    	if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
	        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
	        filePath = await das.downloadAndSaveMediaMessage(encmedia)
	        file_name = getRandom('.jpg')
	        request({
	        url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${config.lol}`,
	        method: 'POST',
	        formData: {
			"img": fs.createReadStream(filePath)
	            },
	            encoding: "binary"
	        }, function(error, response, body) {
	            fs.unlinkSync(filePath)
	            fs.writeFileSync(file_name, body, "binary")
	            ini_buff = fs.readFileSync(file_name)
	            das.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
				fs.unlinkSync(file_name)
	            })
				});
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
			}
			break
	case 'pencil':
	    	if ((isMedia && !lol.message.videoMessage || isQuotedImage) && args.length == 0) {
	        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
	        filePath = await das.downloadAndSaveMediaMessage(encmedia)
	        file_name = getRandom('.jpg')
	        request({
	            url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${config.lol}`,
	            method: 'POST',
	            formData: {
	"img": fs.createReadStream(filePath)
	            },
	            encoding: "binary"
	        }, async function(error, response, body) {
	            fs.unlinkSync(filePath)
	            fs.writeFileSync(file_name, body, "binary")
	            ini_buff = fs.readFileSync(file_name)
	            await das.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
	fs.unlinkSync(file_name)
	            })
	        });
	    } else {
	        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
	    }
	    break
	    // Random Image //
	case 'art':
	case 'bts':
	case 'exo':
	case 'elf':
	case 'loli':
	case 'neko':
	case 'waifu':
	case 'shota':
	case 'husbu':
	case 'sagiri':
	case 'shinobu':
	case 'megumin':
	case 'wallnime':
			getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${config.lol}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break
	case 'chiisaihentai':
	case 'trap':
	case 'blowjob':
	case 'yaoi':
	case 'ecchi':
	case 'hentai':
	case 'ahegao':
	case 'hololewd':
	case 'sideoppai':
	case 'animefeets':
	case 'animebooty':
	case 'animethighss':
	case 'hentaiparadise':
	case 'animearmpits':
	case 'hentaifemdom':
	case 'lewdanimegirls':
	case 'biganimetiddies':
	case 'animebellybutton':
	case 'hentai4everyone':
			await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${config.lol}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break
	case 'bj':
	case 'ero':
	case 'cum':
	case 'feet':
	case 'yuri':
	case 'trap':
	case 'lewd':
	case 'feed':
	case 'eron':
	case 'solo':
	case 'gasm':
	case 'poke':
	case 'anal':
	case 'holo':
	case 'tits':
	case 'kuni':
	case 'kiss':
	case 'erok':
	case 'smug':
	case 'baka':
	case 'solog':
	case 'feetg':
	case 'lewdk':
	case 'waifu':
	case 'pussy':
	case 'femdom':
	case 'cuddle':
	case 'hentai':
	case 'eroyuri':
	case 'cum_jpg':
	case 'blowjob':
	case 'erofeet':
	case 'holoero':
	case 'classic':
	case 'erokemo':
	case 'fox_girl':
	case 'futanari':
	case 'lewdkemo':
	case 'wallpaper':
	case 'pussy_jpg':
	case 'kemonomimi':
	case 'nsfw_avatar':
			getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${config.lol}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break

	    // Textprome //
	case 'blackpink':
	case 'neon':
	case 'greenneon':
	case 'advanceglow':
	case 'futureneon':
	case 'sandwriting':
	case 'sandsummer':
	case 'sandengraved':
	case 'metaldark':
	case 'neonlight':
	case 'holographic':
	case 'text1917':
	case 'minion':
	case 'deluxesilver':
	case 'newyearcard':
	case 'bloodfrosted':
	case 'halloween':
	case 'jokerlogo':
	case 'fireworksparkle':
	case 'natureleaves':
	case 'bokeh':
	case 'toxic':
	case 'strawberry':
	case 'box3d':
	case 'roadwarning':
	case 'breakwall':
	case 'icecold':
	case 'luxury':
	case 'cloud':
	case 'summersand':
	case 'horrorblood':
	case 'thunder':
			if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
			ini_txt = args.join(" ")
			getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${config.lol}&text=${ini_txt}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break
	case 'pornhub':
	case 'glitch':
	case 'avenger':
	case 'space':
	case 'ninjalogo':
	case 'marvelstudio':
	case 'lionlogo':
	case 'wolflogo':
	case 'steel3d':
	case 'wallgravity':
			if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
			txt1 = args[0]
			txt2 = args[1]
			getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${config.lol}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break

	    // Photo Oxy //
	case 'shadow':
	case 'cup':
	case 'cup1':
	case 'romance':
	case 'smoke':
	case 'burnpaper':
	case 'lovemessage':
	case 'undergrass':
	case 'love':
	case 'coffe':
	case 'woodheart':
	case 'woodenboard':
	case 'summer3d':
	case 'wolfmetal':
	case 'nature3d':
	case 'underwater':
	case 'golderrose':
	case 'summernature':
	case 'letterleaves':
	case 'glowingneon':
	case 'fallleaves':
	case 'flamming':
	case 'harrypotter':
	case 'carvedwood':
			if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
			ini_txt = args.join(" ")
			getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${config.lol}&text=${ini_txt}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break
	case 'tiktok':
	case 'arcade8bit':
	case 'battlefield4':
	case 'pubg':
			if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
			txt1 = args[0]
			txt2 = args[1]
			getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${config.lol}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
				das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break

	    // Ephoto 360 //
	case 'wetglass':
	case 'multicolor3d':
	case 'watercolor':
	case 'luxurygold':
	case 'galaxywallpaper':
	case 'lighttext':
	case 'beautifulflower':
	case 'puppycute':
	case 'royaltext':
	case 'heartshaped':
	case 'birthdaycake':
	case 'galaxystyle':
	case 'hologram3d':
	case 'greenneon':
	case 'glossychrome':
	case 'greenbush':
	case 'metallogo':
	case 'noeltext':
	case 'glittergold':
	case 'textcake':
	case 'starsnight':
	case 'wooden3d':
	case 'textbyname':
	case 'writegalacy':
	case 'galaxybat':
	case 'snow3d':
	case 'birthdayday':
	case 'goldplaybutton':
	case 'silverplaybutton':
	case 'freefire':
			if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
			ini_txt = args.join(" ")
			getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${config.lol}&text=${ini_txt}`).then((gambar) => {
			    das.sendMessage(from, gambar, image, { quoted: mek })
			})
			break
//**************************************** MENU EDUKASI ***************************************************************************** */
	case 'katabijak':
			if (!isRegistered) return reply(ind.noregis())
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${config.lol}`)
			reply(get_result.result)
			break
			
	case 'faktaunik': // Fixed By Yogiツ & FxSx
					
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=${config.lol}`, {method: 'get'})
			reply(anu.result)
			await limitAdd(sender)
			limitAdd(sender)
			break	

	case 'brainly':
			if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`)
			get_result = get_result.result
			ini_txt = "Result : \n"
			for (var x of get_result) {
				ini_txt += `${x.title}\n`
				ini_txt += `${x.url}\n\n`
			}
			reply(ini_txt)
			break
			
	case 'wikipedia':
			if (!isRegistered) return reply(ind.noregis())
			if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
			query = args.join(" ")
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${config.lol}&query=${query}`)
			get_result = get_result.result
			reply(get_result)
			break


	case 'kbbi':
					
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			if (args.length < 1) return reply('Apa yang mau dicari kak?')
			anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${q}`, {method: 'get'})
			reply('Menurut Kbbi:\n\n'+anu.result)
			await limitAdd(sender)
			break

	case 'listsurah':
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = 'List Surah:\n'
			for (var x in get_result) {
				ini_txt += `${x}. ${get_result[x]}\n`
			}
			reply(ini_txt)
			break
	case 'quran':
					
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
			quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
			das.sendMessage(from, quran, text, {quoted: mek})
			await limitAdd(sender)
			break

	case 'alquranaudio':
			if (!isRegistered) return reply(ind.noregis())
			if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
			surah = args[0]
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${config.lol}`)
			das.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
			break
	case 'asmaulhusna':
			if (!isRegistered) return reply(ind.noregis())
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = `No : ${get_result.index}\n`
			ini_txt += `Latin: ${get_result.latin}\n`
			ini_txt += `Arab : ${get_result.ar}\n`
			ini_txt += `Indonesia : ${get_result.id}\n`
			ini_txt += `English : ${get_result.en}`
			reply(ini_txt)
			break
	case 'kisahnabi':
			if (!isRegistered) return reply(ind.noregis())
			if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
			query = args.join(" ")
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = `Name : ${get_result.name}\n`
			ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
			ini_txt += `Umur : ${get_result.age}\n`
			ini_txt += `Tempat : ${get_result.place}\n`
			ini_txt += `Story : \n${get_result.story}`
			reply(ini_txt)
			break
	case 'jadwalsholat':
	case 'jsolat':
			if (!isRegistered) return reply(ind.noregis())
			if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			daerah = args.join(" ")
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = `Wilayah : ${get_result.wilayah}\n`
			ini_txt += `Tanggal : ${get_result.tanggal}\n`
			ini_txt += `Sahur : ${get_result.sahur}\n`
			ini_txt += `Imsak : ${get_result.imsak}\n`
			ini_txt += `Subuh : ${get_result.subuh}\n`
			ini_txt += `Terbit : ${get_result.terbit}\n`
			ini_txt += `Dhuha : ${get_result.dhuha}\n`
			ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
			ini_txt += `Ashar : ${get_result.ashar}\n`
			ini_txt += `Maghrib : ${get_result.imsak}\n`
			ini_txt += `Isya : ${get_result.isya}`
			reply(ini_txt)
			break

	case 'quotedislami':
					
			if (!isRegistered) return reply( ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply('Maaf kamu sudah terbenned!')
			const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
			const isl = islami[Math.floor(Math.random() * islami.length)]
			islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
			das.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
			await limitAdd(sender)
			break	
	case 'indbeasiswa':
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = 'Info Beasiswa :\n'
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Link : ${x.link}\n\n`
			}
			reply(ini_txt)
			break
	case 'hoax':
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${config.lol}`)
			get_result = get_result.result
			ini_txt = 'Info Hoax :\n'
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Posted : ${x.posted}\n`
				ini_txt += `Description : ${x.desc}\n\n`
			}
			reply(ini_txt)
			break		

//**********************************************   MENU BOT **************************************************************************** */\


	case 'setlimitt':
	case 'addlimitt':
				if (args.length < 1) return
			if (!isAdmin) return reply('*Only Admin bot*')
				limitawal = args[0]
				reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
				break 

	case 'setmemlimitt':
				if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
				if (isNaN(args[0])) return reply('Limit harus angka')
				memberlimit = args[0]
				reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break 

	case 'setthumb':
			boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			delb = await das.downloadMediaMessage(boij)
			fs.writeFileSync(`me.jpg`, delb)
			reply('Sukses Bero')
			break
			




			case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await das.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./me.jpeg`, delb)
				fs.writeFileSync('./img.json', JSON.stringify(imagenye))
				das.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: mek })
				break


		case 'sewabot1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal1')
                    break
		case 'batal1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal1 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal1,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal2 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal3 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal4 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
		case 'sewabot2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya2 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\n Untuk Membatalkan Pesanan Ketik zbatal2')
                    break
                    case 'sewabot3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya4 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal3')
                    break
                    case 'sewabot4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya3 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik zbatal4')
                    break
		case'daftarsewa':
sewa = fs.readFileSync('sewa.jpg')
ow = "6285283427860@s.whatsapp.net"
daftarnye = `
@----------DAFTAR SEWA----------@
CARA: KETIK 1 SAMPAI 4 UNTUK MEMILIH

+(1).AnggaGanzz
-tag: @${ow.split('@')[0]}

-NOTE
Pilih Salah Satu Diatas Untuk Membeli
Script Bot Langka!
Contoh:
${prefix}sewa1
----------------------------------------------------`
das.sendMessage(from, sewa, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, ow2, ow3, ow4]}, displayname: mem, caption: daftarnye })
break
		case 'mute':
                das.modifyChat(from, 'mute', 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                das.modifyChat(from, 'unmute')
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break

//****************************************  MENU GAMES ******************************************************************************* */
	case 'slot':
			const sotoy = [
			'🍊 : 🍒 : 🍐',
			'🍒 : 🔔 : 🍊',
			'🍇 : 🍇 : 🍇',
			'🍊 : 🍋 : 🔔',
			'🔔 : 🍒 : 🍐',
			'🔔 : 🍒 : 🍊',
			'🍊 : 🍋 : 🔔',		
			'🍐 : 🍒 : 🍋',
			'🍐 : 🍐 : 🍐',
			'🍊 : 🍒 : 🍒',
			'🔔 : 🔔 : 🍇',
			'🍌 : 🍒 : 🔔',
			'🍐 : 🔔 : 🔔',
			'🍊 : 🍋 : 🍒',
			'🍋 : 🍋 : 🍌',
			'🔔 : 🔔 : 🍇',
			'🔔 : 🍐 : 🍇',
			'🔔 : 🔔 : 🔔',
			'🍒 : 🍒 : 🍒',
			'🍌 : 🍌 : 🍌'
			]
			const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
			yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
			reply(yow)
			break

	case 'suit':
			if (!isRegistered) return reply(ind.noregis())
			query = args.join(" ")
			get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=${XteamKey}`)
			bre = `
*[ BOT ]*
_> ${get_result.jawabanbot}_
*[ USER ]*
> ${get_result.jawabanmu}
*[ POIN ]*
_> ${get_result.poin}_
*[ HASIL ]*
_> ${get_result.hasil}_`
			reply(bre, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
			break

	case 'sambungkata':
			if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
			if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
			ini_txt = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${apikey}&text=${ini_txt}`)
			get_result = get_result.result
			await das.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
				sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
				fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
			})
			break
	case 'cancelsambungkata':
			if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
			delete sambungkata[sender.split('@')[0]]
			fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
			reply("Success mengcancel sambung kata sebelumnya")
			break

	case 'tebakgambar': 
				
			if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${config.lol}`)
			get_result = get_result.result
			ini_image = get_result.image
			jawaban = get_result.answer
			ini_buffer = await getBuffer(ini_image)
			await das.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
			//  sleep(10000)
			tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
			fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
			//   sleep(30000)
			})
			await sleep(10000)
			try {
			if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
			reply('_30 detik lagi_')// ur cods
			await sleep(15000)
			reply('_20 detik lagi_')// ur cods
			await sleep(15000)
			reply('_10 detik lagi_') // ur cods
			await sleep(20000)
			reply("Jawaban: " + jawaban)
			delete tebakgambar[sender.split('@')[0]]
			fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
			}
			} catch {

			}

			break


	case 'canceltebakgambar':
			if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
			delete tebakgambar[sender.split('@')[0]]
			fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
			reply("Success mengcancel tebak gambar sebelumnya")
			break
			case 'akinator': // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
            get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
            var { server, frontaddr, session, signature, question, step } = get_result.result
            const data = {}
            data["server"] = server
            data["frontaddr"] = frontaddr
            data["session"] = session
            data["signature"] = signature
            data["question"] = question
            data["step"] = step
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak"
            await das.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
            akinator[sender.split('@')[0]] = data
            fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
            })
            break
    case 'cancelakinator':
            if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
            delete akinator[sender.split('@')[0]]
            fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
            reply("Success mengcancel akinator sebelumnya")
            break
//*************************** MENU ANIME ******************************************************************************************** */
	case 'quotesanime':
			if (!isRegistered) return reply(ind.noregis())
			quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${config.lol}`)
			quotes = quotes.result
			quote = quotes.quote
			char = quotes.character
			anime = quotes.anime
			episode = quotes.episode
			reply(`_${quote}_\n\n*â€• ${char}*\n*â€• ${anime} ${episode}*`)
			break	
	case 'anime':
			if (!isRegistered) return reply(ind.noregis())
			if (!isPremium) return reply('Fitur Ini Khusus User Premium')
			if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No HaAnggaome`)
			query = args.join(" ")
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${config.lol}&query=${query}`)
			get_result = get_result.result
			ini_txt = `Id : ${get_result.id}\n`
			ini_txt += `Id MAL : ${get_result.idMal}\n`
			ini_txt += `Title : ${get_result.title.romaji}\n`
			ini_txt += `English : ${get_result.title.english}\n`
			ini_txt += `Native : ${get_result.title.native}\n`
			ini_txt += `Format : ${get_result.format}\n`
			ini_txt += `Episodes : ${get_result.episodes}\n`
			ini_txt += `Duration : ${get_result.duration} mins.\n`
			ini_txt += `Status : ${get_result.status}\n`
			ini_txt += `Season : ${get_result.season}\n`
			ini_txt += `Season Year : ${get_result.seasonYear}\n`
			ini_txt += `Source : ${get_result.source}\n`
			ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
			ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
			ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
			ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
			ini_txt += `Score : ${get_result.averageScore}%\n`
			ini_txt += `Characters : \n`
			ini_character = get_result.characters.nodes
			for (var x of ini_character) {
				ini_txt += `- ${x.name.full} (${x.name.native})\n`
			}
			ini_txt += `\nDescription : ${get_result.description}`
			thumbnail = await getBuffer(get_result.coverImage.large)
			das.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
			break
		   
//******************************  MENU OWNER **************************************************/
case 'setppbot':
  if (!isOwner) return reply(ind.ownerb())
  das.updatePresence(from, Presence.composing) 
  if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
  enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await das.downloadAndSaveMediaMessage(enmedia)
  await das.updateProfilePicture(botNumber, media)
  reply('Makasih profil barunya😗')
  break

  case 'setmemlimit':
    if (args.length < 1) return
    if (!isOwner) return reply(ind.ownerb())
    if (isNaN(args[0])) return reply('Limit harus angka')
    memberlimit = args[0]
    reply(`Change Member limit To ${memberlimit} SUCCESS!`)
    break 

    case 'setlimit':
      case 'addlimit':
            if (args.length < 1) return
            if (!isOwner) return reply(ind.ownerb())
            limitawal = args[0]
            reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
            break    


            case 'leave':
              if (!isOwner) return reply(ind.ownerb()) 
                              setTimeout( () => {
                              das.groupLeave (from) 
                              }, 2000)
                              setTimeout( () => {
                              das.updatePresence(from, Presence.composing) 
                              reply('oke desu')
                              }, 0)
                              break			
            case 'bc': 
                  if (!isOwner) return reply(ind.ownerb()) 
                  if (args.length < 1) return reply('.......')
                  anu = await das.chats.all()
                  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    buff = await das.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                      das.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
                    }
                    reply('*Suksess broadcast* ')
                  } else {
                    for (let _ of anu) {
                      sendMess(_.jid, `*「 BC BY OWNER 」*\n\n${body.slice(4)}`)
                    }
                    reply('*Suksess broadcast* ')
                  }
                  break
            
                  case 'bcc': 
                if (!isOwner) return reply('*Only Admin bot*')
                  if (args.length < 1) return reply('.......')
                  anu = await das.chats.all()
                  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    buff = await das.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                      das.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
                    }
                    reply('*Suksess broadcast* ')
                  } else {
                    for (let _ of anu) {
                      sendMess(_.jid, `*「 ALL BROADCAST 」*\n\n${body.slice(4)}`)
                    }
                    reply('*Suksess broadcast* ')
                  }
                  break
                  case 'block':
                    das.updatePresence(from, Presence.composing) 
                    das.chatRead (from)
                     if (!isGroup) return reply(ind.groupo())
                     if (!isOwner) return reply(ind.ownerb())
                     das.blockUser (`${body.slice(7)}@c.us`, "add")
                     das.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                     break
               case 'unblock':
                     if (!isGroup) return reply(ind.groupo())
                     if (!isOwner) return reply(ind.ownerb())
                       das.blockUser (`${body.slice(9)}@c.us`, "remove")
                     das.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
                     break

                     case 'clearall':
                      if (!isOwner) return reply(ind.ownerb())
                      anu = await das.chats.all()
                      das.setMaxListeners(25)
                      for (let _ of anu) {
                        das.deleteChat(_.jid)
                      }
                      reply(ind.clears())
                      break
                      case 'addpremium':
                      if (!isOwner) return reply(ind.ownerb())
                      adpr = body.slice(10)
                      prem.push(`${adpr}@s.whatsapp.net`)
                      fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(premium))
                      manuk = `Berhasil Menambahkan @${adpr.split("@")[0]} Ke Daftar Premium`
                      das.sendMessage(from, manuk, text, { quoted: ftoko, contextInfo: {"mentionedJid": [adpr], forwardingScore: 1000, isForwarded: true }})
                      break

                      case 'kickall':
                        if (!isOwner) return reply(ind.ownerb())
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                          teks += `*😘* ${mem.jid.split('@')[0]}\n`
                          members_id.push(mem.jid)
                        }
                        mentions(teks, members_id, true)
                        das.groupRemove(from, members_id)
                        break

                        case 'bcgc':
                          if (!isOwner) return reply(ind.ownerb())
                          if (args.length < 1) return reply('.......')
                          anu = await groupMembers 
                          tagss = mek.participant
                          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                            buffer = await das.downloadMediaMessage(encmedia)
                            for (let _ of anu) {
                              das.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
                            }
                            reply('')
                          } else {
                            for (let _ of anu) {
                              sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
                            }
                            reply('Sukses broadcast group')
                          }
                          break 
                          case 'unbann':
                            if (!isAdmin) return reply('*Only Admin bot*')
                            bnnd = body.slice(7)
                            ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                            fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                            reply(`Nomor wa.me/${bnnd} telah di unban!`)
                            break
                                    case 'ban':
                            if (!isOwner) return reply(ind.ownerb())
                            bnnd = body.slice(5)
                            ban.push(`${bnnd}@s.whatsapp.net`)
                            fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                            reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
                            break
                        case 'unban':
                            if (!isOwner) return reply(ind.ownerb())
                            bnnd = body.slice(7)
                            ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                            fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
                            reply(`Nomor wa.me/${bnnd} telah di unban!`)
                            break
                            case 'unpremium':
                              if (!isOwner) return reply(ind.ownerb())
                              premm = body.slice(11)
                              prem.splice(`${premm}@s.whatsapp.net`, 1)
                              fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
                              reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
                              break
                              case 'premium':
                                if (!isOwner) return reply(ind.ownerb())
                                premm = body.slice(9)
                                prem.push(`${premm}@s.whatsapp.net`)
                                fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
                                reply(`Berhasil menjadi premium wa.me/${premm} `)
                                break
                                case 'admin':
                                  if (!isOwner) return reply(ind.ownerb())
                                  admm = body.slice(7)
                                  adm.push(`${admm}@s.whatsapp.net`)
                                  fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
                                  reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
                                  break
                                          case 'unadmin':
                                  if (!isOwner) return reply(ind.ownerb())
                                  admm = body.slice(9)
                                  admin.push(`${adm}@s.whatsapp.net`)
                                  fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
                                  reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
                                  break                                                            
              
                     
	case 'set':
			if (!isOwner) return reply(`anda owner?`)
			if(ar[0] === 'memberlimit') {
				_setting.memberLimit = ar[1]
				fs.writeFileSync('./database/bot/setting.json',JSON.stringify(_setting))
				await reply(`done`)
			} else if(ar[0] === 'linkgroup') {
				config.linkGroup = body.slice(14)
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] === 'gruplimit') {
				_setting.groupLimit = ar[1]
				fs.writeFileSync('./database/bot/setting.json',JSON.stringify(_setting))
				await reply(`done`)
			} else if(ar[0] === 'kuota') {
				_setting.kuotaLimit = ar[1]
				fs.writeFileSync('./database/bot/setting.json',JSON.stringify(_setting))
				await reply(`done`)
			} else if(ar[0] == 'noowner') {
				config.noOwner = ar[1] + '@c.us'
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'prefix') {
				config.prefix = ar[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'owner') {
				config.ownerBot = ar[1] + '@c.us'
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'namabot') {
				config.botName = body.slice(13)
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'vhtear') {
				config.vhtear = ar[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'lol') {
				config.lol = ar[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'zeks') {
				config.zeks = ar[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'hafizh') {
				config.hafizh = ar[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'tobz') {
				config.tobz = args[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)
			} else if(ar[0] == 'emot') {
				config.emot = args[1]
				fs.writeFileSync('./config.json',JSON.stringify(config))
				await reply(`done`)

			} else {
				await reply(ind.set())
			}
			
			break


	case 'setreply':
			if (!isOwner) return reply(ind.ownerb())
			das.updatePresence(from, Presence.composing) 
			if (args.length < 1) return
			cr = body.slice(10)
			reply(`reply berhasil di ubah menjadi : ${cr}`)
			await limitAdd(sender)
			break 
			
	case 'buggc':
			if(!isOwner) return
			await das.toggleDisappearingMessages(from)
			reply("yahaha")
			break

	case 'addbadword': 
			if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
			const bw = body.slice(12)
			bad.push(bw)
			fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
			reply('Success Menambahkan Bad Word!')
			break
	case 'delbadword': 
			if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
			let dbw = body.slice(12)
			bad.splice(dbw)
			fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
			reply('Success Menghapus BAD WORD!')
			break 
	case 'listbadword': 
			let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
			for (let i of bad) {
				lbw += `➸ ${i.replace(bad)}\n`
			}
			await reply(lbw)
			break 

//******************************* MENU TOOLS ************************************************************** */
	case 'clone':
			if (!isGroup) return reply(ind.groupo())
			if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
			let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
			try {
				pp = await das.getProfilePicture(id)
				buffer = await getBuffer(pp)
				das.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
			} catch (e) {
				reply(ind.stikga())
			}
			await limitAdd(sender)
			break

					case 'chat':
				if (args.length < 1) return reply('Apa pesan nya?')
					var kntl = body.slice(6)
					var ajk = kntl.split("|")[0];
					var chatnya = kntl.split("|")[1];
					das.sendMessage(`${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`, text)
					break




				case 'fuckboy':
				case 'fuckgirl':
				case 'bucinserti':
				case 'pacarserti':
				case 'goodboy':
				case 'goodgirl':
				case 'badboy':
				case 'badgirl':
				query = args.join(" ")
				cap = `Nama: ${query}`
				riu = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=${config.lol}&name=${query}`)
				das.sendMessage(from, riu, image, {quoted: mek, contextInfo: { forwardingScore: 1, isForwarded: true}, caption: cap})
				break

		case 'tebakgokil':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${config.lol}`, {method: 'get'})
					jenak = `*${anu.result.question}*`
					setTimeout( () => {
					das.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, jenak, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 

		case 'tebakgokil2':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${config.lol}`, {method: 'get'})
					siapariu = `*${anu.result.question}*`
					setTimeout( () => {
					das.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${angga3}${angga4}%* 😘`
                    reply(N)
                    break  

		case 'caklontong2':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${config.lol}`, {method: 'get'})
					lontong = `*${anu.result.question}*`
					jawab = `
*➸ Jawaban :* ${anu.result.answer}
*➸ Info :* ${anu.result.information}`
					setTimeout( () => {
					das.sendMessage(from, jawab, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, lontong, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 

		case 'tebakkimia':
                if (!isRegistered) return reply(ind.noregis())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${config.lol}`, {method: 'get'})
					kimia = `*${anu.result.nama}*`
					setTimeout( () => {
					das.sendMessage(from, '*➸ Jawaban :* '+anu.result.lambang, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					das.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 

	
					case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
                    fs.unlinkSync(ran)
				    })
		            break
		case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
				break
				case 'spam':
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				argz = args.split("|")
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				if (isNaN(argz[1])) return reply("harus berupa angka")
				for (let i = 0; i < argz[1]; i++){
					das.sendMessage(from, argz[0])
				}
				break
				case 'vibra':  //   
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
									case 'vibrav':   //  
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
										das.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
					case 'trigger':
					   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await das.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemes':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					das.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break

					case 'wait2':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus Premium')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${config.lol}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        das.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'hetshot':
			if (!isGroup) return reply(ind.groupo())
			if (!isGroupAdmins) return reply(ind.admin())
			if (!isBotGroupAdmins) return reply(ind.badmin())
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			das.groupRemove(from, mentioned)
			reply("SUKSES")
			break
	
		case 'tovid':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('Reply Stickernya!')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`Error: ${err}`)
						buffer = fs.readFileSync(ran)
						das.sendMessage(from, buffer, video, { mimetype: Mimetype.mp4, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break

					case 'harcos':
					if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=VevekKuda&text=${body.slice(7)}`)
					cap = `${query}`
					das.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
		case 'harta':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Url png/jpg mana kak')
				query = args.join(" ")
				reply('wait bro...')
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=VevekKuda&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				das.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				await limitAdd(sender)
				break

		case 'togif'://
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        if (!isRegistered) return reply( ind.noregis())
					                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply('wait...')
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await das.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        das.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Oke...', quoted: mek})
                                }
                                await limitAdd(sender)
                                break
		case 'getpic':
		if (!isRegistered) return reply( ind.noregis())
					                    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await das.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					das.sendMessage(from, thumb, MessageType.image)
				{quoted : mek }}
				await limitAdd(sender)
				break

		case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            das.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
		case 'upswtext':
					// das.updatePresence(from, Presence.composing)
					das.sendMessage('status@broadcast', `${q}`, extendedText)
					das.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : mek, contextInfo: { forwardingScore: 15, isForwarded: true}})
					break
					
		case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await das.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG: Cie Ke Tag;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${das.user.jid.split('@')[0]}:${das.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				das.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
				case 'tempo':
   var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
		case 'tagimg':
                    // if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await das.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await das.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        das.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
    
		case 'removebg'://
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${config.lol}&img=${anu.display_url}`)
	 das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	
		case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await das.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    das.sendMessage(from, pp_riu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		  
		case 'xox':
		const exo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	        'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
	riucuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(riucuy)
	            break
		case 'sewa': 
		case 'sewabot':
                 if (!isRegistered) return reply( ind.noregis())
		    ow = "6285283427860@s.whatsapp.net"
                    sewasu = `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 35k

*Payment :*
_Indosat Dan Tsel_

Minat?PM Yg Dibawah
wa.me/6285283427860` 
try {
pp_user = await das.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    das.sendMessage(from, pp_riu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: sewasu })
					break
		case 'suit2':
		query = args.join(" ")
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
            reply(brow)
	            break
				case 'shutdown':
                das.sendMessage(from, `Oke Desu~`, text,{quoted : mek, contextInfo: { forwardingScore: 1, isForwarded: true}})
                await sleep(5000)
		return das.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
				break


	
				case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
			case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await das.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				das.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
	
					case 'getsticker':
				case 'gets': 
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
					das.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker': 
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					das.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await das.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					das.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addaudio': 
				
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await das.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					das.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
					case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return das.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return das.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						das.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						das.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return das.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						das.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						das.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return das.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return das.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					das.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						das.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						das.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						das.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						das.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'getaudio': 
				
					namastc = body.slice(7) 
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					das.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listaudio':
				case 'audiolist': 
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					das.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage': 
				
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await das.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					das.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage': 
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					das.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage': 
				
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					das.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo': 
				
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await das.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					das.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				
	case 'alien':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${config.lol}&img=${anu.display_url}`)
	 das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${config.lol}&img=${anu.display_url}`)
	 das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	     
                 
	case 'imagerotate'://
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await das.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb(imgbbKey, owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${config.lol}&img=${anu.display_url}`)
	  das.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'SUBSCRIBE MY : FxAG Xc'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
				case 'getvideo': 
				
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					das.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist': 
				
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					das.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
			
				
		case 'mutual':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6285283427860@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                		break
              case 'soundplaydate':

           
                case 'wakillist':
				das.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				das.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
				break
        
	
				case 'premiumlist':
				das.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				das.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break

				case 'banlist':
				das.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				das.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'dompet':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
				
                 if (!isRegistered) return reply( ind.noregis())
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : AnggaGanzzツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6285283427860 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break



		case 'shrtco':
				 				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				das.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${config.lol}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break


		                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${config.lol}`)
                    das.sendMessage(from, buffer, image, { quoted: mek})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${config.lol}`)
                    das.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${config.lol}`)
                    das.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isRegistered) return reply(ind.noregis())
		if (!isPremium) return reply('Fitur Ini Khusus User Premium')
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${config.lol}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        das.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break


		case 'galaxtext':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=${config.lol}&text=${ct}`)
				das.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break




	
		
		case 'thunder':

		
				case 'slowmo':
				
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await das.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				das.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case `${prefix}bikingc`:
                case `${prefix}creategroup`:
                const saya = '6285283427860@c.us'
                arg = body.trim().split('|')
                das.sendMessage(from, `otw MythicXbot`, MessageType.text, {quoted : freply})
                const gcname = args[1]
                das.groupCreate(gcname, saya)
                das.sendMessage(from, 'Group Created')
                break
				case 'gemok':
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break

				case 'bass':                 
				
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						das.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
                case 'neko':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(4)
				reply(ind.wait())
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/nekonime`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				das.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'tolol': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Teks nya mana ? titit ?')
				gatauda = body.slice(6)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${config.lol}&name=${gatauda}`, {method: 'get'})
				das.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'emoji2img': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('emoji nya mana sayang ?')
				gatauda = body.slice(11)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				das.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'memeindo':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				das.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'asupan':
			if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${config.lol}`)
                    buffer = await getBuffer(get_result.result)
                    das.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${config.lol}`, {method: 'get'})
				das.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'darkjoke': 
				 // Fix Bug By RzkyO				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${config.lol}`, {method: 'get'})
				das.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break

		case 'aesthetic':
				gatauda = body.slice(9)
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				das.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
	

		case 'limit':
				
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break




		case 'githubstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					das.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
                case 'slap':
					kapankah = body.slice(1)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					das.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break

                case 'tribunews':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${config.lol}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': 	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `• *Judul:* ${plyll.title}\n• *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
 
		case 'setppbott':
				if (!isAdmin) return reply('*Only Admin bot*')
					das.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(enmedia)
					await das.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'brain':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					das.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
	
					case 'pinterest':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})
					await limitAdd(sender)
					break 
           case 'glitchtext':
					
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return reply(`ã€Œâ—ã€Contoh : ${prefix}glitchtext AnggaGanzz/Gans`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					das.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
				break
           case 'waifu':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/waifu?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'randombts':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'cogan2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                        gatauda = body.slice(7)
					reply(ind.wait())
                                        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${config.lol}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        das.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
		 case 'cogan':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${config.lol}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					
           case 'randomexo':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
           case 'blackpink':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			
            
               
                case 'quotesdilan':
		if (!isRegistered) return reply(ind.noregis())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${config.lol}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return reply(ind.noregis())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		das.sendMessage(from, buffer, image, { quoted: mek})
		break
		         case 'babi':
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await das.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 das.sendTextWithMentions(dari, mmkk, id)
                 break
				case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${config.lol}`, {method: 'get'})
					anu.result = anu.result.result
					jawab3 = `*Jawabannya*\n\n>${anu.result.name}`
					tebakbender = `*bendera apa ini?*\n\n>[${anu.result.flag}]`
					setTimeout( () => {
					reply(jawab3)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(tebakbender) // ur cods
					}, 0) // 1000 = 1s,
					break 
 
				case 'family100':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${config.lol}`, {method: 'get'})
					jawab = `*Jawabannya*\n\n>${anu.result.aswer}`
					family = `*Pertanyaan*\n\n*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(family) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${config.lol}`, {method: 'get'})
					jawab2 = `*Jawabannya*\n\n>${anu.result.answer}`
					caklontong = `*Pertanyaan*\n\n•*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab2)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(caklontong) // ur cods
					}, 0) // 1000 = 1s,
					break 
	
		
			 case 'nsfwloli':
				    try {
			        
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchJson(`https://api.shizukaa.xyz/api/neko?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.neko)
						das.sendMessage(from, buffer, image, {quoted: shizuka, caption: 'Jangan jadiin bahan buat comli om'})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					    }
					    await limitAdd(sender)
					    break
		case 'hilih': 
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'holoh': 


		case 'alay':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
	

		case 'pantun':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
	
		case 'jadwaltv':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katadilan': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wame':
        if (isBanned) return reply('```Lu kebanned kontol```')
       if (!isRegistered) return reply(ind.noregis())
          das.updatePresence(from, Presence.composing)
          options = {
             text: `BY ANGGA : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            das.sendMessage(from, options, text, {quoted: mek})
           breaki
		case 'cerpen': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=${config.lol}`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=${config.lol}`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break

		
					case 'tkstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${config.lol}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					das.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'infofilm': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=${TobzKey}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Judul : ${anu.result.judul}\n*➸ Bahasa :* ${anu.result.bahasa}\n*➸ Negara :* ${anu.result.negara}\n*➸ Aktor :* ${anu.result.aktor}\n*➸ Boxoffice :* ${anu.result.boxoffice}\n*➸ Dirilis :* ${anu.result.dirilis}\n*➸ Durasi :* ${anu.result.durasi}\n*➸ Katagori :* ${anu.result.kategori}\n*➸ Metascore :* ${anu.result.metascore}\n*➸ Vote :* ${anu.result.voting_imdb}\n*➸ Negara :* ${anu.result.negara}\n*➸ Sinopsis :* ${anu.result.sinopsis}\n*➸ Penghargaan :* ${anu.result.penghargaan}`
					das.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': 
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ige = body.slice(10)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/lk21?apikey=${config.lol}&query=${ige}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Nama Film : ${anu.result.title}\n*➸ Link :* ${anu.result.link}\n*➸ Genre :* ${anu.result.genre}\n*➸ Views :* ${anu.result.views}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Dirilis :* ${anu.result.tahun}\n*➸ Rating :* ${anu.result.rating}\n*➸ Description :* ${anu.result.desc}\n*➸ Aktor :* ${anu.result.actors}\n*➸ Location :* ${anu.result.location}\n*➸ Date Release :* ${anu.result.date_release}\n*➸ Language :* ${anu.result.language}\n*➸ Link Download :* ${anu.result.link_dl}`
					das.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break



	
					/*
      
		case 'setreplyy':
				if (!isAdmin) return reply('*Only Admin bot*')
					das.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					
                 if (!isRegistered) return reply( ind.noregis())
					das.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group AnggaGanzz :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					das.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
		//daftar 
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await das.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							daftarimg = await getBuffer(ppimg)
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await das.sendMessage(from, daftarimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await das.sendMessage(from, daftarimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"© Created By Angga","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
 				        break
		case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					das.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kapankah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					das.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'apakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					das.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					das.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
	    
		case 'rate':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					das.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sangecek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					das.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gaycek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					das.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbicek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					das.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gantengcek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					das.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'cantikcek':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					das.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'watak':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					das.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		case 'hobby':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					das.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
					
                 if (!isRegistered) return reply( ind.noregis())
					await das.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
        //  case 'help': 
		
                    /****BUGHOLE •BUATAN ARIFI RAZZAQ OFFICIAL ****/
//asalusul-case: Gabungan Bug Pesan Sementara + bug troli total item + Dual Ephemeral + toggle Disappearing + Bantuan Virtex Thai 999999 •Semuanya Saya Gabungkan Dan Membuat Ganda Kontak Ephemeral
//buktinya: udah di coba dari berbagai team developer bot whatsapp/kecuali team haters atau team yang tidak di ketahui "bug ini lebih mematikan daripada bug troly" mohon gunakan dengan bijak!
//fungsi: bisa membuat attack gc atau merusak gc orang lain
//kegunaan: bisa membuat hitam layar hp pengguna dan mengakibatkan reset data Whatsapp!


         
					case 'wallpapersearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${config.lol}&query=${query}`)
                    das.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'twtstalk':
				if (!isRegistered) return reply(ind.noregis())
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
						txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					das.sendMessage(from, profile, image, {quoted: mek, caption: txt})
					das.sendMessage(from, banner, image, {quoted: mek, caption: 'BANNERNYA OM!' })
					break
                case 'wallpapersearch2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${config.lol}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    das.sendMess
					case 'pantun':
                case 'bucin':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${config.lol}`)
                    reply(get_result.result)
                    break
                    case 'randomnama':
		if (!isRegistered) return reply(ind.noregis())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${config.lol}`)
                    reply(anu.result)
                    break
		case 'crosslogo':
                case 'naruto':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('Wait...')
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    das.sendMessage(from, tod, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} yogi`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    das.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
		case 'donasi':
		case 'donate':
					
                 if (!isRegistered) return reply( ind.noregis())
					das.sendMessage(from, donasi(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				wew = fs.readFileSync(`./src/me.jpg`)
					das.sendMessage(from, wew, image, { quoted: mek, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
					
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					wew = fs.readFileSync(`./src/me.jpg`)
					das.sendMessage(from, wew, image, { quoted: mek, caption: developer(prefix)})
					break
		case 'bahasa':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		case 'kodenegara':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.sendMessage(from, negara(), text)
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					das.sendMessage(from, resul, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (args.length < 1) return reply('teksnya mana kak?')
                                        saying = teks
                                        das.sendMessage(from, saying, text)
					await limitAdd(sender)
                                        break
		case 'info':
					me = das.user
					ow = "6285283427860@s.whatsapp.net"
					uptime = process.uptime()
					teks = `➽ *Name Bot* : wa.me/6285283427860\n➽ *Owner* : @${ow.split('@')[0]}\n➽ *Prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Bot Aktif* : ${kyun(uptime)}\n➽\n➽ *ɢʀᴜᴘ* : coming soon\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ Allah ꜱᴡᴛ\n➽ Fxc7\n➽ MhankBarBars\n➽ Ampibi\n➽ Ramlan\n➽ Dennis\n➽  Anker`
					const daca = fs.readFileSync('me.jpg');
				    das.sendMessage(from, daca, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teks})
					break 
		case 'snk':
					me = das.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					das.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return das.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[LAPOR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return das.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					das.sendMessage('6285283427860@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER Tbz, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					das.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await das.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					das.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'afk':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        das.sendMessage(from, tagzz, text, {quoted: mek})
					await limitAdd(sender)
                                        break
                                        case 'profile':

    				das.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await das.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					das.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
                case 'quotemaker':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					var gh = body.slice(12)
					var quote = gh.split("/")[0];
					var wm = gh.split("/")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					das.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                case 'truth':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					das.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					das.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break


		case 'waifu':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					das.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					das.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'hentai2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					gatauda = body.slice(9)
					reply(ind.wait())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					das.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
	
	
		case 'pokemon':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'freefireimg':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=freefire`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'ww2':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nangis':
				
	 
	
	
		
		
		case 'mobil':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'motor':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=motorcycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'sepeda':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=bicycle`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'bluesky':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'flower':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'icecream':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'pemandangan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'osakana':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=osakana`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'menherachan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=menhera-chan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

		
		case 'quotesid':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'quotesen':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katakata':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=katakata`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kehidupan':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'islami':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					das.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=quotes%20islami`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					das.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

		case 'map':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					das.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
          
                case 'artinama':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break


	
					case 'ocr': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await das.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'gtts':
		case 'tts'://
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return das.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return das.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							das.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
	 

                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await das.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				das.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'sayang':
					das.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: mek} )
					break
		case 'gelud':
					das.sendMessage(from, 'Kuylah, dapat duit aku..',MessageType.text, { quoted: mek} )
					break
		case 'bot':
					das.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
		case 'hargaprem':
		case 'hargapremium':
					das.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek} )
					break
		case 'buypremium':
					das.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6285283427860',MessageType.text, { quoted: mek} )
					break
		case 'buypremunlimited':
					
					das.sendMessage(from, 'Selamat kamu sudah berlangganan selamanya 🎉',MessageType.text, { quoted: mek} )
					break
		case 'buyprem30day':
					
					das.sendMessage(from, 'Selamat kamu sudah berlangganan 30 hari',MessageType.text, { quoted: mek} )
					break
		case 'buyprem7day':
					
					das.sendMessage(from, 'Selamat kamu sudah berlangganan 7 hari',MessageType.text, { quoted: mek} )
					break
		case 'test':
					das.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
					case 'ping':
					case 'speed':
						const timestamp = speed();
						const latensi = speed() - timestamp
						exec(`neofetch --stdout`, (error, stdout, stderr) => {
						const child = stdout.toString('utf-8')
						const teks = child.replace(/Memory:/, "Ram:")
						const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
						reply(`${pingnya}`)
						})
						break 


		case 'wa.me':
		case 'wame':
  					
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					das.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					das.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall2':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「 ANGGA TAG」───\n│•Dari: ${pushname}\n│•Pesan: *${query}*\n├──────────────`+ teks +'└───「 *_AnggaGanz_* 」────', members_id, true)
					break
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ❏ *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「AnggaGanzz TAG」───`+ teks +'└───「 *_Pxc7_* 」────', members_id, true)
					break

		case 'blockk':
				 das.updatePresence(from, Presence.composing) 
				 das.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					das.blockUser (`${body.slice(8)}@c.us`, "add")
					das.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    das.blockUser (`${body.slice(10)}@c.us`, "remove")
					das.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break

					case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await das.downloadAndSaveMediaMessage(mek)
					await das.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						das.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						das.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						das.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  das.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  das.sendMessage(from, 'Tinggalkan Pesan Kepada Owner Kami!',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}} )
					break
					case 'coowner':
                 das.sendMessage(from, {displayname: "Jeff", vcard: vcard1}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  das.sendMessage(from, 'Tinggalkan Pesan Kepada Owner Kami!',MessageType.text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}} )
                 break
           case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT JADIIN ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Y𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						das.groupRemove(from, mentioned)
						}
					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi beban🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						das.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi beban🏃`, mentioned, true)
						das.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮?? 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (>_<) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						das.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (>_<)`, mentioned, true)
						das.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						das.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						das.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                das.groupUpdateSubject(from, `${body.slice(9)}`)
                das.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                das.groupUpdateDescription(from, `${body.slice(9)}`)
                das.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'upswvideo':
					das.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swew = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await das.downloadMediaMessage(swew)
						das.sendMessage('status@broadcast', sweb, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					das.sendMessage(from, bur, text, { quoted: mek, contextInfo: { forwardingScore: 15, isForwarded: true} })
					break
case 'upswimg':
					das.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await das.downloadMediaMessage(swew)
						das.sendMessage('status@broadcast', sweb, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					das.sendMessage(from, bur, text, { quoted: mek, contextInfo: { forwardingScore: 15, isForwarded: true}})
					break
		case 'toimg':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isQuotedSticker) return reply('*Reply/Tag sticker!*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await das.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						das.sendMessage(from, buffer, image, {quoted: mek, caption: '*DAH JADI SETAN* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
      
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('*Fitur nsfw sudah aktif sebelum nya*')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply('ONLY GRUP')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('JADIKAN BOT ADMIN DULU')
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						das.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break

				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await das.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							das.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
		default:
			
		if (budy.startsWith('>')){
		if(!isOwner) return
		try {
		return das.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
		} catch (err) {
			reply(`err: ${err}`)
			}
		} 

  
		if (isGroup && !isCmd && isSimi && budy != undefined) {
		console.log(budy)
		muehe = await simih(budy)
		reply(ind.cmdnf(prefix, command))
			}
		}
		} catch (e) {
			// console.log('Error : %s', color(e, 'red'))
			console.log(e)
		}
	})
