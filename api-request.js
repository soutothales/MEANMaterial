/**
 * Created by Treinamento Xiaomi on 25/11/2016.
 */

'use strict';


const http = require("http");


const options = {

    host: 'api.redtube.com'
    , path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'

};


function callback(response) {

    console.log('STATUS' + response.statusCode);
    console.log('HEADERS' + JSON.stringify());

    let data = '';


    response.setEncoding('utf8');
    response.on('data', (chunk) => {

        data += chunk;

    });

    response.on('end', () => {

        console.log('Dados finalizados: ', data);

    });

}


const request = http.request(options, callback);

request.on('error', (e) => {

    console.log('ERRO: ' + e.message);

});

request.end();

