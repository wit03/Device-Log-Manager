import React, { Component } from 'react';
import Card from './component/card'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: false,
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



    var params = this.getParams(window.location);
    console.log(params)

    if (params.query !== "") {
      base('Table 1').find(params.query, (err, record) => {
        if (err) { console.error(err); return; }
        this.setState({
          status: true,
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
    else {
      this.setState({
        status: true,
        device:
        {
          type: "Please Scan QR Code first",
          cpu: undefined,
          ramSize: undefined,
          ramType: undefined,
          ramBus: undefined,
          ssd: undefined,
          hdd: undefined,
          currentOS: undefined,
          backup: undefined,
          assets: undefined
        }
      })
    }
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
          status={this.state.status}
        />
      </div>
    );

  }



}

export default App;
