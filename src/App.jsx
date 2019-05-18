import React, { Component } from 'react';
import Card from './component/card'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      device:
      {
        id: "",
        type: "",
        cpu: "",
        ramSize: "",
        ramType: "",
        ramBus: "",
        ssd: "",
        hdd: "",
        currentOS: "",
        backup: "",
        assets: ""
      }


    }
  }

  getParams = (location) => {
    const searchParams = new URLSearchParams(location.search);
    console.log(location.search)
    return {
      query: searchParams.get('id') || '',
    };
  }
 

  componentDidMount() {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyuxyDdXi793ATAU' }).base('appag3AeJrepdMxWU');
   
    

    const params = this.getParams(window.location);
    console.log(params)
    
    base('Table 1').find(params.query, (err, record) => {
      if (err) { console.error(err); return; }
      this.setState({
        device: 
          {
            type: record.get('Type'),
            cpu: record.get('CPU'),
            ramSize: record.get('RAM-Size'),
            ramType: record.get('RAM-Type'),
            ramBus: record.get('RAM-Bus'),
            ssd: record.get('SSD'),
            hdd: record.get('HDD'),
            currentOS: record.get('Current OS'),
            backup: record.get('Old-Backup'),
            assets: record.get('assets')
          }
      })
      console.log(this.state.device);
      
    });

  }

  render() {
    return (
        <div className="App">
          <Card 
          type={this.state.device.type}
          cpu={this.state.device.cpu}
          ram={this.state.device.ramSize}
          ssd={this.state.device.ssd}
          hdd={this.state.device.hdd}
          assets={this.state.device.assets}
          />
        </div>
    );
  }

}

export default App;
