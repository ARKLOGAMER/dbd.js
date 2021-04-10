console.clear();
const keep_alive = require('./keep_alive');
const config = require('./config.json');
require('dotenv');
const { token } = require('./config');
const dbd = require('dbd.js');
const bot = new dbd.Bot({
	token: process.env.DISCORD_BOT,
	prefix: 'prefix'
});

bot.onMessage();

const fs = require('fs');

const folders = fs.readdirSync('./commands/');

for (const files of folders) {
	const folder = fs
		.readdirSync(`./commands/${files}/`)
		.filter(file => file.endsWith('.js'));

	for (const commands of folder) {
		const command = require(`./commands/${files}/${commands}`);
		bot.command({
			name: command.name,
			code: command.code
		});
	}
}

bot.status({
	text: 'YOUR BOT Watching You',
	type: 'PLAYING',
	status: 'online',
	time: 12
});

bot.status({
	text: 'My Prefix $getServerVar[prefix]',
	type: 'WATCHING',
	status: 'online',
	time: 12
});

bot.variables({
	prefix: 'your prefix',
	wchan: '',
	lchan: '',
	ticketchannel: '',
	rch: '',
	rmsg: 'Congrats {user.tag}🎉, you leveled up to level {level}',
	lvl: '0',
	exp: '0',
	rexp: '40',
	rsystem: '0',
	ccmd: '',
	modmail: '',
	giveaway: '',
	cdes: '',
	autorole: '',
	autorolestate: 'on/off'
});

const username = `$username[$authorID]`;
const discrim = `$discriminator[$authorID]`;
const members = `$membersCount`;
const guild = `$serverName`;
const avatar = `$replaceText[$userAvatar[$authorID];webp;png]`;
const background = `https://cdn.discordapp.com/attachments/821606929720934423/829209279151210566/images.jpeg`;

bot.joinCommand({
	channel: '$getServerVar[wchan]',
	code: `$djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  welcomeCanvas = new canvas.Welcome();

let image = await welcomeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("${background}")
  .setText("message", "Welcome to {server}")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome.png");

message.channel.send(attachment);
})()]`
});

bot.leaveCommand({
	channel: '$getServerVar[lchan]',
	code: `$djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  welcomeCanvas = new canvas.Welcome();

let image = await welcomeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("${background}")
  .setText("message", "Leaving from {server}")
  .setText("title", "Goodbye")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome.png");

message.channel.send(attachment);
})()]`
});
bot.onLeave();
bot.onJoined();

bot.botJoinCommand({
	channel: '818723065448890399',
	code: `
    $title[New Server!]
    $addField[SERVER NAME;$serverName]
    $addField[TOTAL MEMBERS;$membersCount]
    $addField[OWNER;\`$userTag[$ownerID]\`]
    $color[GREEN]
    `
});
bot.onGuildJoin();

bot.command({
	name: 'ticket-setup',
	code: `
 $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
 $sendMessage[**Which Category Do you want to make For Ticket System.
 Provide the Category ID. 
 This Command will be cancelled after** \`30 seconds\`.;no]
 $onlyPerms[admin;You Dont Have Prem To Use this Command{delete:10s}]
 $suppressErrors[]`
});

bot.awaitedCommand({
	name: 'tsp2',
	code: `
**Successfully Setuped Ticket Channel!📫**
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
});

bot.command({
	name: 'ticket',
	code: `
$newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
}{footer:Use close to *close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]`
});

bot.command({
	name: 'close',
	code: `
$closeTicket[This is not a ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;{description:This command can only be used in ticket channel!} {color:RED} {delete:10s}]
$suppressErrors`
});

bot.command({
	name: 'say',
	code: ` 
$deletecommand
$message
`
});

bot.command({
	name: '<@828631576530518026>',
	code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**
[**Invite-Me**\\](https://discord.com/api/oauth2/authorize?client_id=828631576530518026&permissions=8&scope=bot) | [**Support-Server**\\](https://discord.gg/kEPV3WFsnj)]
$color[RANDOM]`,
	nonPrefixed: true
});

bot.command({
	name: '<@!828631576530518026>',
	code: `$title[Bot Name]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**
[**Invite-Me**\\](https://discord.com/api/oauth2/authorize?client_id=828631576530518026&permissions=8&scope=bot) | [**Support-Server**\\](https://discord.gg/kEPV3WFsnj)]
$color[RANDOM]`,
	nonPrefixed: true
});

bot.command({
	name: 'ann',
	code: `
  $title[ $serverName • ANNOUNCEMENT]
$description[$message]
$image[https://cdn.discordapp.com/attachments/783319872230129674/784371198188453909/Tw.gif]
$footer[Announced: $username]
$addTimestamp
$thumbnail[$serverIcon]
$deletecommand
$onlyPerms[admin;only Admin Command if u use again u will kicked from server]`
});

bot.command({
	name: 'setrank',
	usage: 'setrank <channel>',
	description: 'settings the levelup channel',
	code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
	name: 'resetrank',
	usage: 'resetrank',
	description: 'reset the levelup channel',
	code: `$description[Rank channel has been reseted <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
	name: '$alwaysExecute',
	code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]`
});

bot.command({
	name: '$alwaysExecute',
	code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
});

bot.awaitedCommand({
	name: 'errorrank',
	code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
});

bot.command({
	name: 'setrankmsg',
	usage: 'setrankmsg <message>',
	description: 'message for the leveled up',
	code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
	name: 'rank',
	aliases: ['level'],
	usage: 'rank (user)',
	description: 'see the current level and exp',
	code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]`
});

bot.command({
	name: 'set-modmail',
	code: `
					 $title[✅ | Task complete] 
					 $description[The modmail channel has been changed to <#$findChannel[$message]>]
$color[RANDOM]

$addTimestamp

$setServerVar[modmail;$findChannel[$message]]

$onlyPerms[admin;You need \`ADMIN\` permision]

$argsCheck[1;Put a valid channel]
 `
});

bot.command({
	name: 'modmail',
	code: `$color[RANDOM]
			 $useChannel[$getServerVar[modmail]]
			 $description[<@$authorID> $message]
$title[$username\`($authorID)\` sent modmail - to respond type \`<Prefix>\`mreply @user message>]

$addCmdReactions[📨]
$deletecommandIn[30s]
$cooldown[1m;⛔ Modmail is on cooldown.]

$onlyIf[$getServerVar[modmail]!=;The modmail channel has not been set]
`
});

bot.command({
	name: 'mreply',
	code: `$title[Modmail Reply]
			$dm[$mentioned[1]]
$color[RANDOM]

$description[You've received a new reply to your modmail.
$message]

$addCmdReactions[📦]

$onlyPerms[admin;Only Users with \`ADMIN\` perms can use this]

$suppressErrors[Make sure to mention an user]`
});

bot.command({
	name: 'giveaway',
	code: `
  $editMessage[$getServerVar[giveaway];{title:Giveaway Finished 🎉}{description:Prize: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosted By: **$userTag[$authorID]**
  Winner: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;None, there were not enough participants.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer:Giveaway Finished.:$authorAvatar}]
  $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;There were not enough participants.];false;The winner of the prize: **$replaceText[$message;$message[1];;-1]** is: <@$randomText[$joinSplitText[;]]>, Congratulations!]]
  $textSplit[$replaceText[$getReactions[$channelID;$getServerVar[giveaway];🎉;id];$clientID,;];,]
  $wait[$message[1]]
  $setServerVar[giveaway;$sendMessage[{title:React with 🎉 to participate!.}{description:Prize: \`$replaceText[$message;$message[1] ;;-1]\`
  Hosted By: **$userTag[$authorID]**
  Time: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
  $onlyIf[$message[2]!=;{title:Looking For Arguments}{description:You have not put any prize to draw.Follow This Format: 
  \`\`\`
  - $getServerVar[prefix]giveaway <time> <prize>.\`\`\`
  - \`Arguments with<> are required \`
  - }{color:ORANGE}]
  - $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title:Invalid Format}{description:The time format you just entered is invalid Follow this example:
  - \`\`\`
  - 1s Is 1 second 
  - 1m Is 1 minute
  - 1h Is 1 hour
  - 1d Is 1 day
  - \`\`\`}{color:RED}]
$onlyPerms[admin;{title:No Permission}{description:You Dont Have \`ADMINISTRATOR\` Permission To Use This Command.}{color:RED}]
`
});

bot.command({
	name: 'warn',
	code: `
$dm[$mentioned[1]]
$title[Warn]
$description[You Got Warn By $username 
Reason : $message]
$footer[Warned By $username]
$onlyPerms[admin;You Dont Have The Warn Perms]`
});

bot.command({
	name: 'add-cmd',
	code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1;10]/]
Successfully added $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<] to the commands list, type \`$getservervar[prefix]cmd-list\` to see all available commands
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;{description:Command \`$tolowercase[$message[1]]\` is available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>2;{description:Correct useâ€Š\n\`\`\`\n$getservervar[prefix]add-cmd <trigger> <response>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
});

bot.command({
	name: 'del-cmd',
	code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
Successfully cleared command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;{description:Command \`$tolowercase[$message]\` not available in the command list}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;{description:Please don't use it \`symbol\` for trigger and response}{color:ff2050}]
$argscheck[>1;{description:Correct useâ€Š\n\`\`\`\n$getservervar[prefix]del-cmd <trigger>\n\`\`\`}{color:ff2050}]
$onlyperms[manageserver;{description:You have no permissions for \`MANAGE_SERVER\`}{color:ff2050}{timestamp}]
`
});

bot.command({
	name: 'cmd-list',
	code: `
$title[**__Custom Commands__**]
$color[RANDOM]
$thumbnail[$servericon]
$description[\`$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]\`]
$addtimestamp
$onlyif[$gettextsplitlength>=2;{description:There are no custom commands on the server \`$servername\`}{color:ff2050}]
$textsplit[$getservervar[ccmd];/]
`
});

bot.command({
	name: '$alwaysExecute',
	code: `
$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]
$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;]
$onlyif[$isbot[$authorid]==false;]
$textsplit[$getservervar[ccmd];/]
`
});

bot.command({
	name: 'autorole',
	code: `$deletecommand
$argsCheck[>1;Please Mention a role]
$setServerVar[autorole;$mentionedRoles[1]]
$onlyPerms[Only admins can access this command]
$title[ROLES]
$description[Auto-role has been updated to <@&$mentionedRoles[1]>]
$footer[MAGIC]
$color[RANDOM]`
});

bot.command({
	name: 'autoroleon',
	code: `
    $onlyIf[$getServerVar[autorole]>0;You need to Setup the Autoroles First!]
$setServerVar[autorolestate;on]
$title[Success!]
$description[Autorole has been enabled!]
$color[$random[15;99999]]`
});

bot.joinCommand({
	channel: '$getServerVar[wchan]',
	code: `
    $onlyIf[$getServerVar[autorole]>0;]
$giveRole[$getServerVar[autorole];$authorID]`
});

bot.command({
name: 'autoroleoff',
code: `
$onlyIf[$getServerVar[autorole]>0;You need to Setup the Autoroles First!]
$setServerVar[autorolestate;off]
$title[Success!]
$description[Autrole has been disabled!]
$color[$random[15;99999]]
`
})
