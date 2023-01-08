const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const https = require('https');

const app = express();
const port = 8765;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

const ActualTotalLoadRouter = require('./routes/ActualTotalLoad');
const DayAheadTotalLoadRouter = require('./routes/DayAheadTotalLoad');
const AggregatedGenerationPerTypeRouter = require('./routes/AggregatedGenerationPerType');
const ActualVsForecastRouter = require('./routes/ActualVsForecast');
const LoginRouter = require('./routes/Login');
const LogoutRouter = require('./routes/Logout');
const AdminRouter = require('./routes/Admin');
const HealthCheckRouter = require('./routes/HealthCheck');
const ResetRouter = require('./routes/Reset');

app.use('/energy/api/ActualTotalLoad', ActualTotalLoadRouter);
app.use('/energy/api/DayAheadTotalLoadForecast', DayAheadTotalLoadRouter);
app.use('/energy/api/AggregatedGenerationPerType', AggregatedGenerationPerTypeRouter);
app.use('/energy/api/ActualvsForecast', ActualVsForecastRouter);
app.use('/energy/api/Login', LoginRouter);
app.use('/energy/api/Logout', LogoutRouter);
app.use('/energy/api/Admin', AdminRouter);
app.use('/energy/api/HealthCheck', HealthCheckRouter);
app.use('/energy/api/Reset', ResetRouter);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

https.createServer({
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem'),
    passphrase: '1234'
}, app)
.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});


module.exports = app; // for testing