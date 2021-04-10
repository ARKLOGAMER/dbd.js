module.exports = ({
  name: "wow",
  code: `
  $color[RANDOM]
  $image[https://chilledcoders.ml/woah?text=$message]
  $onlyIf[$message[1]!=;Pls Give a Message]
  `
})