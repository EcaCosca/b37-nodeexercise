const { default: axios } = require("axios");

axios.get('https://www.google.com/').then(res=>console.log(res))