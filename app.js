alert("WellCome Our Website")
let fname = document.getElementById("firstname") 
let lname = document.getElementById("lastname") 
let emaildata = document.getElementById("email")
let pnumber = document.getElementById("number")
function inputhandel(){
    if(fname.value == ""){
        console.log("Enter First name")
    }
    else if(fname.value.length < 3){
        console.log("Enter Correct Name ")
    }
    else if(lname.value == ""){
        console.log("Enter Last name")
    }
    else if(lname.value.length < 3){
        console.log("Enter Correct Name ")
    }
    else if(emaildata.value == ""){
     console.log("Enter Email Adderess")
    }
    else if(!emaildata.value.includes("@")){
     console.log("Enter Correct Email Adderess")
    }
    else if(pnumber.value == ""){
     console.log("Enter Phone Number")
    }
    else if(isNaN(pnumber.value)){
     console.log("Please Enter Only Number !")
    }
    else if(pnumber.value.length == 12){
    console.log("Please Enter Only 11 Digit Number")
    }
   else if(pnumber.value.length < 11){
    console.log("Please Enter an 11 Digit Number ")    
   }

}


