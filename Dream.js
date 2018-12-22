const Discord = require('discord.js');
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();



console.log("Scrpit By Dream");

client8.on('ready', () => {
  console.log(`Online !`);
 
});

//Bot 8//
client8.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@512718919363198999> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@512718919363198999> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });
  

//Bot 9//
client9.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@512719629857062922> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@512719629857062922> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });

  //Bot 10//

  client10.on('message', message => {
    if(message.author.id !== "510806679898554370" )return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === "<@512720222449565731> gc") {
    let credits = args[0]; 
    message.channel.send(`#credits  <@510806679898554370> ${credits}`);
    }
    if (command ==="<@512720222449565731> say") {
      let thingie = args[0]; 
  message.channel.send(`${thingie}`);
      }
   if (command ==="Check Credits")  {
      message.channel.send('#credits')
   }
    if (command === "Collect Dailies")  {
      message.channel.send('#daily')
   }
  });


client8.on('message', message => {
 
if (message.content === '!start') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
        client8.channels.get("526013726495735809").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
      
        
      }
    }
    
});

client9.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client9.channels.get("526013726495735809").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });
client10.on('message', message => {
    // لا تغير شئ عشان ما تخرب الدنيا
 if (message.content === '!start') {
     let count = 0;
     let ecount = 0;
     for(let x = 0; x < 90000; x++) {
         client10.channels.get("526013784528257024").send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
         .then(m => {
           count++;
         })
         
       }
     }
     
 });


 
client8.login(process.env.TOKEN4);// لا تغير فيها شيء
client9.login(process.env.TOKEN5);
client10.login(process.env.TOKEN6);


// لا تغير فيها شيء

