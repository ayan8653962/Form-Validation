alert("WellCome Our Website")
function inputhandel(){
    let input = document.getElementsByClassName("inputname")[0].value
    if(input == ""){
        document.write("Enter First Name ")
    }
    else if(input.length > 3){
        document.write("Enter Correct Name ")
    }
    else{
        document.write("Invalid Name")
    }
}
inputhandel()

