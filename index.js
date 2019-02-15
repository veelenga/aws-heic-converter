const gm = require('gm').subClass({ imageMagick: true });

const root    = process.env['LAMBDA_TASK_ROOT'];
const path    = process.env['PATH'];
const libPath = process.env['PATH'];

// change the Lambda Runtime to use pre-built binary
process.env['PATH']            = `${root}/bin:${path}`;
process.env['LD_LIBRARY_PATH'] = `${root}/lib:${libPath}`;

// convert HEIC to JPEG
exports.handler = (event, context, callback) => {
  let [ path ] = event.img.split('.');
  gm(event.img).write(`${path}.jpeg`, (err) => console.error(err));
};
