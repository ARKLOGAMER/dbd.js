module.exports = ({
 name: "serverinfo",
 code: ` 
 $thumbnail[$serverIcon[$guildID;2048]]
 $color[2f3136]
 $addTimestamp
 $footer[MAGIC.SERVERINFO]
 $description[Guild Name: $serverName
Guild ID: $guildID
Guild Region: $serverRegion
Content Filter: $serverContentFilter
Boost Level: $serverBoostLevel
Boost Count: $serverBoostCount
Members Count: $membersCount
Bot Count: $botCount
Channel Count: $channelCount
Role Count: $roleCount
Emoji Count: $emojiCount
Online Members: $membersCount[$guildID;online]
Idle Members: $membersCount[$guildID;Idle]
Do Not Disturb Members: $membersCount[$guildID;dnd]
Offline/Invisible Members: $membersCount[$guildID;offline]
Invite Link: $getServerInvite]
 $title[Server Information!]
 $argsCheck[0;❌ Usage: \`!serverinfo\`]
 `
});