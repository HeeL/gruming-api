import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send({message: 'OK'});
});

router.get('/article', (req, res) => {
  res.send({message: 'OK2'});
});

router.get('/random', (req, res) => {
  res.send({message: 'OK3'});
});

export default router;
