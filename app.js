

function randomFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

function getKeyString(x,y){
    return `${x}x${y}`;
}

(function(){
    firebase.auth().onAuthStateChanged((user)=>{
        console.log(user)
        if(user){
            playerId = user.uid
            playerRef = firebase.database().ref(`players/${playerId}`);

            playerRef.set({
                id: playerId,
                name: "John",
                direction: "left",
                color: "blue",
                x:3,
                y:5,
                coin: 0
            })
        }else{
            
        }
    })

    firebase.auth().signInAnonymously().catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
})();