import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.post('/api/v1/test', async (req, res) => {
    res.status(200).send(
        {
            "status": "ok",
            "description": "Test POST received"
        }
    );
});

app.listen(Number(process.env.PORT || 3000), () => {
    console.log(`Server listening on port: ${process.env.PORT || 3000}`);
});