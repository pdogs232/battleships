var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;


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
    alert(boatRotation)
}



function cellClicked(tablecell){
    alert(tablecell.id)
    var boatPos = tablecell.id

if (boatRotation == 1 && (boatPos.substring(1, 2)!=="0") && (boatPos.substring(1, 2)!=="9")){
    //alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 10).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -10).style.backgroundColor = "red"
   
} else 

if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(0, 1)!=="0"))){
    //alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 1).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -1).style.backgroundColor = "red"

} else 

{ alert("invalid")}


    
   


}