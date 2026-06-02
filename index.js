const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/natal', (req, res) => { res.json({ reading: "Ulduzlar bugün sənin üçün parlaqdır!" }); });
app.listen(process.env.PORT || 5000);
