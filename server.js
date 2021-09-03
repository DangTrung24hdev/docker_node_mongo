const Minio = require("minio");

var minioClient = new Minio.Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "minio-access-key",
  secretKey: "minio-secret-key",
});
// var file = "/media/dev/CODE/tu_hoc/example/demo_minio/1.jpeg";
var file = "./1.jpeg";

// Make a bucket called photos.
// minioClient.makeBucket('photos', 'us-east-1', function(err) {
//     if (err) {
//     console.log(err)
//   } else {
//     console.log('Bucket created successfully in "us-east-1".')
//   }

// });
var metaData = {
  "Content-Type": "application/octet-stream",
};
// Using fPutObject API upload your file to the bucket photos.
minioClient.fPutObject("photos", "1.jpeg", file, metaData, function (err, etag) {
  if (err) return console.log(err);
  console.log("File uploaded successfully.");
});
