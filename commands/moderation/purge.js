module.exports = ({
  name :"clear",
 code:`
 $deleteIn[5s]
 $title[Deleted messages]
 $description[
Successfully deleted $message[1] messages]
$footer[By $username[$authorID]]
$color[RANDOM]
$addTimestamp
 $clear[$message[1]]
$onlyIf[$message[1]<=100;❌You cant delete more than 100 message at a time]
$onlyIf[$message[1]!=;❌Please select a channel to be your welcome channel]
$onlyIf[$hasPerms[$authorID;managemessages]==true;❌You don't have enough permissions to set the join channel required perm\` managemessages\`]`
})
