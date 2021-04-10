module.exports = ({
  name: "set-px",
  code: `
  Updated Prefix To: \`$message[1]\`
  $onlyPerms[admin;You Dont Have Prems To Use The Cmd]
  $setServerVar[prefix;$message[1]]
  `
})