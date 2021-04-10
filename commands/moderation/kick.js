module.exports = ({
 name: "kick",
 desc:"kick a user",
 cat: "moderator",
 usage: "kick <mention> (optional reason)",
 code: `$kick[$mentioned[1]]
$if[$mentioned[1]==]
Pls mention someone
$elseIf[$message[2]==]
$author[$username[$mentioned[1]] was Kicked From Here!;$userAvatar[$mentioned[1]]]
$description[
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $addField[Kicked by:; $userTag[$authorID]]
$addField[Reason:; $message[2]]
$color[RED]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: $message[2]]
$endelseIf
$elseIf[$message[2]==$message[2]]
$author[$username[$mentioned[1]] was Kicked;$userAvatar[$mentioned[1]]]
$description[
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $addField[**Kicked by:**; $userTag[$authorID]]
$addField[**Reason:**; $noMentionMessage]
$color[RED]
$sendDM[$mentioned[1];You has been kicked from **$serverName** for: $noMentionMessage]
$endelseIf
$endif

$onlyIf[$findUser[$message[1]]!=$clientID;❌I can't kick my self!]
$onlyIf[$findUser[$message[1]]!=$authorID;❌You can't kick yourself!]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];❌You can't kick someone with higher or the same roles as you]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];❌I can't kick someone with higher or the same roles as me]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;❌Couldn't find a member with this ID/name/mention in the server]
$onlyIf[$findUser[$message[1]]!=$ownerID;❌I can't modify the server owner]
$onlyBotPerms[kick;❌ The bot doesn't have enough permissions!]
$onlyPerms[kick;❌You don't have enough permission!]`
})