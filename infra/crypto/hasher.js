import { createHash } from 'crypto'

export function generatePasswordSet(password){
    const salt = generateSalt();
    const passwordSet = {
        hashed: generateHashedPassword(password, salt),
        salt: salt,
    }
    return passwordSet;
}

export function generateHashedPassword(unhashed_password, salt){
    const hashed_password = createHash('sha256').update(unhashed_password + salt).digest('hex');
    return hashed_password;
} 


function generateSalt(){
    const saltLength = 30;
    const availableCharacters = ['a','c','e','g','i','k','m','o','q','s','u','w',
       'x','z','2','4','6','8','0','@','$','^','*'];
    let output = '';

    for(let i = 0; i < saltLength; i++){
        const randomCharacterIndex = 
            Math.floor(Math.random() * availableCharacters.length);
        output += availableCharacters[randomCharacterIndex];
    }
    return output;
}

export default {
    generatePasswordSet,
    generateHashedPassword 
}

