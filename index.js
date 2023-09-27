require('dotenv').config();
const port = process.env.PORT 
const api = require('./api');
api.listen(port, () =>{

 console.log(`Listening on port ${port}`);
});
