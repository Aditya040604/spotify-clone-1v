import User from "../routes/user.routes.js";

export const authCallback =  async (req, res,next) => {
    try{
        const {id, firstName , lastName, imageUrl} = req.body;
        // check if user already exists
        const user = await User.findone({clerkId: id});

        if (!user){
            //signup
            await User.create({
                clearkId: id,
                fullName : `${firstName} ${lastName}`,
                imageUrl 
            })
        }
        res.status(200).json({success: true})




    }catch (error){
        console.log("Error in auth callback", error)
        next(error)
    }
}