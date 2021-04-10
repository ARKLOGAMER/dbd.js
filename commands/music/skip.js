module.exports = ({
  name: "skip",
  code: `
$skipSong
$onlyIf[$voiceID!=;You're not in a voice channel]
Skiped Playing: $songInfo[title]**`
})