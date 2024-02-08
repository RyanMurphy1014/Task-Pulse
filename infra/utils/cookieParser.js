function getValueOfCookie(cookieName, cookiesFromReq) {
    const cookiesList = cookiesFromReq.split('; ');
    for(const cookie of cookiesList){
        const [name, value] = cookie.split('=');
        if(name.trim() === cookieName){
            return value;
        }
    }
    throw new Error('Cookie does not exsist')
}

export default getValueOfCookie
