import supabase from '../../db/supabaseConnection.js'
import cookieParser from 'cookie-parser';

const checkAuthentication = async (req, res, next) => {
    cookieParser()(req, res, () => {});

    if(req.headers.cookie){
        const dbLoginToken = await supabase
            .from('credentials')
            .select()
            .eq('login_token', req.cookies.login_token);
        if(dbLoginToken.error){
            //Failure - Not Authenticated
            console.log(dbLoginToken.error)
            console.log("Testing purposes - Failure for authentication")
        }
        next()
    }
}

export default checkAuthentication;
