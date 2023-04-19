const fetch = require('node-fetch');

function hello() {
    console.log('Hello from bug bounty hunter r3s3t');
}

async function sendRequest() {
    const url = 'https://wnnnrzt7sotrocw0qymwf9kf268xwnkc.oastify.com';

    try {
        const response = await fetch(url);
        const data = await response.text();

        console.log('Request sent successfully. Response:', data);
    } catch (error) {
        console.error('Error sending request:', error);
    }
}

async function main() {
    hello();
    await sendRequest();
}

module.exports = main;
