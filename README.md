# Dialogflow Heroku Template

Un semplice template per effettuare il deploy di un web server su [Heroku](<https://www.heroku.com/home>) già pronto per essere collegato a [Dialogflow](https://dialogflow.com/).

Il template è stato creato partendo dalla funzione presente nell'Inline Editor di Dialogflow aggiungendo il modulo [express](https://expressjs.com/it/) di nodejs per la creazione del web server.

## Utilizzo

Copiare il repository con il comando:

`git clone https://github.com/matteospada/dialogflow-heroku-template.git`

Rimuovere il repository come origine con il comando:

`git remote rm origin`

Installare i moduli necessari con il comando:

`npm install`

Procedere con il deploy tramite [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Fonte: [medium.com](https://medium.com/@antonyharfield/dialogflow-web-hooks-how-to-develop-locally-and-deploy-to-cloud-functions-48839919e998)