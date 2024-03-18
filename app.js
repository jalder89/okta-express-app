import 'dotenv/config';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import utils from './javascript/utils.js';
import auth0 from 'express-openid-connect'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { auth, requiresAuth } = auth0;
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: 'https://0467-2601-201-8d04-c70-6c1b-be15-847-2e3.ngrok-free.app',
    clientID: 't6rhqLhVxBi7AJDdjaUAVuwlEPyBLKGA',
    issuerBaseURL: 'https://dev-ymlszm0pwwnjfm2m.us.auth0.com'
};

const app = express();
app.use(express.static('public'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
// req.isAuthenticated is provided from the auth router
app.use(auth(config));
app.get('/', async (req, res) => {
    if (req.oidc.isAuthenticated()) {
        res.sendFile(path.join(__dirname, 'pages/home.html'));
    } else {
        res.sendFile(path.join(__dirname, 'pages/index.html'));
    }
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(Number(process.env.PORT || 3000), () => {
    console.log(`Server listening on port: ${process.env.PORT || 3000}`);
});