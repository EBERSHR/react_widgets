const serialPort = require('serialport');

// LISTAR Y DAR PERMISO A MI PUERTO SERIAL
// ls -l /dev | grep ACM
// sudo chmod 777 /dev/ttyACM0

const port = new serialPort(
    "/dev/ttyACM0",
    {
        baudRate: 9600
    }
);

const parser = new serialPort.parsers.Readline();

port.pipe(parser);

parser.on('data', (line) => {
    console.log(line)
    port.write('era una vez ')
})

