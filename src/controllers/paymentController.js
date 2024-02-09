import Payment from '../models/Payment.js';

export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    res.status(200).json(payment);
  } catch (error) {
    res.status(404).json({error: 'Payment not found'});
  }
};

export const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: {user_id: req.params.userId},
    });
    res.status(200).json(payments);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({error: 'Payment not found'});
    }
    await payment.update(req.body);
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({error: 'Payment not found'});
    }
    await payment.destroy();
    res.status(204).json({message: 'Payment deleted successfully'});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
