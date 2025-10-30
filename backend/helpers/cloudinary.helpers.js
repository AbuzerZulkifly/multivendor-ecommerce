const cloudinary = require('cloudinary').v2
const multer = require('multer')

cloudinary.config({
  cloud_name: "dvthttxa2",
  api_key: "381475891792883",
  api_secret: "x9DUhSbt9IlY9z74Wxbx53g_f0M",
  
})
const storage = multer.memoryStorage();
const upload = multer({ storage });

async function imageUploadUtils(fileBuffer) {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(fileBuffer);
    });
    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
}

module.exports = { upload, imageUploadUtils };
