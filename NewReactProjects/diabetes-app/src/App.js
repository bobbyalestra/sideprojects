import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          New Diabeatus App
        </p>
    



      </header>
    </div>
  )
};

{/* init project */}
const express = require('express'); // the library we will use to handle requests. import it here
const app = express(); // instantiate express
app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').json()) // When someone sends something to the server, we can recieve it in JSON format

{/*// base route. Responds to GET requests to the root route ('/') */}
app.get("/", (req, res) => {
  res.send("Home sweet home 🏚") // always responds with the string "TODO"
});

{/*// base route. Responds to POST requests to the root route */}
app.post("/", (req, res) => {
  res.send("Sending it through the post 📬") // always responds with the string "TODO"
});

{/*/ Responds to PUT requests to the root route */}
app.put("/", (req, res) => {
  res.send("Don't you dare put me up to this.") // always responds with the string "TODO"
})


{/*/ listen for requests on port 4567 */}
const port = 4567;
var listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});



export default App;
