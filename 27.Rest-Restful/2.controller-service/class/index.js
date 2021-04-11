const express = require("express");
const songRoutes = require('./routes/songRoutes');

const app = express();

app.use(express.json());
app.use(songRoutes);

app.listen(3001, () => {
	console.log("Ouvindo a porta 3001!");
});
