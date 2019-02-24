const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Connection_to_DB URL
const MongoDB_URL = 'mongodb://localhost:27017';

//Database Name
const dbName = 'my-contacts-db';

//Establishing connection between the server and the db
MongoClient.connect(MongoDB_URL, (err, client) => {
    assert.equal(err, null, 'Data base connection has failed');
    console.log('Data base is connected successfully to the server');
    const db = client.db(dbName);

    // API Main Page
    app.get('/', (req, res) => {
        res.send('Welcome to this contacts manager API !')
    })

    // Add a contact
    app.post('/add_contact', (req, res) => {
        const {body} = req;
        db.collection("contacts").insertOne(body, (err, data) => {
            if (err) res.status(400).send("error the contact has not been added")
            else res.send("The contact has been added successfully")
        })
    })

    // Fetch all contacts
    app.get('/contacts', (req, res) => {
        db.collection("contacts")
          .find()
          .toArray((err, data) => {
              if (err) res.status(404).send("could not fatch contacts")
              else res.send(data);
          })
    })

    // Fetch one specific contact
    app.get("/one_contact/:id", (req, res) => {
        const { id } = req.params;
        db.collection("contacts").findOne({ _id: ObjectID(id) }, (err, data) => {
          if (err) {
            res.status(404).send("could not fetch the contact");
          } else {
            res.send(data);
          }
        });
      });

      // Modify one contact
      app.put('/modify_contact/:id', (req, res) => {
        const {id} = req.params;
        const {body} = req;
        db.collection('contacts').findOneAndUpdate({_id: ObjectID(id)}, {$set: {...body}}, (err, data) => {
          if (err) {
            res.status(400).send('No the contact was not modified.' )
            console.log('No the contact was not modified. Error : ',err )
          }
          else res.send('the contact was successfully modified')
        })
      });

      // Remove one contact
      app.delete('/delete_contact/:id', (req, res) => {
        const {id} = req.params;
        db.collection('contacts').findOneAndDelete({_id: ObjectID(id)}, (err, data) => {
          if (err) res.status(400).send('failed to delete contact')
          else res.send('the contact was successfully deleted')
        })
      })

})



const port = 4000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))