import { jwtVerify } from "jose"

export const getJwtSecretKey=()=>{
    const secret = process.env.JWT_KEY!

    if(!secret || secret.length ===0){
        throw new Error('Ther environment varible JWT_SERET_KEY is not set.')
    }
    return secret
}
export const verifyAuth = async (accessToken:string)=>{
    try {
     const verified = await jwtVerify(accessToken, new TextEncoder().encode(getJwtSecretKey()))
     return verified.payload
    } catch (error) {
        return
    }

}