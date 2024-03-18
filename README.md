# okta-express-app
A simple Express Web App that integrates with Okta SDK for authentication. 

- Supports serving up public files like CSS and HTML
- Listens on PORT or 3000
- Includes basic GET and POST listeners
- Dotenv included for supporting .env files

## Usage
This template requires Node (Built on v20.11.1), Express, `dotenv`, and recommends `ngrok` if you intend to test locally.
- Open your projects folder in a terminal
- Clone repo: `git clone https://github.com/jalder89/okta-express-app.git`
- CD into work directory: `cd okta-express-app`
- Install dependencies: `npm install`
- Configure your Okta app: https://manage.auth0.com/dashboard/
- Update config with details from your Okta app
- Run app: `node app.js`
- Start forwarding: `ngrok http 3000`
