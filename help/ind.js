exports.limitcount = (prem, limitCounts) => {
	return`
*γ LIMIT COUNT γ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname2) => {
	return`Maaf ${pushname2} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname2) =>{
	return` πββοΈ Halo ${pushname2} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar π`
	}
exports.daftar = (sender, pushname2, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

β’ Nama : ${pushname}
β’ Nomor : ${sender.split("@")[0]}
β’ Waktu : ${time}
β’ Serial : ${serialUser}
β’ Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` πββοΈ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`πββοΈ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`β οΈ Bot bukan admin grup`
	}
exports.err = () =>{
	return`β οΈ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`πββοΈ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`β³ Sedang di proses ~`
	}
exports.ok = () =>{
	return` β Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
β―ΦΈ   ΦNama :
β―ΦΈ   ΦUmur :
β―ΦΈ   ΦKelamin :
β―ΦΈ   ΦAskot :
β°β α¬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`   
β
β°β α¬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return` OlΓ‘ ${pushname} π
β­βββγ *LHANNA-BOT* γββ·β
βββ­βββββββββββββ
ββββ±β₯ VersΓ£o: *1.0*
ββββ±β₯ Nome : *Lhanna-BOT*
ββββ±β₯ Conectado : *Baileys*
ββββ±β₯ Criador : *@SUPRA*
β°ββββββββββββββ·β
βββγ *CMD INICIAL* γβ
ββ­βββββββββββββ
ββββ£ ${prefix}info
ββββ£ ${prefix}restapi
ββββ£ ${prefix}sorteiopix
ββββ£ ${prefix}github
ββββ£ ${prefix}criador
ββββ£ ${prefix}owner
ββββ£ ${prefix}report
ββββ£ ${prefix}ping
ββββ£ ${prefix}profile
ββββ£ ${prefix}wame
ββββ£ ${prefix}traduzir <texto>
ββββ£ ${prefix}stickera
ββββ£ ${prefix}simi <texto>
ββββ£ ${prefix}sticker <img/gf>
ββββ£ ${prefix}semoji  <emoji>
ββββ£ ${prefix}attp <texto>
ββββ£ ${prefix}attp1 <texto>
ββββ£ ${prefix}attp2 <texto>
ββββ£ ${prefix}attp3 <texto>
ββββ£ ${prefix}stickerwa <nome>
ββββ£ ${prefix}tomp3 <marcar>
ββββ£ ${prefix}linkimg <img>
β°ββββββββββββββ·β
βββγ *CMD GRUPOS* γβ
ββ­βββββββββββββ
ββββ£ ${prefix}welcome
ββββ£ ${prefix}leveis
ββββ£ ${prefix}level
ββββ£ ${prefix}infogp
ββββ£ ${prefix}online
ββββ£ ${prefix}delete <marcar>
ββββ£ ${prefix}fotogp <ft>
ββββ£ ${prefix}setname <nome>
ββββ£ ${prefix}abrirgp
ββββ£ ${prefix}fechargp
ββββ£ ${prefix}kick @
ββββ£ ${prefix}kick1 
ββββ£ ${prefix}add [nume]
ββββ£ ${prefix}listadmin
ββββ£ ${prefix}promover @
ββββ£ ${prefix}demitir @
ββββ£ ${prefix}antilink
ββββ£ ${prefix}antifake
ββββ£ ${prefix}simih [1/0]
β°ββββββββββββββ·β
βββγ *CMD CONSULTA* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}img <nome>
ββββ£ ${prefix}github <nome>
ββββ£ ${prefix}google <nome>
ββββ£ ${prefix}Igstalk <nome>
ββββ£ ${prefix}letra <nome>
ββββ£ ${prefix}idanime <nome>
ββββ£ ${prefix}wait <img>
ββββ£ ${prefix}ddd <ddd>
ββββ£ ${prefix}cep <cep>
β°ββββββββββββββ·β
βββγ *FIGU CANVAS* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}trigger <img>
ββββ£ ${prefix}gays <img>
ββββ£ ${prefix}glass <img>
ββββ£ ${prefix}passed <img>
ββββ£ ${prefix}jail <img>
ββββ£ ${prefix}comrade <img>
ββββ£ ${prefix}hijau <img>
ββββ£ ${prefix}biru <img>
ββββ£ ${prefix}greyscale <img>
ββββ£ ${prefix}invert_greyscale
ββββ£ ${prefix}red <img>
ββββ£ ${prefix}blurple <img>
ββββ£ ${prefix}wasted <img>
ββββ£ ${prefix}sepia <img>
β°ββββββββββββββ·β
βββγ *IMG CANVAS* γβ
ββ­βββββββββββββ
ββββ£ ${prefix}circulo <img>
ββββ£ ${prefix}cinzav <img>
ββββ£ ${prefix}borrar <img>
ββββ£ ${prefix}police <img>
ββββ£ ${prefix}camara <img>
ββββ£ ${prefix}viga <texto>
β°ββββββββββββββ·β
βββγ *VID ALEATΓRIOS* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}saycat
ββββ£ ${prefix}blackpinkv
ββββ£ ${prefix}porno
ββββ£ ${prefix}
β°ββββββββββββββ·β
βββγ *CMD DIVERSΓO* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}casal 
ββββ£ ${prefix}plaquinha<nome>
ββββ£ ${prefix}cornot
ββββ£ ${prefix}soucorno?
ββββ£ ${prefix}conselho
ββββ£ ${prefix}dadu
ββββ£ ${prefix}romantic
ββββ£ ${prefix}gados 
ββββ£ ${prefix}gay
ββββ£ ${prefix}shipp
β°ββββββββββββββ·β
βββγ *CMD IMAGEM* γβ
ββ­βββββββββββββ
ββββ£ ${prefix}loli
ββββ£ ${prefix}waifu
ββββ£ ${prefix}meme
ββββ£ ${prefix}belle
ββββ£ ${prefix}hentai
ββββ£ ${prefix}wappanime
β°ββββββββββββββ·β
βββγ *CMD DE BAIXAR* γ
ββ­βββββββββββββ
ββββ£ ${prefix}play <nome>
ββββ£ ${prefix}play2 <nome>
ββββ£ ${prefix}vid <nome>
ββββ£ ${prefix}tiktok <link>
β°ββββββββββββββ·β
βββγ *GERADOR E DD* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}dadosfake
ββββ£ ${prefix}pessoas
ββββ£ ${prefix}nickff
ββββ£ ${prefix}
β°ββββββββββββββ·β
ββββγ *E DE VOZ* γββ
ββ­βββββββββββββ
ββββ£ ${prefix}slow <audio>
ββββ£ ${prefix}esquilo <audio>
ββββ£ ${prefix}raposa <audio>
ββββ£ ${prefix}bass <audio>
ββββ£ ${prefix}audiomeme <nome>
ββββ£ ${prefix}tts <txt>
β°ββββββββββββββ·β
βββγ *CMD CRIADOR* γβ
ββ­ββββββββββββββ
ββββ£ ${prefix}ban @
ββββ£ ${prefix}unban @
ββββ£ ${prefix}block @
ββββ£ ${prefix}unblock @
ββββ£ ${prefix}bc <texto>
ββββ£ ${prefix}entrargp <link>
ββββ£ ${prefix}addsticker <mar>
β°ββββββββββββββ·β
`
	}