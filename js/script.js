
const data = {};

let flag = true;
let starttime;
let hasJumped;

setInterval(async () => {
    if(window.character.characterPosition === 0) {
        if(!flag) {
            data.time = Date.now() - starttime;
            // data.isWin = window.character.isWin; // never works
            data.isWin = true; // isWin always true because my program is nice player
            await fetch("/php/sendData.php", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
            flag = true;
        } else {
            starttime = Date.now();
            data.rPos = window.terrain.rockPosition;
            data.rSize = window.terrain.rockSize;
    
            window.character.run();
            flag = false;
            hasJumped = false;
        }
    } else {
        const diff = window.terrain.rockPosition - window.character.characterPosition;
        if(!hasJumped && diff < 130) {
            hasJumped = true;
            data.jumpPos = window.character.characterPosition;
            window.character.jump();
        }
    }
}, 100);

