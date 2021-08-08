import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [message, setMessage] = useState([]);

  useEffect(() => {

      loadDataInPod();
      loadDataInBrowser();
    
  })

  const loadDataInPod = async () => {
    fetch('http://springboot-k8s:8080').then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((responseJson) => {
      // Do something with the respon
      console.log(responseJson);  
      setMessage(responseJson)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const loadDataInBrowser = async () => {
    fetch('http://hello-message.com').then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((responseJson) => {
      // Do something with the respon
      console.log(responseJson);  
      setMessage(responseJson)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="App">
        <div>
        {new Date().toLocaleString() + ""} {message}
        </div>
        
    </div>
  );
}

export default App;
