import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  thStyle = {
    fontSize: "14pt",
    backgroundColor: "blue",
    color: "white",
    width: "50px"
  };
  tdStyle = {
    fontSize: "14pt",
    backgroundColor: "white",
    color: "darkblue",
    padding: "5px 10px",
    border: "1px solid lightblue",
    minWidth: "300px"
  };
  dateStyle = {
    fontSize: "14pt",
    backgroundColor: "white",
    color: "darkblue",
    padding: "5px 10px",
    border: "1px solid lightblue",
    width: "80px"
  };

  render() {
    let d = this.props.value.created;
    let f = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return (
      <tr>
        <th style={this.thStyle}>No. {this.props.index}</th>
        <td style={this.tdStyle}>{this.props.value.message}</td>
        <td style={this.tdStyle}>{f}</td>
      </tr>
    );
  }
}

export default connect()(Item);