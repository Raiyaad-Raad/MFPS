const client = require("../index");

client.on("ready", () =>{
    console.log('Ready!')


    const arrayOfStatus = [
        "Just Chilling",
        "Wanna help of normal commands? %help",
        "Wanna help of slash commands? /help",
        "Created & Management By PwP"
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status);
        client.user.setActivity(status);
        index++;
    }, 10000)

    client.user.setStatus("idle")
})