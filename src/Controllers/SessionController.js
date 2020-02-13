const User = require ('../Models/User');

module.exports = {

    index(req, res){

    },

  async  store(req, res){

    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user){
        user = await User.create({ email });
    }
    
        return res.json(user);
    },


};