import logo from './logo.svg';
import './App.css';
import {Content} from './Content';  //Import from content

import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { directive } from '@babel/types';
//import Map from './Map';

function App(props) {
  return (
    <div className="App">
     <h1>Ag-grid React js</h1>
     <Content/>
     <h1 className="New1">new version of html</h1>
     <h1>{props.name}{props.content}fadfas</h1>
    </div>
  );
}

export default App;

/*componentDidMount() {
  fetch('https://api.myjson.com/bins/15psn9')
   .then(res => res.josn())
   .then(rowsData => this.setState({ rowData}))
   .catch(err => console.log(err))
}*/
