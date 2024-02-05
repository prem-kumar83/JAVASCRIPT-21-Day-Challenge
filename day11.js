function emailValidate(inputEmail)
{
    let mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(inputEmail.match(mailformat))
    {
        console.log("Valid");

    }
    else{
        console.log("Not Valid");
    }
}
let email= prompt("Enter Email");   //take email input from user
emailValidate(email);