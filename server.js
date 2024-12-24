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

// Data route with formatted response
app.get('/data', (req, res) => {
    res.json({
        result: {
            limit: 1000,
            offset: 0,
            count: 3,
            sort: "",
            results: [
                {
                    name: ':)',
                    age: '2 months',
                    occupation: 'Android Studio Application',
                    _id: 1,
                    UpdateTime: new Date().toISOString()
                }
            ]
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
