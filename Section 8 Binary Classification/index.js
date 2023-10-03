const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static('public')); // Replace 'public' with the directory where kc_house_data.csv is stored

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
