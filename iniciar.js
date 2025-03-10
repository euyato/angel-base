const { 
  default: makeWASocket, 
  useMultiFileAuthState, 
  fetchLatestBaileysVersion, 
  makeInMemoryStore, 
  DisconnectReason,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC,
  delay 
} = require('@whiskeysockets/baileys');

const pino = require('pino')
const Pino = pino
const chalk = require('chalk')
let number = "558892153207"
const pairingCode = process.argv.includes("sim");
const request = require('request');
const useMobile = process.argv.includes("--mobile")
const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const NodeCache = require("node-cache")

const { fs, Boom, axios, crypto, util, P, linkfy, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./proxy.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar, getRandom } = require('./proxy.js');

var LINKS_T = require("./banco de dados/links.json");

let sessionStartTime;

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

var qrcode = "./banco de dados/base-code";

async function INC() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const conn = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: false,
mobile: useMobile,
browser: ['Chrome (Linux)', '', ''],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
browser: ['Chrome (Linux)', '', ''],
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (key) => {
let jid = jidNormalizedUser(key.remoteJid)
let msg = await store.loadMessage(jid, key.id)

return msg?.message || ""
},
msgRetryCounterCache,
defaultQueryTimeoutMs: undefined,
})

const PhoneNumber = require('awesome-phonenumber')

if (!conn.authState.creds.registered) {
try {
let number = await question(`${colors.gray("Exemplo do número: +55 88 9999-9999")}${colors.cyan("\n• Insira o número de telefone:")}`);
number = number.replace(/[^0-9]/g, "");
let code = await conn.requestPairingCode(number);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.cyan("• Código para conectar: ")}` + colors.white(code));
rl.close();
} catch(error) {
console.error('Falha ao solicitar o código de registro. Por favor, tente novamente.\n', error)
}
}

conn.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var base2 = events["group-participants.update"];
if(!fs.existsSync(`./banco de dados/grupos/${base2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./banco de dados/grupos/${base2.id}.json`));

if(base2.participants[0].startsWith(conn.user.id.split(':')[0])) return;

try {
var grpmdt = await conn.groupMetadata(base2.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await conn.groupMetadata(base2.id): "";
} catch (e) {
return;
}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';

const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(base2.action == 'add'){
num = base2.participants[0];
if(nescessario.listanegraG.includes(num)){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [base2.participants[0]], 'remove');
return;
}}
if(base2.action == 'remove'){
num = base2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./banco de dados/countmsg.json", JSON.stringify(countMessage));
}
}
if(base2.action == 'add' && jsonGp[0].listanegra.includes(base2.participants[0])){
await conn.sendMessage(GroupMetadata_.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [base2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && base2.action === 'add' && !base2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
conn.groupParticipantsUpdate(GroupMetadata_.id, [base2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await conn.groupMetadata(base2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !base2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 

if(base2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+base2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(base2.participants[0].split('@')[0], mdata_2.subject);
}
mem = base2.participants[0];
try {
ppimo = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`, 'image');
} catch(e) {
ppimo = 'https://files.catbox.moe/mrjzgs.jpg';
}
let buff = await getBuffer('https://files.catbox.moe/mrjzgs.jpg');
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
conn.sendMessage(mdata_2.id, {image: {url: ppimo}, mentions: base2.participants, caption: teks});
DLT_FL(ran);
} else if(base2.action === 'remove') {
mem = base2.participants[0];

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', base2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
}

let buff = await getBuffer('https://files.catbox.moe/mrjzgs.jpg');
ran = getRandom('.jpg');
fs.writeFileSync(ran, buff);
try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`, 'image');
} catch (e){
ppimg = 'https://files.catbox.moe/mrjzgs.jpg';
}
conn.sendMessage(mdata_2.id, {image: {url: ppimg}, caption: teks, 
mentions: base2.participants});
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(base2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+base2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(base2.participants[0].split('@')[0], mdata_2.subject)
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: base2.participants})
} else if(base2.action === 'remove') {
var mem = base2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: base2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//LMR
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
console.log(colors.green('CONECTANDO [ANGEL - BASE]'))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(
`〔 ANGEL - CONECTADO COM SUCESSO 〕`))
sessionStartTime = Math.floor(new Date().getTime() / 1000);
await conn.sendPresenceUpdate("available")
break;

default:
break;
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startBase = require('./index.js');
sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)
startBase(upsert, conn, qrcode, sessionStartTim).then(() => {}).catch((error) => {
console.log('Erro no Bot:', String(error));
});
}


if(events["creds.update"]) {
await saveCreds();
}

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR EM INICIAR.JS: "+e))
})