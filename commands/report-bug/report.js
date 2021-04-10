module.exports = ({
  name: "report",
  aliases: ["bug"],
  code: `
  $useChannel[829008447529549916]
  $title[New Bug-Report!]
  $addField[REPORTED BY:;$userTag(***\`$authorID\`***)]
  $addField[REPORT:;$message]
  $color[GREEN]
  $onlyIf[$message[1]!=;Pls Give Bug To Report!]
  
  `
})