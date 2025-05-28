import app from "./app";
import http from "node:http"
import { config } from './config/env';



app.set("port", config.PORT) // set port

const server = http.createServer(app); //create server

server.listen(config.PORT); // listen server
server.on("listening", onListening) 
server.on("error", onError)



function onListening() {
    var addr: any = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);

}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind =  'Port' + config.PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}