let pass=document.querySelector("#pass");
let check = document.querySelector("#check");
check.addEventListener("click",function(){
    if(pass.type=="password"){
        pass.type="text"
    }
    else{
        pass.type = "password"
    }
})