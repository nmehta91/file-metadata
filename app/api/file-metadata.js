'use strict'

var multer  = require('multer');
var upload = multer({ dest: process.cwd() + '/public/' });

module.exports = function(app) {
    
    app.post('/upload', upload.single('fileToUpload'), function(req, res, next){
        // res.send(req.file.size);
        console.log(req.file.size);
        var obj = {
          "file size": req.file.size  
        };
        res.send(JSON.stringify(obj));
    });

    
};