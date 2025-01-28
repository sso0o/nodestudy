const mongoose = require('mongoose');
require('dotenv').config(); // .env 파일에 있는 환경변수를 사용하기 위해 선언

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
    }
}

module.exports = dbConnect;