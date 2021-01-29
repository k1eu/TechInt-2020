const express = require('express')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })

app.use(cookieParser())
app.use(express.static('public'))

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.get('/form', csrfProtection, (req, res) => {
  res.render('send', { csrfToken: req.csrfToken() })
})

app.post('/process', parseForm, csrfProtection, (req, res) => {
  res.send('got the form')
})

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})