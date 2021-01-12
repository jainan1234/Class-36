class Player {

constructor(){

}

//read the playerCount value from the database
getCount(){
    database.ref("playerCount").on("value",function(data){
        playerCount = data.val()
    })
}

//write the playerCount value to the database 
updateCount(count){
    database.ref("/").update({
        playerCount: count
    })
}

//write the player name  to the database 
updateInfo(name){
    database.ref("player"+playerCount).set({
        name: name
    })
}

}