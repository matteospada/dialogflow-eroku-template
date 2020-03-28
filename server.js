const express = require('express')
const { WebhookClient } = require('dialogflow-fulfillment')
const basicAuth = require('express-basic-auth')

const app = express()

//======== AUTENTICAZIONE DELLA RICHIESTA ========

app.use(basicAuth({
  users: { [process.env.USERNAME]: process.env.PASSWORD },
  unauthorizedResponse: getUnauthorizedResponse
}))

function getUnauthorizedResponse(req) {
  return req.auth
    ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
    : 'No credentials provided'
}

//================================================

app.get('/', (req, res) => res.send('online'))
app.post('/dialogflow', express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res })

  function welcome() {
    agent.add('Ciao dal web server Heroku!')
  }



  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  agent.handleRequest(intentMap)
})


app.listen(process.env.PORT || 8080)