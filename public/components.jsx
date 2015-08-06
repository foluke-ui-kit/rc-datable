/**
 * Created by shawnsandy on 6/4/15.
 */

//var React = require("react");
//var $ = require('jquery');

/**
 * webpack compiled components sample file
 */

// import the react component
import React from 'react';
//import ReactDOM from 'react-dom';
import { RcDataTable }  from '../src/libs/datatables.jsx';
//----


var cols = ['ID','First Name','Last Name'];

var colsTables = ['id','first_name','last_name'];

//render the main component
React.render(<RcDataTable cols={cols} colTables={colsTables} />, document.getElementById('component'));
