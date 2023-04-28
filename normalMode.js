var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = 0
var boatNum = []
var boatNum2 = ["0","0","0","0","0"]




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
    var p = 0
    boatCount = boatCount + 1
    
    if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){
        boatNum[boatCount] = boatPosTop + boatPos.toString() + boatPosBottom.toString();
        shipParamiters();
    }
    
    
    if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0"){
        boatNum[boatCount] = boatPosLeft + boatPos.toString() + boatPosRight;
        shipParamiters();
    }

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


    if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){ //vertical object 
        //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosBottom).style.backgroundColor = "grey"
        document.getElementById(boatPosTop).style.backgroundColor = "grey"


   alert (boatNum[boatCount])




} else 

    if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0" && invalid == false){ // horizontal object
    //alert(tablecell.id)
        document.getElementById(boatPos).style.backgroundColor = "grey"
        document.getElementById(boatPosLeft).style.backgroundColor = "grey"
        document.getElementById(boatPosRight).style.backgroundColor = "grey"
        alert (boatNum[boatCount])



} else 
    { alert("invalid")}


    function shipParamiters(){
        for (i=0;i<5;i++) {
            var q = boatNum[boatCount]
            var x = boatNum2[i]

  
             if( q.substring(0,2) == x.substring(0,2) ){
                invalid = true
            }   

            else if( q.substring(0,2) == x.substring(2,4) ){
                invalid = true
            }
            
            else if( q.substring(0,2) == x.substring(4,6) ){
                invalid = true
            }

            else if( q.substring(2,4) == x.substring(0,2) ){
                invalid = true
            }

            else if( q.substring(2,4) == x.substring(2,4) ){
                invalid = true
            }

            else if( q.substring(2,4) == x.substring(4,6) ){
                invalid = true
            }

            else if( q.substring(4,6) == x.substring(0,2) ){
                invalid = true
            }
            else if( q.substring(4,6) == x.substring(2,4) ){
                invalid = true
            }

            else if( q.substring(4,6) == x.substring(4,6) ){
                invalid = true
            }


        }
    }

    boatNum2[boatCount] =  boatNum[boatCount]


    
   


}