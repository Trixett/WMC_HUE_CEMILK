'use strict';


function generatePassword(length=10, sonderzeichen=false){
    let pass ='';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsWithS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?/|~';

    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);
    for (let index = 0; index < length; index++) {
        if(sonderzeichen)
        pass += charsWithS[randomValues[index]%charsWithS.length];
        else
        pass += chars[randomValues[index]%chars.length];   
    }
    return pass;
}
module.exports  = generatePassword;
