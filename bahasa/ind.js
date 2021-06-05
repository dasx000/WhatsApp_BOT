/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix, botName, linkGroup, emot, noOwner } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
	return`*「 WAIT 」 SEDANG DIPROSES KACK*`
}

exports.succes = () => {
	return`*「 BERHASIL 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM VERIFIKASI 」 *\n\nDaftar Dulu Ngab dengan cara\n${prefix}daftar nama|umur`
}

exports.rediregis = () => {
	return`kamu sudah terdaftar`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner Anggaiツ, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`┌───「 *_DAFTAR_* 」───
│
├ ◪ Nama: ${namaUser}
├ ◪ No: wa.me/${sender.split("@")[0]}
├ ◪ Umur: ${umurUser}
├ ◪ Ns: ${serialUser}
│
└──「 *_ANGGA_* 」───`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6285283427860\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
exports.menu = (pushname, sender, levelnya, xpnya,reqXp, uangku, role, totalUser, ppriu) => {
    return `🔴🟡🟢

Hai Kak ${pushname}
╔═════════════════════
╠≽ *Level*: ${levelnya}
╠≽ *XP*: ${xpnya} / ${reqXp}
╠≽ *Role*: ${role}
╠≽ *Money*: ${uangku}
╠≽ *Total Users:* ${totalUser}
╠≽ *Prefix Bot:* ${prefix}
╚═════════════════════
╔═════════════════════
║ Nama BOT : ${botName}
║ 700+ Fitur
║ Jika ada bug ketik ${prefix}lapor kata2nya
╚═════════════════════
══════════════════════
Dapatkan lebih banyak fitur menarik dengan cara daftar premium klik wa.me/${noOwner}?text=premium

Mau beli sc bot ini? murah klik wa.me/6285216024226?text=beli+sc+gan

Mau jadi ownerbot bisa add member premium, terima beres?  terjangkau klik wa.me/6285216024226?text=jadi+owner
══════════════════════
*LIST MENU YANG TERSEDIA* ✅

${emot} Menu Media 
${emot} Menu Bot 
${emot} Menu Edukasi 
${emot} Menu Stiker 
${emot} Menu Anime
${emot} Menu Maker 
${emot} Menu Grup 
${emot} Menu Game
${emot} Menu Owner 
${emot} Menu Leveling
${emot} Menu Tools 
${emot} Menu Shop 
${emot} Menu Link
${emot} Menu Premium 
${emot} Menu Kerang 
${emot} *${prefix}NEW*
${emot} Contoh: *${prefix}menu media*
╔═════════════════════
╠≽ *Owner* : wa.me/${noOwner}
╚═════════════════════

    `
}

exports.menuMedia = () => {
    return `
════✪ [ *MENU MEDIA* ] ✪════

〤 *${prefix}googlereverse* reply foto //
〤 *${prefix}reverseyandex* reply foto //
〤 *${prefix}pinterestvideo* link
〤 *${prefix}addvn* namanya
〤 *${prefix}delvn* namanya
〤 *${prefix}listvn*
〤 *${prefix}getvn* namanya
〤 *${prefix}drakorongoin*
〤 *${prefix}pixiv* <kata kunci>
〤 *${prefix}gambar* <anime>
〤 *${prefix}ytsearch* judul
〤 *${prefix}lagu* judul
〤 *${prefix}play* lagu
〤 *${prefix}fbdl*
〤 *${prefix}ytmp3* link
〤 *${prefix}ytmp4* link
〤 *${prefix}joox* Judul
〤 *${prefix}twitterdl* link
〤 *${prefix}tiktoknwm*
〤 *${prefix}tiktokmusic*
〤 *${prefix}togif*
〤 *${prefix}tomp4* //
〤 *${prefix}igstory* kata_kunci //
〤 *${prefix}zippyshare* link
〤 *${prefix}pinterest* kata_kunci
〤 *${prefix}pinterestdl* link
〤 *${prefix}igpost* link
〤 *${prefix}igvideo* link
〤 *${prefix}igtv* link
〤 *${prefix}moddroid* apk //
〤 *${prefix}apkpure* apk
〤 *${prefix}igstalk* username
〤 *${prefix}tiktokstalk* username
〤 *${prefix}removebg* kirim foto
〤 *${prefix}imgtopdf* kirim foto

═══✪ [ *${botName}* ] ✪═══

`
}

exports.menuSticker = () => {
    return `
╔═══✪ [ *MENU STICKER* ]

〤 *${prefix}tovideo*
〤 *${prefix}togif*
〤 *${prefix}stickerwa*
〤 *${prefix}stickerwa*
〤 *${prefix}liststicker*
〤 *${prefix}addsticker*
〤 *${prefix}getsticker*
〤 *${prefix}stickerwa*
〤 *${prefix}sticker*
〤 *${prefix}tagstick*
〤 *${prefix}s* foto/video/gif
〤 *${prefix}semoji*
〤 *${prefix}ttp*
〤 *${prefix}ttp2*
〤 *${prefix}ttp3*
〤 *${prefix}ttp4*
〤 *${prefix}attp*


〤 *${prefix}patrick*
〤 *${prefix}amongus*
〤 *${prefix}gawrgura*
〤 *${prefix}anjing*
〤 *${prefix}bucinstick*
〤 *${prefix}ttg* teks
〤 *${prefix}snobg* kirim foto
〤 *${prefix}snobg2* kirim foto
〤 *${prefix}stickertoimg*
〤 *${prefix}emojistiker* emot
〤 *${prefix}stickerwm* teks | teks
〤 *${prefix}stickermeme* teks | teks
〤 *${prefix}attp* teks
〤 *${prefix}imgtourl*
〤 *${prefix}linesticker*
〤 *${prefix}findstiker* kata_kunci
〤 *${prefix}ttp2* teks
〤 *${prefix}steks* teks
〤 *${prefix}stikernobg* 
〤 *${prefix}animestiker* 

═══✪ [ *${botName}* ] ✪═══
 

`
}

exports.menuMaker = () => {
    return `
╔═══✪ [ *MENU MAKER* ]

〤 *${prefix}pencil* 
〤 *${prefix}pubgmaskot* teks
〤 *${prefix}aovwall* teks
〤 *${prefix}mlwall* teks
〤 *${prefix}logogaming* teks
〤 *${prefix}fpslogo* teks
〤 *${prefix}avatarlolnew* teks
〤 *${prefix}avatardota* teks
〤 *${prefix}lolbanner* teks
〤 *${prefix}affect* reply foto
〤 *${prefix}jail* reply foto
〤 *${prefix}rainbow* reply foto
〤 *${prefix}sepia* reply foto
〤 *${prefix}rip* reply foto
〤 *${prefix}beautiful* reply foto
〤 *${prefix}amongus* teks1
〤 *${prefix}gsuggest* teks1 teks2 teks3
〤 *${prefix}toloserti* teks
〤 *${prefix}fuckboy* teks
〤 *${prefix}fuckgirl* teks
〤 *${prefix}bucinserti* teks
〤 *${prefix}pacarserti* teks
〤 *${prefix}goodboy* teks
〤 *${prefix}goodgirl* teks
〤 *${prefix}badgirl* teks
〤 *${prefix}badboy* teks
║
〤 *${prefix}quotemaker* teks
〤 *${prefix}quotemaker2* teks | nama
〤 *${prefix}quotemaker3* teks+reply foto
〤 *${prefix}hartacustom* teks
〤 *${prefix}kannagen* teks
〤 *${prefix}changemymind* teks
〤 *${prefix}yugioh* judul | desc (+reply foto)
║
〤 *${prefix}flip*
〤 *${prefix}grayscale*
〤 *${prefix}roundimage*
〤 *${prefix}1977*
〤 *${prefix}aden*
〤 *${prefix}brannan*
〤 *${prefix}brooklyn*
〤 *${prefix}clarendon*
〤 *${prefix}gingham*
〤 *${prefix}hudson*
〤 *${prefix}inkwell*
〤 *${prefix}earlybird*
〤 *${prefix}kelvin*
〤 *${prefix}lark*
〤 *${prefix}lofi*
〤 *${prefix}maven*
〤 *${prefix}mayfair*
〤 *${prefix}moon*
〤 *${prefix}nashville*
〤 *${prefix}perpetua*
〤 *${prefix}reyes*
〤 *${prefix}rise*
〤 *${prefix}slumber*
〤 *${prefix}stinson*
〤 *${prefix}toaster*
〤 *${prefix}valencia*
〤 *${prefix}walden*
〤 *${prefix}xpro2*
║
〤 *${prefix}burneffect* kirim foto/reply
〤 *${prefix}crossgun* kirim foto/reply
〤 *${prefix}gtavposter* kirim foto/reply
〤 *${prefix}imageburning* kirim foto/reply
〤 *${prefix}raindrop* kirim foto/reply
〤 *${prefix}nightbeach* kirim foto/reply
〤 *${prefix}customwp* kirim foto/reply
〤 *${prefix}3dlinephoto* kirim foto/reply
║
〤 *${prefix}sweetcandy* textnya
〤 *${prefix}woodblock* textnya
〤 *${prefix}lovemsg* textnya
〤 *${prefix}mugflower* textnya
〤 *${prefix}glowingneon* textnya
〤 *${prefix}underwater* textnya
〤 *${prefix}candlemug* textnya
║
〤 *${prefix}text1*
〤 *${prefix}neon* textnya
〤 *${prefix}greenneon* textnya
〤 *${prefix}advanceglow* textnya
〤 *${prefix}futureneon* textnya
〤 *${prefix}sandwriting* textnya
〤 *${prefix}sandsummer* textnya
〤 *${prefix}sandengraved* textnya
〤 *${prefix}metaldark* textnya
〤 *${prefix}neonlight* textnya
〤 *${prefix}holographic* textnya
〤 *${prefix}text1917* textnya
〤 *${prefix}minion* textnya
〤 *${prefix}deluxesilver* textnya
〤 *${prefix}newyearcard* textnya
〤 *${prefix}bloodfrosted* textnya
〤 *${prefix}halloween* textnya
〤 *${prefix}jokerlogo* textnya
〤 *${prefix}breakwall* textnya
〤 *${prefix}fireworksparkle* textnya
〤 *${prefix}natureleaves* textnya
〤 *${prefix}bokeh* textnya
〤 *${prefix}toxic* textnya
〤 *${prefix}strawberry* textnya
〤 *${prefix}box3d* textnya
〤 *${prefix}roadwarning* textnya
〤 *${prefix}icecold* textnya
〤 *${prefix}luxury* textnya
〤 *${prefix}cloud* textnya
〤 *${prefix}summersand* textnya
〤 *${prefix}horrorblood* textnya
〤 *${prefix}thunder* textnya
〤 *${prefix}pornhub* teks1 | teks2
〤 *${prefix}glitch* teks1 | teks2
〤 *${prefix}avenger* teks1 | teks2
〤 *${prefix}space* teks1 | teks2
〤 *${prefix}ninjalogo* teks1 | teks2
〤 *${prefix}marvelstudio* teks1 | teks2
〤 *${prefix}lionlogo* teks1 | teks2
〤 *${prefix}wolflogo* teks1 | teks2
〤 *${prefix}steel3d* teks1 | teks2
〤 *${prefix}wallgravity* teks1 | teks2
〤 *${prefix}codwar* text1 | teks2
〤 *${prefix}ffrandom* text1 | teks2
〤 *${prefix}Juventus* text1 | nomor
〤 *${prefix}wetglass* teksnya
〤 *${prefix}multicolor3d* teksnya
〤 *${prefix}luxurygold* teksnya
〤 *${prefix}galaxywallpaper* teksnya
〤 *${prefix}watercolor* teksnya
〤 *${prefix}lighttext* teksnya
〤 *${prefix}royaltext* teksnya
〤 *${prefix}heartshaped* teksnya
〤 *${prefix}birthdaycake* teksnya
〤 *${prefix}galaxystyle* teksnya
〤 *${prefix}greenneon* teksnya
〤 *${prefix}hologram3d* teksnya
〤 *${prefix}glossychrome* teksnya
〤 *${prefix}greenbush* teksnya
〤 *${prefix}metallogo* teksnya
〤 *${prefix}noeltext* teksnya
〤 *${prefix}textcake* teksnya
〤 *${prefix}starsnight* teksnya
〤 *${prefix}wooden3d* teksnya
〤 *${prefix}textbyname* teksnya
〤 *${prefix}writegalacy* teksnya
〤 *${prefix}galaxybat* teksnya
〤 *${prefix}snow3d* teksnya
〤 *${prefix}birthdayday* teksnya
〤 *${prefix}goldplaybutton* teksnya
〤 *${prefix}silverplaybutton* teksnya
〤 *${prefix}freefire* teksnya
〤 *${prefix}beautifulflower* teksnya
〤 *${prefix}starsnight* teksnya
〤 *${prefix}glittergold* teksnya
〤 *${prefix}fflogo* karakter | teks
〤 *${prefix}ffbanner* teks | teks
〤 *${prefix}logogame* teks
〤 *${prefix}pubg* teks | teks
〤 *${prefix}csgo* teks | teks
║
〤 *${prefix}text1*
〤 *${prefix}sensor* kirim foto
〤 *${prefix}invert* kirim foto
〤 *${prefix}fisheye* kirim foto
〤 *${prefix}ytkomen*
〤 *${prefix}hartatahta* teks
〤 *${prefix}nulis* teks
〤 *${prefix}stylelogo* teks
〤 *${prefix}8bit* teks
〤 *${prefix}nulishd* teks
〤 *${prefix}blackping* teks
〤 *${prefix}phmaker* teks | teks
〤 *${prefix}galaxy* teks 
〤 *${prefix}triggered* reply chat
〤 *${prefix}trigger* reply gambar
〤 *${prefix}phcomment* Nama | teks
〤 *${prefix}fflogo* karakter | teks
〤 *${prefix}firemaker* teks
〤 *${prefix}mlmaker* hero | teks
〤 *${prefix}blmaker* teks | teks
〤 *${prefix}sliding* teks 
〤 *${prefix}trash* tag_member
〤 *${prefix}hitler* tag_member
〤 *${prefix}wasted* kirim gambar
〤 *${prefix}hilih* teks 
〤 *${prefix}ffbanner* teks | teks
〤 *${prefix}logogame* teks 
〤 *${prefix}metal* teks 
〤 *${prefix}glitchtext* teks | teks
〤 *${prefix}shadow* teks
〤 *${prefix}burn* teks
〤 *${prefix}kopi* teks
〤 *${prefix}love* teks
〤 *${prefix}wood* teks
〤 *${prefix}qowh* teks
〤 *${prefix}grass* teks
〤 *${prefix}potter* teks
〤 *${prefix}warface* teks
〤 *${prefix}pubg* teks | teks
〤 *${prefix}csgo* teks | teks
〤 *${prefix}snowwrite* teks | teks
〤 *${prefix}cup* teks
〤 *${prefix}cup2* teks
〤 *${prefix}party* teks
〤 *${prefix}padlock* 1 1 2001 | Aku
〤 *${prefix}glassmaker* teks
〤 *${prefix}logowolf* teks | teks
〤 *${prefix}blackpinkmaker* teks
〤 *${prefix}blackpinkmaker2* teks
〤 *${prefix}teks3d* teks
〤 *${prefix}dropwater* teks
〤 *${prefix}matrixmaker* teks
〤 *${prefix}grafiti* teks
〤 *${prefix}breakwall* teks
〤 *${prefix}neonblue* teks
〤 *${prefix}neonlight* teks
〤 *${prefix}trumptweet* teks
〤 *${prefix}gradien* teks
〤 *${prefix}draw1* tag/reply foto
〤 *${prefix}draw2* tag/reply foto
╠
〤 *${prefix}watglass* teksnya
〤 *${prefix}multicolor* teksnya
〤 *${prefix}luxurygold* teksnya
〤 *${prefix}galaxywallpaper* teksnya
〤 *${prefix}watercolor* teksnya
〤 *${prefix}lighttext* teksnya
〤 *${prefix}royaltext* teksnya
〤 *${prefix}heartshaped* teksnya
〤 *${prefix}birthdaycake* teksnya
〤 *${prefix}galaxystyle* teksnya
〤 *${prefix}greenneon* teksnya
〤 *${prefix}hologram3d* teksnya
〤 *${prefix}glossychrome* teksnya
〤 *${prefix}greenbush* teksnya
〤 *${prefix}metallogo* teksnya
〤 *${prefix}noeltext* teksnya
〤 *${prefix}textcake* teksnya
〤 *${prefix}starsnight* teksnya
〤 *${prefix}wooden3d* teksnya
〤 *${prefix}textbyname* teksnya
〤 *${prefix}writegalacy* teksnya
〤 *${prefix}galaxybat* teksnya
〤 *${prefix}snow3d* teksnya
〤 *${prefix}birthdayday* teksnya
〤 *${prefix}goldplaybutton* teksnya
〤 *${prefix}silverplaybutton* teksnya
〤 *${prefix}freefire* teksnya
〤 *${prefix}beautifulflower* teksnya
〤 *${prefix}starsnight* teksnya
〤 *${prefix}glittergold* teksnya


═══✪ [ *${botName}* ] ✪═══


`
}

exports.menuEdu = () => {
    return `
╔═══✪[ *MENU EDUKASI* ]

〤 *${prefix}quotesislami*
〤 *${prefix}indbeasiswa*
〤 *${prefix}hoax*
〤 *${prefix}kisannabi* nama_nabi
〤 *${prefix}asmaulhusna*
〤 *${prefix}alquranaudio*
〤 *${prefix}quran*
〤 *${prefix}listsurah*
〤 *${prefix}listsurah*
〤 *${prefix}cariayat* no surah *|* ayat
〤 *${prefix}carisurah* no surah
〤 *${prefix}ayataudio* no surah *|* ayat
〤 *${prefix}surahaudio* no surah
〤 *${prefix}tafsir* Al-mulk 10
〤 *${prefix}surah* nomor surah
〤 *${prefix}hadis*
〤 *${prefix}randomngaji*
〤 *${prefix}wikipedia* teks
〤 *${prefix}kbbi* kata
〤 *${prefix}resep* makanan
〤 *${prefix}kalkulator*
〤 *${prefix}jsolat*
〤 *${prefix}katabijak*
〤 *${prefix}motivasi*
〤 *${prefix}faktaunik*
〤 *${prefix}quote*
〤 *${prefix}brainly* teksnya
〤 *${prefix}translate*
〤 *${prefix}kelpersegi* P Sisi
〤 *${prefix}luaspersegi* P Sisi
〤 *${prefix}luaskubik* P Sisi
〤 *${prefix}faktorial* angka
〤 *${prefix}kuadrat* Angka
〤 *${prefix}topdf*
〤 *${prefix}todoc*
〤 *${prefix}todocx*
〤 *${prefix}komprespdf*

═══✪ [ *${botName}* ] ✪═══

`
}

exports.menuBot = () => {
    return `
╔══✪ [ *MENU BOT* ]

〤 *${prefix}buypremium*
〤 *${prefix}support*
〤 *${prefix}listgrup*
〤 *${prefix}premium*
〤 *${prefix}daftarpremium*
〤 *${prefix}runtime*
〤 *${prefix}menu*
〤 *${prefix}bot* teks
〤 *${prefix}resend* reply_file
〤 *${prefix}help*
〤 *${prefix}status*
〤 *${prefix}listblock*
〤 *${prefix}listbanned*
〤 *${prefix}ping*
〤 *${prefix}delete*
〤 *${prefix}lapor* teks
〤 *${prefix}tos* 
〤 *${prefix}owner* 
〤 *${prefix}owner* 
〤 *${prefix}premiumcheck* 
〤 *${prefix}premiumlist* 
〤 *${prefix}linkgrup* 
〤 *${prefix}linkgrup* 
〤 *${prefix}jamaktif* 
〤 *${prefix}buatgrup* nama
〤 *${prefix}rules*
〤 *${prefix}getcontact* tag member
〤 *${prefix}getnomor* tag member
╠
╠
╚═══✪ [ ${botName} ]


`
}

exports.reset = () => {
    return `
╔══❉ *RESET* ❉═══
║
╟⊱ *${prefix}reset* donasi
╟⊱ *${prefix}reset* limitgame
╟⊱ *${prefix}reset* limitdownload
╟⊱ *${prefix}reset* hit
╟⊱ *${prefix}reset* hits
╟⊱ *${prefix}reset* antiporn
╟⊱ *${prefix}reset* welcome
╟⊱ *${prefix}reset* afk
╟⊱ *${prefix}reset* antilink
╟⊱ *${prefix}reset* update
╟⊱ *${prefix}reset* mutegc
╟⊱ *${prefix}reset* antikasar
╟⊱ *${prefix}reset* autosticker
╟⊱ *${prefix}reset* useragh
╟⊱ *${prefix}reset* tugas
╟⊱ *${prefix}reset* gcmatkul
╟
║⊱ BY DasX000
║
╚══❉ ${botName}❉═══
    `
}

exports.set = () => {
    return `
╔══❉ *SETTING* ❉═══
║
╟⊱ *${prefix}set* hafizh
╟⊱ *${prefix}set* prefix
╟⊱ *${prefix}set* linkgroup
╟⊱ *${prefix}set* emot
╟⊱ *${prefix}set* memberlimit
╟⊱ *${prefix}set* gruplimit
╟⊱ *${prefix}set* kuota
╟⊱ *${prefix}set* noowner
╟⊱ *${prefix}set* owner
╟⊱ *${prefix}set* namabot
╟⊱ *${prefix}set* vhtear
╟⊱ *${prefix}set* lol
╟⊱ *${prefix}set* zeks
╟
║⊱ BY DasX000
║
╚══❉ ${botName}❉═══
    `
}

exports.menuAnime = () => {
    return `
╔═══✪ [ *MENU ANIME* ]
║
╠➣ *${prefix}Anime* 
╠➣ *${prefix}quotesnime*
╠➣ *${prefix}neko*
╠➣ *${prefix}genshin* karakter
╠➣ *${prefix}neko2*
╠➣ *${prefix}kemono*
╠➣ *${prefix}waifu*
╠➣ *${prefix}waifustiker*
╠➣ *${prefix}anoboy*
╠➣ *${prefix}anitoki*
╠➣ *${prefix}kusonime* judul
╠➣ *${prefix}komiku* judul_manga
╠➣ *${prefix}wait* reply_foto
╠➣ *${prefix}saurce* reply_foto
╠➣ *${prefix}wp*
╠➣ *${prefix}wpanime*
╠➣ *${prefix}wpanime2*
╠➣ *${prefix}baka*
╠➣ *${prefix}rhug*
╠➣ *${prefix}slap*
╠➣ *${prefix}nekostiker*
╠➣ *${prefix}randompat*
╠
╠
╚═══✪ [ ${botName} ]



`
}

exports.menuTools = () => {
    return `
╔═══✪ [ *MENU TOOLS* ]
║
╠➣ *${prefix}carigrup* kata kunci
╠➣ *${prefix}ocr* kirim gambar
╠➣ *${prefix}githubstalk* username
╠➣ *${prefix}encode* teks
╠➣ *${prefix}decode* teks
╠➣ *${prefix}texttohex* teks
╠➣ *${prefix}hextotext* teks
╠➣ *${prefix}playstore* apk
╠➣ *${prefix}chord* judul
╠➣ *${prefix}shopee* produk
╠➣ *${prefix}tts* teks
╠➣ *${prefix}tts2* teks
╠➣ *${prefix}say* teks
╠➣ *${prefix}movie* judul
╠➣ *${prefix}corona* negara
╠➣ *${prefix}jumlahhuruf* teks
╠➣ *${prefix}infogempa*
╠➣ *${prefix}gempa*
╠➣ *${prefix}spek* merk HP
╠➣ *${prefix}infomotor* merek
╠➣ *${prefix}infomobil* merek
╠➣ *${prefix}tribunnews*
╠➣ *${prefix}liputan6*
╠➣ *${prefix}lirik* judul
╠➣ *${prefix}shortlink* link
╠➣ *${prefix}bitly* link
╠➣ *${prefix}igstalk* username
╠➣ *${prefix}gsmarena* HP
╠➣ *${prefix}readmore* teks | teks
╠➣ *${prefix}afk* alasan
╠➣ *${prefix}distance* kota1 | kota2
╠➣ *${prefix}mutual*
╠➣ *${prefix}whois* alamat IP
╠➣ *${prefix}sms* pesan | nomornya
╠➣ *${prefix}cekongkir*
╠➣ *${prefix}jobseek*
╠➣ *${prefix}spamcall* nomor 
╠➣ *${prefix}email*
╠➣ *${prefix}sspc* link
╠➣ *${prefix}ssphone* link
╠➣ *${prefix}judul* judul
╠➣ *${prefix}resi* jnt (resi)
╠➣ *${prefix}qrcode* 
╠➣ *${prefix}qrread* 
╠➣ *${prefix}cuaca* 
╠➣ *${prefix}gempa* 
╠➣ *${prefix}kodebahasa* 
╠➣ *${prefix}reminder* 60s | pesan 
╠
╚═══✪ [ ${botName} ]


`
}
