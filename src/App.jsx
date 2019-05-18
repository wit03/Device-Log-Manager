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

  componentDidMount() {
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyuxyDdXi793ATAU' }).base('appag3AeJrepdMxWU');

    base('Table 1').find('recP4zLkSmRTyRTBo', (err, record) => {
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
      console.log(this.props.location)
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
