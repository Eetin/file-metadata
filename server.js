var multer = require('multer')
var express = require('express')
var path = require('path')
var fs = require('fs')

var app = express()
var upload = multer({ dest: 'uploads/', limits: { fileSize: 10500000 } }).single('file')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            var error
            if (err.code === 'LIMIT_FILE_SIZE') {
                error = 'file size limit exceeded'
            } else {
                error = 'upload error'
            }
            return res.json({ error })
        }
        res.json({ size: req.file.size })
        fs.unlink(path.join(__dirname, 'uploads', req.file.filename))
    })
})

app.listen(process.env.PORT || 8080)
