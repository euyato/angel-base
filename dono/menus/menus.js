const menu = (prefix, NomeDoBot, sender) => {
  
return `╭┄─▸
│ MENU DE COMANDOS 
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│ DIVERSOS MENUS
├─ ❑
│✰ menudono
│✰ menuadm
│✰ menulogos
│✰ alteradores
│✰ menupremium
│✰ efeitos
│✰ brincadeiras
╰───▸
╭┄─▸
│ PESQUISAS/BAIXAR
├─ ❑
│✰ play (NOME) 
│✰ playvid (NOME)
│✰ tiktok (LINK) 
│✰ instagram (LINK) 
╰───▸
╭┄─▸
│ INFORMAÇÕES 
├─ ❑
│✰ ping (VELO)
│✰ atividade (informaçoes)
│✰ rankativo (informaçoes)
│✰ checkativo (@MARCAR)
│✰ ranklevel (DE-TODOS) 
╰───▸
╭┄─▸
│ GAMES
├─ ❑
│✰ iniciar_forca
│✰ ppt (PEDRA/PAPEL/TESOURA) 
│✰ jogodavelha (@MARCAR) 
│✰ cassino (game)
╰───▸
╭┄─▸
│ FIGURINHAS
├─ ❑
│✰ attp (TEXTO)
│✰ fsticker (MARCAR-FOTO)
│✰ sticker (MARCAR-FOTO)
╰───▸
╭┄─▸
│ COMANDOS/BÁSICOS
├─ ❑
│✰ perfil (informaçoes)
│✰ calcular 1 + 1
│✰ fazernick (NICK)
│✰ signo ( EX: virgem)
│✰ metadinha (imagens)
╰───▸`;
};

exports.menu = menu;

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

	return `╭┄─▸
│ MENU ADMINISTRATIVO
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
├─ ❑
│✰ ativacoes
│✰ so_adm
│✰ listanegra (NUMERO)
│✰ tirardalista (NUMERO)
│✰ listanegraG (NÚMERO)
│✰ tirardalistaG (NÚMERO)
│✰ kick [@] (pra-remover) 
│✰ ban (responder-mensagem)
│✰ promover [@] (Ser-ADM)
│✰ rebaixar [@] (rebaixar-adm)
│✰ totag (menciona-algo)
│✰ grupo f/a
│✰ status
│✰ limpar (texto-invisível-gp)
│✰ atividades (DO-GRUPO)
│✰ linkgp
│✰ grupoinfo
│✰ hidetag (txt) (marcação)
│✰ marcar (marca tds do gp)
│✰ marcar2 (Marca-tds-Wa.me/)
│✰ antipalavra 1 / 0
│✰ descgp (TXT)
│✰ nomegp (Nome)
│✰ criartabela (ESCREVA-ALGO)
│✰ tabelagp
╰───▸`;
};

exports.adms = adms;

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `╭┄─▸
│ MENU DE DONO
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
├─ ❑
│✰ ativacoes_dono
│✰ bangp
│✰ unbangp
│✰ fotomenu (MARCAR-IMG) 
│✰ blockcmd  (cmd)
│✰ unblockcmd (cmd)
│✰ legenda_estrangeiro (msg)
│✰ legendabv (oq qr)
│✰ legendasaiu (oq qr)
│✰ legendasaiu2 (oq qr)
│✰ legendabv2 (oq qr)
│✰ fundobemvindo (marcar-img)
│✰ fundosaiu (marcar-img)
│✰ serpremium
│✰ listagp
│✰ antipalavrão 1 / 0
│✰ antiligar 1 / 0
│✰ addpalavra (palavrão)
│✰ delpalavra (palavrão)
│✰ ativo
│✰ ausente (fale-oq-faz)
│✰ delpremium @(marca)
│✰ addpremium @(marca)
│✰ clonar [@] (rouba ft de prf)
│✰ fotobot (img, = foto do BT)
│✰ descriçãogp (digite-algo)
│✰ block [@] (bloq de usar cmds) 
│✰ unblock [@] (desbloquear) 
│✰ setprefix  (prefixo-novo)
│✰ bcgp (TM-PRA-PV-MEMBROS)
╰───▸`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
  return `╭┄─▸
│ MENU DE LOGOS
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│ Logos De 1 Texto
├─ ❑
│✰ logos1 (txt) 
│
╰───▸
╭┄─▸
│ Logos De 2 Texto
├─ ❑
│✰ comporn (txt/txt) 
│✰ glitch (txt/txt)
│✰ glitch3 (txt/txt)
│✰ grafity (txt-txt)
│✰ space (txt/txt)
│✰ marvel (txt/txt)
│✰ stone (txt/txt)
│✰ steel (txt/txt)
╰───▸`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return`╭┄─▸
│ Alteradores audio/video 
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│ Alterar Videos
├─ ❑
│✰ videolento (marca)
│✰ videorapido (marca)
│✰ videocontrario (marca)
╰───▸
╭┄─▸
│ Alterar Audios
├─ ❑
│✰ audiolento (marca)
│✰ audiorapido (marca)
│✰ grave (marca)
│✰ grave2 (marca)
│✰ esquilo (marca)
│✰ estourar (marca)
│✰ bass (marca)
│✰ bass2 (marca)
│✰ vozmenino (marca)
│✰ audioreverse (marca)
╰───▸`;
};

exports.alteradores = alteradores;

// MENU PREMIUM 

const menuprem = (prefix, sender) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭┄─▸
│ Menu Premium
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│✰ ADICIONE SEUS COMANDOS PREMIUM
╰───▸`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭┄─▸
│ Menu Brincadeiras
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│✰ gay (marca (@))
│✰ feio (marca (@))
│✰ corno (marca (@))
│✰ vesgo (marca (@))
│✰ bebado (marca (@))
│✰ gostoso (marca (@))
│✰ gostosa (marca (@))
│✰ beijo (marca (@))
│✰ matar (marca (@))
│✰ tapa (marca (@))
│✰ chute (marca (@))
│✰ dogolpe (marca (@))   
│✰ nazista (marca (@))
│✰ chance (fale algo) 
│✰ casal   
│✰ rankgay     
│✰ rankgado
│✰ rankcorno  
│✰ rankgostoso
│✰ rankgostosa
│✰ ranknazista
│✰ rankotakus
│✰ rankpau
╰───▸
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `╭┄─▸
│ Menu De Efeitos
├─ ❑
│ Usuário: @${sender.split("@")[0]}
│ Use assim: ${prefix}comando
╰───▸
╭┄─▸
│✰ legenda (marcar)-(img)
│✰ procurado (marcar)-(img)
│✰ hitler (marcar)-(img)
│✰ preso (marcar)-(img)
│✰ lixo (marcar)-(img)
│✰ deletem (marcar)-(img)
│✰ morto (marcar)-(img) 
│✰ lgbt (marcar)-(img) 
╰───▸`;
};

exports.efeitos = efeitos;