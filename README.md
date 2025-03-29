# Enhanced Puppeteer API Bridge

A robust solution for backend-API communication issues using Puppeteer. This service acts as a bridge between your frontend and a third-party API that has restrictions on server-to-server communication.

## Features

- **Complete Browser Automation**: Uses a full Chrome browser to make requests indistinguishable from real user requests
- **Session Management**: Maintains and reuses sessions for better performance and reliability
- **Error Handling**: Comprehensive error handling with screenshots for debugging
- **Retry Mechanism**: Exponential backoff and retry for failed requests
- **Proxy Endpoints**: Proxies all API endpoints through a consistent interface
- **Form Handling**: Special support for form submissions
- **Railway Optimized**: Configured for deployment on Railway platform

## Architecture

This solution maintains your existing architecture:

```
Frontend <-> Backend <-> API
```

The Puppeteer service is integrated into your backend and handles all communication with the external API, solving the issues you were experiencing with direct API communication.

## Getting Started

### Prerequisites

- Node.js 16 or higher
- Docker (for containerized deployment)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/granitevolition/puppeteer-solution-implementation.git
   cd puppeteer-solution-implementation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Deployment on Railway

1. Push your code to GitHub
2. Connect your GitHub repository to Railway
3. Add the following environment variables in Railway dashboard:
   - `API_BASE_URL`: URL of the external API
   - `NODE_ENV`: Set to `production`
   - `FRONTEND_URL`: URL of your frontend (for CORS)

## Integration with Existing Backend

To integrate this solution with your existing backend:

1. **Import the necessary files**:
   - `services/puppeteerService.js`
   - `services/apiClient.js`
   - `controllers/apiController.js`
   - `routes/api.js`

2. **Update your package.json** with the required dependencies

3. **Mount the API routes** in your existing Express app:
   ```javascript
   const apiRoutes = require('./routes/api');
   app.use('/api', apiRoutes);
   ```

4. **Set the environment variables** in your Railway deployment

## Usage

Once deployed, your frontend can communicate with the API bridge through your backend:

```javascript
// Example frontend code
fetch('/api/data/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### API Endpoints

- `GET /api/health`: Health check endpoint
- `POST /api/reset-sessions`: Reset all API sessions
- `POST /api/form/*`: Handle form submissions
- `ANY /api/*`: Proxy any request to the external API

## Troubleshooting

- Check the `debug` directory for screenshots of any errors
- Review logs in Railway dashboard
- Verify environment variables are set correctly

## License

MIT