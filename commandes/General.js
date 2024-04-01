const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "developer", categorie: "General", reaction: "👨‍💻" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "💀 *✔️.Creater :Sahan Maduwantha* 💀", numero: "94789958225" },
      { nom: "💀 *✔️.Co Leader : Hemal Veenath* 💀", numero: "94719552053" },
        { nom: "💀 *✔️.Bug Test : Kanishka de Silva* 💀", numero: "94722477361" },
        { nom: "💀 *✔️.Test : Cyber Buddy* 💀", numero: "94728103228" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "👋 *WELCOME TO MASTER-MD WHATSAPP USER BOT.. MASTER-MD DEVELOPERS ARE* \n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *MASTER-MD Developer @Sahan's Number* 💀 \n *+94720797915* ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/94720797915?text=Hey_MASTER-MD_Owner_👨‍💻✅`},{quoted :ms})

});
zokou({ nomCom: "sahan", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *MASTER-MD BOT CREATED BY SAHAN 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀FROM GALEWELA💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 YEARS OLD 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  © Created By MASTER MIND..👨‍💻 ")
  await zk.sendMessage(auteurMessage,{text : `*Leader Link https://wa.me/94720797915?text=Hey_Owner_👨‍💻✅*`},{quoted :ms})

});
zokou({ nomCom: "hemal", categorie: "Creator" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("💀 *MASTER-MD Bot Co leader is Mr Hemal Veenath. 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Galewela💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 21 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  © Created By MASTER MIND..👨‍💻 ")
  await zk.sendMessage(auteurMessage,{text : `*Co Leader Link https://wa.me/94720797915?text=Hey_Co_Leader_👨‍💻✅*`},{quoted :ms})

});


