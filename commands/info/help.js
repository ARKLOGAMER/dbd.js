module.exports = {
	name: 'help',
	code: `
  $title[My Commands!]
 $description[
  [**Invite-Me**\\](https://discord.com/api/oauth2/authorize?client_id=828631576530518026&permissions=8&scope=bot) | [**Support_Server**\\](https://discord.gg/kEPV3WFsnj)]

  $addField[__MUSIC__;\`$getServerVar[prefix]play | $getServerVar[prefix]skip | $getServerVar[prefix]queue\`]
  $addField[__FUN__;\`$getServerVar[prefix]twitter | $getServerVar[prefix]trump | $getServerVar[prefix]wow | $getServerVar[prefix]say | $getServerVar[prefix]meme\`]
  $addField[__INFO__;\`$getServerVar[prefix]help | $getServerVar[prefix]ping | $getServerVar[prefix]serverinfo\`]
  $addField[__MODERATION__;\`$getServerVar[prefix]kick | $getServerVar[prefix]clear | $getServerVar[prefix]ann | $getServerVar[prefix]giveaway | $getServerVar[prefix]warn\`]
  $addField[__REPORT-BUG__;\`$getServerVar[prefix]report\`]
  $addField[__WELCOME__;\`$getServerVar[prefix]setwelcome | $getServerVar[prefix]setleave\`]
  $addField[__TICKET__;\`$getServerVar[prefix]ticket-setup | $getServerVar[prefix]ticket | $getServerVar[prefix]close\`]
  $color[RANDOM]
  $addField[__RANKING SYSTEM__;\`$getServerVar[prefix]setrank | $getServerVar[prefix]resetrank | $getServerVar[prefix]setrankmsg | $getServerVar[prefix]rank\`]
 $addField[__MODMAIL__;\`$getServerVar[prefix]set-modmail | $getServerVar[prefix]modmail | $getServerVar[prefix]mreply\`]
  `
};
