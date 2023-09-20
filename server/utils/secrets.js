import dotenv from "dotenv"

dotenv.config({path:'./.env'});

export const {
    PORT,
    MONGO_URL,
    MONGO_DATABASE,
    MONGO_PASSWORD
} = process.env;

const requiredCredentials = [
    'PORT',
    'MONGO_URL',
]
//Kiểm tra env xem trong env có biến hay không 
for(const Credentials of requiredCredentials){
    if(!process.env[Credentials]){
        console.log(Error)
        process.exit(1);
    }
}
