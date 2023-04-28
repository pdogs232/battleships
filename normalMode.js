var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = []
var boatNum = 0


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
    //alert(boatRotation)
}


function cellClicked(tablecell){

    //alert(tablecell.id)
    var boatPos = tablecell.id //position of center cell of boat
    var boatPosTop = boatPos - 10
    var boatPosBot = boatPos - - 10
    var boatPosLef = boatPos - 1
    var boatPosRig = boatPos - - 1

    if (boatPosTop<10) {
        boatPosTop.toString()
        boatPosTop = "0" + boatPosTop
    }

    if (boatPos<8) {
        boatPosLef.toString()
        boatPosRig.toString()
        boatPosLef = "0" + boatPosLef
        boatPosRig = "0" + boatPosRig

    }

    if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9"  ) ){ //vertical object 
        //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosBot).style.backgroundColor = "grey"
        document.getElementById(boatPosTop).style.backgroundColor = "grey"

   boatCount[boatNum] = boatPosTop.toString() + boatPos.toString() + boatPosBot.toString()
   alert (boatCount[boatNum])
    boatNum++
} else 

    if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0"){ // horizontal object
    //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosLef).style.backgroundColor = "grey"
        document.getElementById(boatPosRig).style.backgroundColor = "grey"
        boatCount[boatNum] = boatPosLef.toString() + boatPos.toString() + boatPosRig.toString()
        alert (boatCount[boatNum])
        boatNum++


} else 

{ alert("invalid")}


    
   


}