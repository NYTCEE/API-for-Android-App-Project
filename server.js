const express = require('express');
const app = express();

app.use(express.json());

// 定義一個 GET 路由
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

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
