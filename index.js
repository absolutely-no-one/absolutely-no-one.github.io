$.getJSON('test.json', function (json) {
    var user = prompt("Pick a username")
    json.users[user] = {
        "hi": false
    }
})