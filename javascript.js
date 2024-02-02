function forminput(){
    let user=document.getElementById("user").value;
    let password=document.getElementById("password").value;
    let password2=document.getElementById("password2").value;
    let mobilenumber=document.getElementById("mobilenumber").value;
    let email=document.getElementById("email").value;

// UserName

    if(user==null || user=="") {
        document.getElementById('firstname').innerHTML ="Please fill the First Name";
        return false;
    }
    if((user.length<=2) || (user.length>=20)){
        document.getElementById('firstname').innerHTML ="User length 2 to 20";
        return false
    }
    

// Password

if(Password1==null || Password1==""){
    document.getElementById('password').innerHTML ="Please fill the Password feild";
    return false;
}
if(Password1.length<=5 || Password1.length>=20){
    document.getElementById('password').innerHTML ="Password lenght must be between 5 and 20";
    return false;
}
     
}