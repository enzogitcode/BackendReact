import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'profile') {
      cb(null, './src/public/imgs/profile')
    }
    else if (file.fieldname === 'documents') {
      cb(null, './src/public/imgs/documents')
    }
    else if (file.fieldname === 'products') {
      cb(null, './src/public/imgs/products')
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === 'profile') {
      const originalExtension = file.originalname.split('.').pop();
      const newFilename = `profile.${originalExtension}`.toLowerCase;
      cb(null, file.filename = newFilename);
    }
    else if (file.fieldname === 'documents') {
      cb(null, file.filename = file.originalname.toLowerCase())
    }
    else {
      cb(null, file.originalname)
    }
  }
})

export const uploader = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'documents') {
      const allowedNames = ['identificacion', 'comprobante de domicilio', 'comprobante de estado de cuenta'];
      const allowedExtensions = /jpeg|jpg|png|gif|pdf|doc|docx/;

      const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
      const basename = path.basename(file.originalname, path.extname(file.originalname));

      if (allowedNames.includes(basename) && extname) {
        cb(null, true);
      }
      else {
        cb(new Error('Solo se permite subir archivos llamados "identificacion", "comprobante de domicilio" o "comprobante de estado de cuenta" con extensiones válidas en el campo "documents"'));
      }
    }
  }
})
