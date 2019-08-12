const path = require('path');

module.exports = {
    watch: true,
    entry: ['./JS/App.js'], 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'JS')
    }
};