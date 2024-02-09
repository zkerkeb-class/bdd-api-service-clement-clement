import express from 'express';
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import {
  createPayment,
  getPayment,
  getUserPayments,
  updatePayment,
  deletePayment,
} from '../controllers/paymentController.js';

const router = express.Router();

//USER
router.post('/user', createUser);
router.get('/user/:id', readUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

//PAYEMENT
router.post('/payment', createPayment);
router.get('/payment/:id', getPayment);
router.get('/user/:userId/payments', getUserPayments);
router.put('/payment/:id', updatePayment);
router.delete('/payment/:id', deletePayment);

export default router;
