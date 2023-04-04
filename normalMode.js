var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal Type 3 = L shape


document.addEventListener("keydown", function (e){
    if (e.keyCode === 82) {
        rotateShip();
        
    }
});

function rotateShip(){
    if (boatRotation !== 1 ){
        boatRotation = 1
    } else{
        boatRotation = 2
    }
}



function cellClicked(tablecell){

if (boatRotation == 1){
    //alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 10).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -10).style.backgroundColor = "red"
   
}

if (boatRotation == 2){
    //alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 1).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -1).style.backgroundColor = "red"
}

if (boatRotation == 3){
    //alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 10).style.backgroundColor = "red"
    document.getElementById(tablecell.id + 10).style.backgroundColor = "red"
}
    
   


}