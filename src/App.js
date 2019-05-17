import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      device: [

        {
          type: "",
          cpu: "",
          ramSize: "",
          ramType: "",
          ramBus: "",
          ssd: "",
          hdd: "",
          currentOS: "",
          backup: ""
        }
      ]
    }
  }
  
  componentDidMount() {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyuxyDdXi793ATAU' }).base('appag3AeJrepdMxWU');

    base('Table 1').find('recP4zLkSmRTyRTBo', (err, record) => {
      if (err) { console.error(err); return; }
      this.setState({
        device: [
          {
            type: record.get('Type'),
            cpu: record.get('CPU'),
            ramSize: record.get('RAM-Size'),
            ramType: record.get('RAM-Type'),
            ramBus: record.get('RAM-Bus'),
            ssd: record.get('SSD'),
            hdd: record.get('HDD'),
            currentOS: record.get('Current OS'),
          }
        ]
      })
      console.log(this.state.device);
    });

  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }

}

export default App;
