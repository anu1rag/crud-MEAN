// const multer = require('multer');
// const aws = require('aws-sdk');
// const multerS3 = require('multer-s3');

// let s3 = new aws.S3({

// })

// let SPACES_ENDPOINT = 'https://staging-dhwani.s3.ap-south-1.amazonaws.com'
// aws.config.update({
//     accessKeyId: 'AKIAJGNIQMDDQLEKQTJQ',
//     secretAccessKey: process.env.SPACES_ACCESS_KEY,
//   });
// module.exports = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'child',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })