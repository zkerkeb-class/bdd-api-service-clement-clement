import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const userExists = await User.findOne({where: {email}});

    if (userExists) {
      return res.status(400).json({error: 'Email already exists'});
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({...req.body, password: hashedPassword});
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const readUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({error: 'User not found'});
  }
};

export const updateUser = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({error: 'User not found'});
    }

    if (email !== user.email) {
      const userExists = await User.findOne({where: {email}});

      if (userExists) {
        return res.status(400).json({error: 'Email already exists'});
      }
    }

    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      req.body.password = hashedPassword;
    }

    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.status(204).json({message: 'User deleted successfully'});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
