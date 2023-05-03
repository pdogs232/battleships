var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = 0
var boatNum = []
var boatNum2 = ["0","0","0","0","0"]
var botCount = 0;
var bbNum = [];
var bbNum2 = ["0","0","0","0","0"]

document.getElementById("guessDiv").style.display = "none"




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
    
    if (boatCount<5) {
        boatCount = boatCount + 1

        if (boatPosTop<10) {
            boatPosTop.toString()
            boatPosTop = "0" + boatPosTop
        }

        if (boatPos<9) {
            boatPosLeft.toString()
            boatPosRight.toString()
            boatPosLeft = "0" + boatPosLeft
            boatPosRight = "0" + boatPosRight

        }

        if (boatRotation == 1 && (boatPos.substring(0, 1)!== "0") && (boatPos.substring(0, 1)!=="9") && invalid == false ){
            boatNum[boatCount] = boatPosTop + boatPos.toString() + boatPosBottom.toString();
            shipParameters();
        }
        
        
        if (boatRotation == 2 && (boatPos.substring(1, 2)!=="9" && (boatPos.substring(1, 2)!=="0")) && boatPos!=="9" && boatPos!=="0"){
            boatNum[boatCount] = boatPosLeft + boatPos.toString() + boatPosRight;
            shipParameters();
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
            { alert("invalid")
            boatNum[boatCount] = null   
            boatNum2[boatCount] = "0"
            boatCount = boatCount - 1

        }

        function shipParameters(){
            for (i=1;i<boatCount;i++) {
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
}

function submit() {
    if (boatCount == 5) {
        //document.getElementById("playerDiv").style.display = "none"
        //document.getElementById("guessDiv").style.display = "block"
        
        for (f = 1; f<6; f++) {
            var botBoatPos= Math.floor((Math.random() * 99) + 0) //position of center cell of boat
            var botPosTop = botBoatPos- 10
            var botPosBottom = botBoatPos- - 10
            var botPosLeft = botBoatPos- 1
            var botPosRight = botBoatPos- - 1
            var bInvalid= false
            var botRotation = Math.floor((Math.random() * 2) + 1)
            botCount = botCount + 1
            botBoatPos= botBoatPos.toString()

            if (botBoatPos<10){
                botBoatPos= "0"+botBoatPos
            }
        
            if (botPosTop<10) {
                botPosTop = "0" + botPosTop
            }
        
            if (botBoatPos<9) {
                botPosLeft = "0" + botPosLeft.toString()
                botPosRight = "0" + botPosRight.toString()
        
            }
                
            if (botRotation == 1 && (botBoatPos.substring(0, 1)!== "0") && (botBoatPos.substring(0, 1)!=="9") && bInvalid == false ){
                bbNum[botCount] = botPosTop.toString() + botBoatPos.toString() + botPosBottom.toString();
                bshipParameters();
            }
                
                
            if (botRotation == 2 && (botBoatPos.substring(1, 2)!=="9" && (botBoatPos.substring(1, 2)!=="0")) && botBoatPos!=="9" && botBoatPos!=="0" && bInvalid == false){
                bbNum[botCount] = botPosLeft.toString() + botBoatPos.toString() + botPosRight.toString();
                bshipParameters();
            }

            if (botRotation == 1 && (botBoatPos.substring(0, 1)!== "0") && (botBoatPos.substring(0, 1)!=="9") && bInvalid == false ){ //vertical object 
                alert (bbNum[botCount])
                
        
            } else 
        
            if (botRotation == 2 && (botBoatPos.substring(1, 2)!=="9" && (botBoatPos.substring(1, 2)!=="0")) && botBoatPos!=="9" && botBoatPos!=="0" && bInvalid == false){ // horizontal object
                alert (bbNum[botCount])
        
        
        
            } 
            else {         
                alert("invalid")
                bbNum[botCount] = null   
                bbNum2[botCount] = "0"
                botCount = botCount - 1
            
            }
            function bshipParameters(){
                for (i=1;i<botCount+1;i++) {
                    var y = bbNum[botCount]
                    var z = bbNum2[i]
    
                    if( y.substring(0,2) == z.substring(0,2) ){
                        bInvalid = true
                    }   
    
                    else if( y.substring(0,2) == z.substring(2,4) ){
                        bInvalid = true
                    }
                    
                    else if( y.substring(0,2) == z.substring(4,6) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(0,2) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(2,4) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(4,6) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(0,2) ){
                        bInvalid = true
                    }
                    else if( y.substring(4,6) == z.substring(2,4) ){
                        bInvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(4,6) ){
                        bInvalid = true
                    } else{
                        document.getElementById(y.substring(0,2)).style.backgroundColor = "brown"
                        document.getElementById(y.substring(2,4)).style.backgroundColor = "brown"
                        document.getElementById(y.substring(4,6)).style.backgroundColor = "brown"

                    }

                   
    
    
                }

                
            }

            bbNum2[botCount] =  bbNum[botCount]
            f = botCount



        }

    }

}
   


