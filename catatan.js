case 'menuu':
		         reply(`Menu Sedang Di Muat Harap Tunggu!⏳`)
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					num = `${sender.split("@")[0]}@s.whatsapp.net`
		    ow = "6285283427860@s.whatsapp.net"
                    menusu = `
Hai...Selamat ${tampilHari} 
kak ${pushname}
◪ INFO DEVELOPER
│
└❏ Owner: @${ow.split('@')[0]}
  ----------------------------------
◪ YOUR INFO
│
└ ❏ Prefix: 「  ${prefix}  」
    ❏ Nama: ${pushname}
    ❏ Duit: *Rp.${uangku}.-*
    ❏ Tag: @${num.split('@')[0]}
    ❏ Role: *${role}*
    ❏ Level: ${getLevelingLevel(sender)}
    ❏ Xp: ${getLevelingXp(sender)}/${reqXp} 
    
 ◪ PERINGATAN
│NO SPAM BOT! 
│BERI JEDA 3 DETIK
│NO CALL BOT
│NO VC BOTT
│MELANGGAR BLOCK!!
└ ❏ © ANGGA

⎮
❏ *INGFO*
│
└◪› *${prefix}info*
⎮〤 *${prefix}snk*
⎮〤 *${prefix}lpr*
⎮〤 *${prefix}request*
⎮〤 *${prefix}blocklist*
⎮〤 *${prefix}join*
⎮〤 *${prefix}ping*
⎮〤 *${prefix}buypremium*
⎮〤 *${prefix}hargaprem*

❏ *GROUP MENU*
│
└◪› ${prefix}welcome [1/0]
⎮〤 ${prefix}nsfw [1/0]
⎮〤 ${prefix}antilink [1/0]
⎮〤 ${prefix}leveling [1/0]
⎮〤 ${prefix}nobadword [1/0]
⎮〤 ${prefix}simih [1/0] 
⎮〤 ${prefix}promote [@tag]
⎮〤 ${prefix}demote [@tag]
⎮〤 ${prefix}tagall
⎮〤 ${prefix}listadmin
⎮〤 ${prefix}wakillist
⎮〤 ${prefix}premiumlist
⎮〤 ${prefix}banlist
⎮〤 ${prefix}blocklist
⎮〤 ${prefix}linkgc
⎮〤 ${prefix}mining
⎮〤 ${prefix}hidetag
⎮〤 ${prefix}grouplist
⎮〤 ${prefix}add [62]
⎮〤 ${prefix}kick [@tag]
⎮〤 ${prefix}setname
⎮〤 ${prefix}setdesc
⎮〤 ${prefix}setpp
⎮〤 ${prefix}listadmin
⎮〤 ${prefix}linkgc
⎮〤 ${prefix}antidelete [1/0]
⎮〤 ${prefix}leave
⎮〤 ${prefix}mining
⎮〤 ${prefix}level
⎮〤 ${prefix}grup [buka/tutup)

❏ *OWNER MENU*
│
└◪› ${prefix}bc
⎮〤 ${prefix}addbadword [OWNER]
⎮〤 ${prefix}delbadword[OWNER]
⎮〤 ${prefix}bcgc [OWNER]
⎮〤 ${prefix}kickall [OWNEF]
⎮〤 ${prefix}setreply [OWNER]
⎮〤 ${prefix}setprefix [OWNER]
⎮〤 ${prefix}clearall [OWNER]
⎮〤 ${prefix}block [OWNER]
⎮〤 ${prefix}unblock [OWNER]
⎮〤 ${prefix}leave [OWNER]
⎮〤 ${prefix}event [1/0] [OWNER]
⎮〤 ${prefix}clone [OWNER]
⎮〤 ${prefix}setppbot [OWNER]
⎮〤 ${prefix}buggc [OWNER]
⎮〤 ${prefix}addpremium [OWNER]
⎮〤 ${prefix}bikingc [OWNER]
⎮〤 ${prefix}joingc [OWNER]
❏ *INFORMATION MENU*
│
└◪› ${prefix}covidindo
⎮〤 ${prefix}infonomor
⎮〤 ${prefix}infogempa
⎮〤 ${prefix}infocuaca
⎮〤 ${prefix}infofilm
⎮〤 ${prefix}jadwaltv
⎮〤 ${prefix}jadwalsholat
⎮〤 ${prefix}tribunews
⎮〤 ${prefix}liputan6
⎮〤 ${prefix}foxnews
⎮〤 ${prefix}apkpure
⎮〤 ${prefix}film1
⎮〤 ${prefix}film2
⎮〤 ${prefix}lirik
⎮〤 ${prefix}searchfilm
⎮〤 ${prefix}nickff

❏ *MAKER MENU*
│
└◪› ${prefix}sticker
⎮〤 ${prefix}ttp
⎮〤 ${prefix}attp
⎮〤 ${prefix}nulis
⎮〤 ${prefix}nulis2
⎮〤 ${prefix}tahta
⎮〤 ${prefix}darkneon
⎮〤 ${prefix}candlemug
⎮〤 ${prefix}lovemsg
⎮〤 ${prefix}mugflower
⎮〤 ${prefix}narutobanner
⎮〤 ${prefix}paperonglass
⎮〤 ${prefix}romancetext
⎮〤 ${prefix}shadowtext
⎮〤 ${prefix}coffeecup
⎮〤 ${prefix}coffeecup2
⎮〤 ${prefix}glowingneon
⎮〤 ${prefix}underwater
⎮〤 ${prefix}hpotter
⎮〤 ${prefix}woodblock
⎮〤 ${prefix}gplaybutton
⎮〤 ${prefix}splaybutton
⎮〤 ${prefix}barcode
⎮〤 ${prefix}qrencode
⎮〤 ${prefix}ttp
⎮〤 ${prefix}attp
⎮〤 ${prefix}jokerlogo
⎮〤 ${prefix}calendermaker
⎮〤 ${prefix}pornhub
⎮〤 ${prefix}googletext
⎮〤 ${prefix}glitchtext
⎮〤 ${prefix}crosslogo
⎮〤 ${prefix}naruto
⎮〤 ${prefix}flowertext
⎮〤 ${prefix}silktext
⎮〤 ${prefix}flametext
⎮〤 ${prefix}glowtext
⎮〤 ${prefix}skytext
⎮〤 ${prefix}cslogo
⎮〤 ${prefix}lithgtext
⎮〤 ${prefix}crismes
⎮〤 ${prefix}bneon
⎮〤 ${prefix}matrix
⎮〤 ${prefix}breakwall
⎮〤 ${prefix}dropwater
⎮〤 ${prefix}leavest
⎮〤 ${prefix}darkjokes <FIX ERROR>
⎮〤 ${prefix}darklogo <NEW>
⎮〤 ${prefix}logobp

❏ *IMAGE EDIT MENU*
│
└◪› ${prefix}wanted
⎮〤 ${prefix}gtav
⎮〤 ${prefix}crossgun
⎮〤 ${prefix}bakar
⎮〤 ${prefix}facebookpage
⎮〤 ${prefix}costumwp
⎮〤 ${prefix}pantaimalam
⎮〤 ${prefix}pencil
 
❏ *FUN MENU*
│
└◪› ${prefix}gantengcek
⎮〤 ${prefix}cantikcek
⎮〤 ${prefix}sangecek
⎮〤 ${prefix}gaycek
⎮〤 ${prefix}lesbicek
⎮〤 ${prefix}watak
⎮〤 ${prefix}hobby
⎮〤 ${prefix}apakah
⎮〤 ${prefix}kapankah
⎮〤 ${prefix}bisakah
⎮〤 ${prefix}bagaimanakah
⎮〤 ${prefix}rate
⎮〤 ${prefix}alay
⎮〤 ${prefix}fml
⎮〤 ${prefix}tebakbendera
⎮〤 ${prefix}tebakgambar
⎮〤 ${prefix}randomnama
⎮〤 ${prefix}caklontong
⎮〤 ${prefix}family100
⎮〤 ${prefix}slot
⎮〤 ${prefix}suit
⎮〤 ${prefix}katacinta
⎮〤 ${prefix}pantun
⎮〤 ${prefix}hilih
⎮〤 ${prefix}holoh
⎮〤 ${prefix}halah
⎮〤 ${prefix}hurufterbalik
 
❏ *APK MENU*
│
└◪› ${prefix}apkpure
⎮〤 ${prefix}happymod
⎮〤 ${prefix}moddroid
 
❏ *MEDIA MENU*
│
└◪› ${prefix}brainly 
⎮〤 ${prefix}stickerwa 
⎮〤 ${prefix}playstore
⎮〤 ${prefix}pinterest
⎮〤 ${prefix}wallpapersearch
⎮〤 ${prefix}wallpapersearch2
⎮〤 ${prefix}resepmasakan
⎮〤 ${prefix}igstalk
⎮〤 ${prefix}bitly
⎮〤 ${prefix}tkstalk 
⎮〤 ${prefix}twtstalk
⎮〤 ${prefix}ssweb
⎮〤 ${prefix}kbbi
⎮〤 ${prefix}meme
⎮〤 ${prefix}memeindo
⎮〤 ${prefix}githubstalk
 
❏ *DOWNLOAD*
│
└◪› ${prefix}joox 
⎮〤 ${prefix}ytmp4 
⎮〤 ${prefix}ytmp3 
⎮〤 ${prefix}play
 
❏ *ANIME MENU*
│
└◪› ${prefix}peluk
⎮〤 ${prefix}cium
⎮〤 ${prefix}husbu
⎮〤 ${prefix}ranime
⎮〤 ${prefix}waifu
⎮〤 ${prefix}animeboy
⎮〤 ${prefix}animegirl
⎮〤 ${prefix}animeimg
⎮〤 ${prefix}loli
⎮〤 ${prefix}shota
⎮〤 ${prefix}neko
⎮〤 ${prefix}animehug
⎮〤 ${prefix}animecry
╭══════❲ *FUNFUN MENU²*
⎮〤 *${prefix}gantengcek*
⎮〤 *${prefix}cantikcek*
⎮〤 *${prefix}jelekcek*
⎮〤 *${prefix}goblokcek*
⎮〤 *${prefix}begocek*
⎮〤 *${prefix}pintercek*
⎮〤 *${prefix}jagocek*
⎮〤 *${prefix}nolepcek*
⎮〤 *${prefix}babicek*
⎮〤 *${prefix}bebancek*
⎮〤 *${prefix}baikcek*
⎮〤 *${prefix}jahatcek*
⎮〤 *${prefix}anjingcek*
⎮〤 *${prefix}haramcek*
⎮〤 *${prefix}kontolcek*
⎮〤 *${prefix}pakboycek*
⎮〤 *${prefix}pakgirlcek*
⎮〤 *${prefix}sangecek*
⎮〤 *${prefix}bapercek*
╰═══════════════════⊷ 
❏ *NSFW MENU*
│
└◪› ${prefix}randomhentai 
⎮〤 ${prefix}randomsfw
⎮〤 ${prefix}randomnsfw
⎮〤 ${prefix}sfw
⎮〤 ${prefix}nsfw
⎮〤 ${prefix}nsfwneko 

❏ *RANDOM IMAGE*
│
└◪› ${prefix}aesthetic
⎮〤 ${prefix}fotocewek 
⎮〤 ${prefix}doraemon l
⎮〤 ${prefix}pokemon 
⎮〤 ${prefix}kucing 
⎮〤 ${prefix}hamster 
⎮〤 ${prefix}kelinci 
⎮〤 ${prefix}freefireimg 
⎮〤 ${prefix}ww2 
⎮〤 ${prefix}shota 
⎮〤 ${prefix}neko 
⎮〤 ${prefix}randomexo
⎮〤 ${prefix}randombts
⎮〤 ${prefix}imagegame
⎮〤 ${prefix}imagemountain
⎮〤 ${prefix}randomkpop
⎮〤 ${prefix}doraemon 
⎮〤 ${prefix}pokemon  
 
❏ *QUOTES MENU*
│
└◪› ${prefix}quotesanime
⎮〤 ${prefix}quotesdilan
⎮〤 ${prefix}quotesimage
⎮〤 ${prefix}quoteskehidupan
⎮〤 ${prefix}fakta
⎮〤 ${prefix}katabijak
⎮〤 ${prefix}bacotanhacker
⎮〤 ${prefix}quotedoraemon
⎮〤 ${prefix}pantun
⎮〤 ${prefix}bucin

❏ *LIMIT & UANG*
│
└◪› ${prefix}limit
⎮〤 ${prefix}buylimit
⎮〤 ${prefix}buypremiumlimit
⎮〤 ${prefix}transfer
⎮〤 ${prefix}leaderboard
 
❏ *TOOLS*
│
└◪› ${prefix}bass
⎮〤 ${prefix}toimg
⎮〤 ${prefix}tomp3
⎮〤 ${prefix}slowmo
⎮〤 ${prefix}tempo
⎮〤 ${prefix}vibra
⎮〤 ${prefix}gemes
⎮〤 ${prefix}gemok
⎮〤 ${prefix}tupai
⎮〤 ${prefix}tinyurl
⎮〤 ${prefix}bitly
⎮〤 ${prefix}ocr
⎮〤 ${prefix}tts
⎮〤 ${prefix}kalkulator
 
❏ *AUDIO*
│
└◪› ${prefix}fast
⎮〤 ${prefix}tupai
⎮〤 ${prefix}gemuk
⎮〤 ${prefix}nightcore
⎮〤 ${prefix}slow

❏ *ISLAM*
│
└◪› ${prefix}asmaulhusna
  ◪› ${prefix}kisahnabi
  ◪› ${prefix}jadwalsholat
  ◪› ${prefix}alquranaudio
╭══════❲ *MAKER²*════
⎮〤  *${prefix}maker1*                   
⎮〤  *${prefix}maker2*                   
⎮〤  *${prefix}maker3*                   
⎮〤  *${prefix}maker4*                   
⎮〤  *${prefix}maker5*                   
⎮〤  *${prefix}maker6*                   
⎮〤  *${prefix}maker7*                   
⎮〤  *${prefix}maker8*                   
⎮〤  *${prefix}maker9*                   
⎮〤  *${prefix}maker10*                   
⎮〤  *${prefix}maker11*                   
⎮〤  *${prefix}maker12*                   
⎮〤  *${prefix}maker13*                   
⎮〤  *${prefix}maker14*                   
⎮〤  *${prefix}maker15*                   
⎮〤  *${prefix}maker16*                   
⎮〤  *${prefix}maker17*                   
⎮〤  *${prefix}maker18*   
⎮〤  *${prefix}maker19*                   
⎮〤  *${prefix}maker20*         
⎮〤  *${prefix}maker21*                   
⎮〤  *${prefix}maker22*                   
⎮〤  *${prefix}maker23*                   
⎮〤  *${prefix}maker24*                   
⎮〤  *${prefix}maker25*                   
⎮〤  *${prefix}maker26*                   
⎮〤  *${prefix}maker27*                   
⎮〤  *${prefix}maker28*                   
⎮〤  *${prefix}maker29*                   
⎮〤  *${prefix}maker30*         
⎮〤  *${prefix}maker31*                   
⎮〤  *${prefix}maker32*                   
⎮〤  *${prefix}maker33*                   
⎮〤  *${prefix}maker34*                   
⎮〤  *${prefix}maker35*                   
⎮〤  *${prefix}maker36*                   
⎮〤  *${prefix}maker37*                   
⎮〤  *${prefix}maker38*                   
⎮〤  *${prefix}maker39*                   
⎮〤  *${prefix}maker40*         
⎮〤  *${prefix}maker41*                   
⎮〤  *${prefix}maker42*                   
⎮〤  *${prefix}maker43*                   
⎮〤  *${prefix}maker44*                   
⎮〤  *${prefix}maker45*                   
⎮〤  *${prefix}maker46*                   
⎮〤  *${prefix}maker47*                   
⎮〤  *${prefix}maker48*                   
⎮〤  *${prefix}maker49*                   
⎮〤  *${prefix}maker50*         
⎮〤  *${prefix}maker51*                   
⎮〤  *${prefix}maker52*                   
⎮〤  *${prefix}maker53*                   
⎮〤  *${prefix}maker54*                   
⎮〤  *${prefix}maker55*                                     
⎮〤  *${prefix}maker57*                   
⎮〤  *${prefix}maker58*                   
⎮〤  *${prefix}maker59*                   
⎮〤  *${prefix}maker60*         
⎮〤  *${prefix}maker61*                   
⎮〤  *${prefix}maker62*                   
⎮〤  *${prefix}maker63*                   
⎮〤  *${prefix}maker64*                   
⎮〤  *${prefix}maker65*                   
⎮〤  *${prefix}maker66*                   
⎮〤  *${prefix}maker67*                   
⎮〤  *${prefix}maker68*                   
⎮〤  *${prefix}maker69*                   
⎮〤  *${prefix}maker70*         
⎮〤  *${prefix}maker71*                   
⎮〤  *${prefix}maker72*       
╰═══════════════
❏ *STORAGE*
│
└◪› ${prefix}addsticker
⎮〤 ${prefix}getsticker
⎮〤 ${prefix}stickerlist
⎮〤 ${prefix}addvideo
⎮〤 ${prefix}getvideo
⎮〤 ${prefix}videolist
⎮〤 ${prefix}getimage
⎮〤 ${prefix}addImage
⎮〤 ${prefix}imagelist
⎮〤 ${prefix}addaudio
⎮〤 ${prefix}getaudio
⎮〤 ${prefix}audiolist

❏ *NEW FITUR*
│
└◪› ${prefix}splaybutton
⎮〤 ${prefix}gplaybutton
⎮〤 ${prefix}togif
⎮〤 ${prefix}stickerwa
⎮〤 ${prefix}harta
⎮〤 ${prefix}harcos
⎮〤 ${prefix}twtstalk
⎮〤 ${prefix}bneon
⎮〤 ${prefix}matrix
⎮〤 ${prefix}breakwall
⎮〤 ${prefix}dropwater
⎮〤 ${prefix}leavest
⎮〤 ${prefix}logobp
⎮〤 ${prefix}quotesislami
⎮〤 ${prefix}qrencode
⎮〤 ${prefix}barcode
⎮〤 ${prefix}bacotanhacker
⎮〤 ${prefix}randomhentai
⎮〤 ${prefix}randomnsfw
⎮〤 ${prefix}nsfwneko
⎮〤 ${prefix}katadilan
⎮〤 ${prefix}katabucin
⎮〤 ${prefix}wame

*⎮⟪ THX TO ⟫*  
*⎮ MARCEL*
*⎮ Arifi Razzaq*
*⎮ ltsmeiky*
*⎮ Manik*

*⎮⟪ THX Reset Api ⟫* 
*⎮ OnlyDev*
*⎮ Anggakey*
*⎮ vinzkey*
*⎮ tobzkey*
*⎮ Xteam*


❏ *ABOUT BOT*
› Name : ${Angga.user.name}
› Browser : ${Angga.browserDescription[1]}
› Server : ${Angga.browserDescription[0]}
› Version : ${Angga.browserDescription[2]}
› Speed : ${process.uptime()}
› Handphone : ${Angga.user.phone.device_manufacturer}
› Versi Whatsapp : ${Angga.user.phone.wa_version}
› User Register : ${_registered.length}


2. Spam call,Spam command = *BLOCK + BANNED*` 
try {
pp_user = await Angga.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
                    Angga.sendMessage(from, pp_riu, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, num]}, displayname: mem, caption: menusu })
					break
					case 'playstore':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break