
const isEmail = (email)=>{
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

const isPassword = (password)=>{
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

const isRepassword = (password, repassword)=>{
    return repassword === password;
}


export const isValid=(Email, Password)=>{
    if(!isEmail(Email)){
        return "Invalid email";
    }
    if(!isPassword(Password)){
        return "Invalid password";
    }
    return  null;

}


export const signUpValidation = (email, password, repassword)=>{
    if(!isEmail(email)){
        return "Invalid email!"
    }
    if(!isPassword(password)){
        return "Invalid password!"
    }
    if(!isRepassword( password, repassword )){
        return "Password not matched!"
    }
}
