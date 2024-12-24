const express = require('express');
const app = express();

app.use(express.json());

// Root route handler
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Android App API',
        available_endpoints: [
            {
                path: '/data',
                method: 'GET',
                description: 'Returns sample data'
            }
        ]
    });
});

// Existing data route
app.get('/data', (req, res) => {
    res.json({
        status: 'success',
        data: {
            name: ':)',
            age: '2 months',
            occupation: 'Android Studio Application'
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
