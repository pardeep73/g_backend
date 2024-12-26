import jwt from 'jsonwebtoken';

export const isAunthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        console.log('Token From Authentication',req.cookies);
        if(!token){
            return res.json({
                status:400,
                message:'user not Authenticated',
                success:false
            })
        }

        const decode = await jwt.verify(token,process.env.SECRET_KEY)
        if(!decode){
            return res.json({
                status:400,
                success:false,
                message:'Not Valid User'
            })
        }

        console.log("this is decode", decode)

        req.id = decode.userId;
        console.log("authenticated user id",req.id);
        next();
    } catch (error) {
        console.log(error)
    }
}