const {User} = require('../models');

async function getUsers(req,res){
   try {
      const users = await User.findAll();
      res.json(users);
   } catch (error) {
      console.log(error)
      res.status(500).json({message:'Server Error'})
   }
}

async function createUser(req,res){
   try {
      const { username, email, password, role } = req.body;
      console.log(req.body)
      const newUser = await User.create({username, email, password, role});
      res.json(newUser);
   } catch (error) {
      console.log(error)
      res.status(500).json({message:'Server Error'})
   }
}

async function updateUser(req, res) {
   const { id } = req.params;
   const { username, email, password, role } = req.body;
   try {
     const user = await User.findByPk(id);
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }
     await user.update({ username, email, password, role });
     res.json(user);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Server Error' });
   }
 }
 
 async function deleteUser(req, res) {
   const { id } = req.params;
   try {
     const user = await User.findByPk(id);
     if (!user) {
       return res.status(404).json({ message: 'User not found' });
     }
     await user.destroy();
     res.send();
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Server Error' });
   }
 }


module.exports ={
   getUsers,
   createUser,
   updateUser,
   deleteUser,
};