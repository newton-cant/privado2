exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname2) => {
	return`Maaf ${pushname2} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname2) =>{
	return` 🙅‍♀️ Halo ${pushname2} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname2, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`   
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return` Olá ${pushname} 👋
╭═══〘 *LHANNA-BOT* 〙═⊷❍
┃❏╭─────────────
┃❏│⊱❥ Versão: *1.0*
┃❏│⊱❥ Nome : *Lhanna-BOT*
┃❏│⊱❥ Conectado : *Baileys*
┃❏│⊱❥ Criador : *@SUPRA*
╰═════════════⊷❍
┏══〘 *CMD INICIAL* 〙═
┃╭─────────────
┃│❍➣ ${prefix}info
┃│❍➣ ${prefix}restapi
┃│❍➣ ${prefix}sorteiopix
┃│❍➣ ${prefix}github
┃│❍➣ ${prefix}criador
┃│❍➣ ${prefix}owner
┃│❍➣ ${prefix}report
┃│❍➣ ${prefix}ping
┃│❍➣ ${prefix}profile
┃│❍➣ ${prefix}wame
┃│❍➣ ${prefix}traduzir <texto>
┃│❍➣ ${prefix}stickera
┃│❍➣ ${prefix}simi <texto>
┃│❍➣ ${prefix}sticker <img/gf>
┃│❍➣ ${prefix}semoji  <emoji>
┃│❍➣ ${prefix}attp <texto>
┃│❍➣ ${prefix}attp1 <texto>
┃│❍➣ ${prefix}attp2 <texto>
┃│❍➣ ${prefix}attp3 <texto>
┃│❍➣ ${prefix}stickerwa <nome>
┃│❍➣ ${prefix}tomp3 <marcar>
┃│❍➣ ${prefix}linkimg <img>
╰═════════════⊷❍
┏══〘 *CMD GRUPOS* 〙═
┃╭─────────────
┃│❍➣ ${prefix}welcome
┃│❍➣ ${prefix}leveis
┃│❍➣ ${prefix}level
┃│❍➣ ${prefix}infogp
┃│❍➣ ${prefix}online
┃│❍➣ ${prefix}delete <marcar>
┃│❍➣ ${prefix}fotogp <ft>
┃│❍➣ ${prefix}setname <nome>
┃│❍➣ ${prefix}abrirgp
┃│❍➣ ${prefix}fechargp
┃│❍➣ ${prefix}kick @
┃│❍➣ ${prefix}kick1 
┃│❍➣ ${prefix}add [nume]
┃│❍➣ ${prefix}listadmin
┃│❍➣ ${prefix}promover @
┃│❍➣ ${prefix}demitir @
┃│❍➣ ${prefix}antilink
┃│❍➣ ${prefix}antifake
┃│❍➣ ${prefix}simih [1/0]
╰═════════════⊷❍
┏══〘 *CMD CONSULTA* 〙═
┃╭──────────────
┃│❍➣ ${prefix}img <nome>
┃│❍➣ ${prefix}github <nome>
┃│❍➣ ${prefix}google <nome>
┃│❍➣ ${prefix}Igstalk <nome>
┃│❍➣ ${prefix}letra <nome>
┃│❍➣ ${prefix}idanime <nome>
┃│❍➣ ${prefix}wait <img>
┃│❍➣ ${prefix}ddd <ddd>
┃│❍➣ ${prefix}cep <cep>
╰═════════════⊷❍
┏══〘 *FIGU CANVAS* 〙═
┃╭──────────────
┃│❍➣ ${prefix}trigger <img>
┃│❍➣ ${prefix}gays <img>
┃│❍➣ ${prefix}glass <img>
┃│❍➣ ${prefix}passed <img>
┃│❍➣ ${prefix}jail <img>
┃│❍➣ ${prefix}comrade <img>
┃│❍➣ ${prefix}hijau <img>
┃│❍➣ ${prefix}biru <img>
┃│❍➣ ${prefix}greyscale <img>
┃│❍➣ ${prefix}invert_greyscale
┃│❍➣ ${prefix}red <img>
┃│❍➣ ${prefix}blurple <img>
┃│❍➣ ${prefix}wasted <img>
┃│❍➣ ${prefix}sepia <img>
╰═════════════⊷❍
┏══〘 *IMG CANVAS* 〙═
┃╭─────────────
┃│❍➣ ${prefix}circulo <img>
┃│❍➣ ${prefix}cinzav <img>
┃│❍➣ ${prefix}borrar <img>
┃│❍➣ ${prefix}police <img>
┃│❍➣ ${prefix}camara <img>
┃│❍➣ ${prefix}viga <texto>
╰═════════════⊷❍
┏══〘 *VID ALEATÓRIOS* 〙═
┃╭──────────────
┃│❍➣ ${prefix}saycat
┃│❍➣ ${prefix}blackpinkv
┃│❍➣ ${prefix}porno
┃│❍➣ ${prefix}
╰═════════════⊷❍
┏══〘 *CMD DIVERSÃO* 〙═
┃╭──────────────
┃│❍➣ ${prefix}casal 
┃│❍➣ ${prefix}plaquinha<nome>
┃│❍➣ ${prefix}cornot
┃│❍➣ ${prefix}soucorno?
┃│❍➣ ${prefix}conselho
┃│❍➣ ${prefix}dadu
┃│❍➣ ${prefix}romantic
┃│❍➣ ${prefix}gados 
┃│❍➣ ${prefix}gay
┃│❍➣ ${prefix}shipp
╰═════════════⊷❍
┏══〘 *CMD IMAGEM* 〙═
┃╭─────────────
┃│❍➣ ${prefix}loli
┃│❍➣ ${prefix}waifu
┃│❍➣ ${prefix}meme
┃│❍➣ ${prefix}belle
┃│❍➣ ${prefix}hentai
┃│❍➣ ${prefix}wappanime
╰═════════════⊷❍
┏══〘 *CMD DE BAIXAR* 〙
┃╭─────────────
┃│❍➣ ${prefix}play <nome>
┃│❍➣ ${prefix}play2 <nome>
┃│❍➣ ${prefix}vid <nome>
┃│❍➣ ${prefix}tiktok <link>
╰═════════════⊷❍
┏══〘 *GERADOR E DD* 〙═
┃╭──────────────
┃│❍➣ ${prefix}dadosfake
┃│❍➣ ${prefix}pessoas
┃│❍➣ ${prefix}nickff
┃│❍➣ ${prefix}
╰═════════════⊷❍
┏═══〘 *E DE VOZ* 〙══
┃╭─────────────
┃│❍➣ ${prefix}slow <audio>
┃│❍➣ ${prefix}esquilo <audio>
┃│❍➣ ${prefix}raposa <audio>
┃│❍➣ ${prefix}bass <audio>
┃│❍➣ ${prefix}audiomeme <nome>
┃│❍➣ ${prefix}tts <txt>
╰═════════════⊷❍
┏══〘 *CMD CRIADOR* 〙═
┃╭──────────────
┃│❍➣ ${prefix}ban @
┃│❍➣ ${prefix}unban @
┃│❍➣ ${prefix}block @
┃│❍➣ ${prefix}unblock @
┃│❍➣ ${prefix}bc <texto>
┃│❍➣ ${prefix}entrargp <link>
┃│❍➣ ${prefix}addsticker <mar>
╰═════════════⊷❍
`
	}