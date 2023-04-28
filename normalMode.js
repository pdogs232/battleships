var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = 0
var boatNum = []
var boatNum2 = []


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
    var boatPosBottom = boatPos - - 10
    var boatPosLeft = boatPos - 1
    var boatPosRight = boatPos - - 1
    var invalid = false
    boatCount = boatCount + 1
   boatNum[boatCount] = boatPosTop + boatPos.toString() + boatPosBottom.toString()
   boatNum[boatCount] = boatPosLeft + boatPos.toString() + boatPosRight

    if (boatPosTop<10) {
        boatPosTop.toString()
        boatPosTop = "0" + boatPosTop
    }

    if (boatPos<8) {
        boatPosLeft.toString()
        boatPosRight.toString()
        boatPosLeft = "0" + boatPosLeft
        boatPosRight = "0" + boatPosRight

    }

    shipParamiters()

    if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){ //vertical object 
        //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosBottom).style.backgroundColor = "grey"
        document.getElementById(boatPosTop).style.backgroundColor = "grey"


   alert (boatNum[boatCount])




} else 

    if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0"){ // horizontal object
    //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosLeft).style.backgroundColor = "grey"
        document.getElementById(boatPosRight).style.backgroundColor = "grey"
        boatNumt[boatCount] = boatPosLeft + boatPos.toString() + boatPosRight
        alert (boatNum[boatCount])



} else 
    { alert("invalid")}


    function shipParamiters(){
        for (i=0;i<5;i++) {
            var q = boatNum[boatCount]
            var x = boatNum2[i]
            if (boatNum[boatCount] == boatNum2[i]) {
                invalid = true
            }
            else if( q.substring(0,2) == x.substring(4,6)){
                invalid = true
            }



        }
    }

    boatNum2[boatCount] =  boatNum[boatCount]


    
   


}