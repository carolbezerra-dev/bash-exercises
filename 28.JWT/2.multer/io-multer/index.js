require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/envios'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'envios');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }});

const upload = multer({ storage });
// const upload = multer({ dest: 'uploads' });
// const enviar = multer({ dest: 'envios' });
const enviar = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>
res.status(200).json({ body: req.body, file: req.file }));

app.get('/ping', controllers.ping);

app.post('/arquivo/envios', enviar.single('arquivo'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })); // deu bom

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
