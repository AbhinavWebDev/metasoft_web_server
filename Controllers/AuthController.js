import UserModel from "../Models/UserModal.js";
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
    const { username, password } = req.body

    //    >>>>> if user Detials stored in data base then can use this code <<<<<
    // try {
    //     const user = await UserModel.findOne({ userName: username })

    //     if (user) {
    //         const validity = (password===user.password)


    //here i am creating a pre-defined user data for login purpose

    const preuser = {

        DBusername: 'user@gmail.com',
        DBpassword: '1234'
    }

    try {
        const user = (username === preuser.DBusername)

        if (user) {
            const validity = (password === preuser.DBpassword)
            if (!validity) {
                res.status(400).json({'Message':'Wrong Password'})
            }
            else {
                const token = jwt.sign({
                }, process.env.JWT_KEY, { expiresIn: "1h" })
                res.status(200).json({ username, token })
            }
        }
        else {
            res.status(404).json('user does not exists')
        }
    } catch (error) {

    }
}

