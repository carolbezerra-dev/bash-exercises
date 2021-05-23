const express = require('express');
const router = express.Router();

const { Campaign, Product, CampaignProduct } = require('../models');

router.get('/', async (_req, res) => {
  const campaigns = await Campaign.findAll();

  res.status(200).json(campaigns);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const campaign = await Campaign.findByPk(id, {
    include: { model: Product, as: 'Products', through: { attibutes: [] } },
  });

  res.status(200).json(campaign);
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  const campaign = await Campaign.create({ name });

  res.status(200).json(campaign);
});

router.post('/:id/add-product', async (req, res) => {
  const { productId } = req.body;
  const { id } = req.params;

  const product = await Product.findByPk(productId);
  const campaign = await Campaign.findByPk(id);

  await campaign.addProduct(product);

  // await CampaignProduct.create(productId, id) // também funcionaria

  res.status(200).json(campaign);
});

module.exports = router;
