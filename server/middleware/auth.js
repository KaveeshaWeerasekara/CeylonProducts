const jwt=require('jsonwebtoken')

JWT_SECRET="Kk7Bpyfvq9Dd4huGWK2yLKPnmGPktX8pr7VczdVTupuHshzrRN";

//create a middleware
const auth=(req,res,next)=> {
    const token=req.header('x-access-token');

    if(!token){
        return res.status(406).json({err:"no authentication token, autherization denied"})
    }


    const verified=jwt.verify(token,JWT_SECRET)

    if(!verified)
        return res.status(406).json({err:"Token verification failed, authorization denied"})

    req.user_id=verified.id;
    next()
}




module.exports=auth