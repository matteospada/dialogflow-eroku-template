# Dialogflow Heroku Template 🤖

Un semplice template per effettuare il deploy di un web server su [Heroku](<https://www.heroku.com/home>) già pronto per essere collegato a [Dialogflow](https://dialogflow.com/).

Il template è stato creato partendo dalla funzione presente nell'Inline Editor di Dialogflow aggiungendo il modulo [express](https://expressjs.com/it/) di nodejs per la creazione del web server.

## Utilizzo

Copiare il repository con il comando:

`git clone https://github.com/matteospada/dialogflow-heroku-template.git`

Spostarsi nel repository appena scaricato:

`cd dialogflow-heroku-template`

Rimuovere il repository come origine con il comando:

`git remote rm origin`

Installare i moduli necessari con il comando:

`npm install`

## Basic Auth

Questo template include già la possibilità di impostare un'autenticazione di tipo base per verificare che le richieste provengano effettivamente da Dialogflow. L'autenticazione può essere impostata direttamente dalla sezione Fulfillment. 

Impostata l'autenticazione su Dialogflow procedere settando le variabili su Heroku tramite il comando:

`heroku config:set USERNAME=dialogflow_user`
`heroku config:set PASSWORD=dialogflow_password`

## Test

Per testare il web server prima di procedere con il deploy è possibile utilizzare il modulo ngrok già disponibile tra le dipendenze del progetto tramite il comando:

`npm run tunnel`

## Deploy

Procedere con il deploy tramite [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Fonte: [medium.com](https://medium.com/@antonyharfield/dialogflow-web-hooks-how-to-develop-locally-and-deploy-to-cloud-functions-48839919e998)
