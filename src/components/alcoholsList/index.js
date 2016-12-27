import React, { Component } from 'react';
import alchagols from './alcohols.json';

export default class AlcoholsList extends React.Component {

  render() {
    console.log(alchagols)
    return (
      <div>
        {
          alchagols.map((item, key) => <p key={key}>{item.name}</p>)
        }
      </div>
    )
  }
}
