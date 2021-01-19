import React from "react";
import './App.css';

import { BasicTable } from './Components/BasicTable';
// import {SortingTable} from './Components/SortingTable';
import { LedgerBooks } from './Components/LedgerBooks';


import Test from './Components/Test';


class App extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div>
        {/* <Test /> */}
        {/* <SortingTable /> */}
        <BasicTable />
        <LedgerBooks />
      </div>
    );
  }
  
}

export default App;
