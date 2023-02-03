function Validate(){
    if(document.myForm.Email.value=""){
        alert("please provide your Email ID");
        document.myForm.Email.focus()
        return false
    }else if(document.myForm.Password.Value==""){
        alert("Please Provide your password");
        document.myForm.Password.focus()
        return false
    }
    else{
        return true
    }
}