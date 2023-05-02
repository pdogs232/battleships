var boatRotation = 1 //Type 1 = vertical Type 2 = horizontal 
var boatPos;
var boatCount = 0
var boatNum = []
var boatNum2 = ["0","0","0","0","0"]
var bbc = 0;
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
    boatCount = boatCount + 1
    
    if (boatCount<6) {

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
    if (boatCount = 5) {
        document.getElementById("playerDiv").style.display = "none"
        document.getElementById("guessDiv").style.display = "block"
        
        for (f = 1; f<6; f++) {
            var bp = Math.floor((Math.random() * 99) + 0) //position of center cell of boat
            var bpt = bp - 10
            var bpb = bp - - 10
            var bpl = bp - 1
            var bpr = bp - - 1
            var binvalid= false
            var bboatRotation = Math.floor((Math.random() * 2) + 1)
            bbc = bbc + 1
            bp = bp.toString()

            if (bp<10){
                bp = "0"+bp
            }
        
            if (bpt<10) {
                bpt = "0" + bpt
            }
        
            if (bp<9) {
                bpl = "0" + bpl.toString()
                bpr = "0" + bpr.toString()
        
            }
                
            if (bboatRotation == 1 && (bp.substring(0, 1)!== "0") && (bp.substring(0, 1)!=="9") && binvalid == false ){
                bbNum[bbc] = bpt.toString() + bp.toString() + bpb.toString();
                bshipParameters();
            }
                
                
            if (bboatRotation == 2 && (bp.substring(1, 2)!=="9" && (bp.substring(1, 2)!=="0")) && bp!=="9" && bp!=="0" && binvalid == false){
                bbNum[bbc] = bpl.toString() + bp.toString() + bpr.toString();
                bshipParameters();
            }

            if (bboatRotation == 1 && (bp.substring(0, 1)!== "0") && (bp.substring(0, 1)!=="9") && binvalid == false ){ //vertical object 
                alert (bbNum[bbc])
        
            } else 
        
            if (bboatRotation == 2 && (bp.substring(1, 2)!=="9" && (bp.substring(1, 2)!=="0")) && bp!=="9" && bp!=="0" && binvalid == false){ // horizontal object
                alert (bbNum[bbc])
        
        
        
            } 
            else {         
                alert("invalid")
                bbNum[bbc] = null   
                bbNum2[bbc] = "0"
                bbc = bbc - 1
            
            }
            function bshipParameters(){
                for (i=1;i<bbc;i++) {
                    var y = bbNum[bbc]
                    var z = bbNum2[i]
    
                    if( y.substring(0,2) == z.substring(0,2) ){
                        binvalid = true
                    }   
    
                    else if( y.substring(0,2) == z.substring(2,4) ){
                        binvalid = true
                    }
                    
                    else if( y.substring(0,2) == z.substring(4,6) ){
                        binvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(0,2) ){
                        binvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(2,4) ){
                        binvalid = true
                    }
    
                    else if( y.substring(2,4) == z.substring(4,6) ){
                        binvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(0,2) ){
                        binvalid = true
                    }
                    else if( y.substring(4,6) == z.substring(2,4) ){
                        binvalid = true
                    }
    
                    else if( y.substring(4,6) == z.substring(4,6) ){
                        binvalid = true
                    }
    
    
                }
            }

            bbNum2[bbc] =  bbNum[bbc]
            f = bbc



        }

    }

}
   


