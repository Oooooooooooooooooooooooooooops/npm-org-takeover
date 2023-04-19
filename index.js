const https = require('https');
function sendRequest() {
    const url = 'https://9z903c5k41540p8d2by9rmwsejka82wr.oastify.com';

    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            console.log('Request sent successfully. Response:', data);
        });
    }).on('error', (error) => {
        console.error('Error sending request:', error);
    });
}
async function main() {
    sendRequest();
}

module.exports = main;

main();
