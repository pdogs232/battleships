var boatType = 0 //Type 1 = vertical Type 2 = horizontal Type 3 = L shape



function cellClicked(tablecell){

if (boatType == 1){
    alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 10).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -10).style.backgroundColor = "red"
   
}

if (boatType == 2){
    alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 1).style.backgroundColor = "red"
    document.getElementById(tablecell.id - -1).style.backgroundColor = "red"
}

if (boatType == 3){
    alert(tablecell.id)
    document.getElementById(tablecell.id).style.backgroundColor = "red"
    document.getElementById(tablecell.id - 10).style.backgroundColor = "red"
    document.getElementById(tablecell.id + 10).style.backgroundColor = "red"
}
    
   


}