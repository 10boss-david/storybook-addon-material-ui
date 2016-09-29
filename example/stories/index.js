import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';

import { muiTheme } from './../../src/';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

import greyTheme from './greyTheme.json';

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

storiesOf('Material-UI', module)
    .addDecorator(muiTheme(['Light Theme', 'Dark Theme', greyTheme]))
    .add('Card Example Controlled', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <CardExampleControlled />
        </div>
      </div>))
    .add('Raised Button Example Simple', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <RaisedButtonExampleSimple />
        </div>
      </div>))
    .add('Date Picker Example Simple', () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          <DatePickerExampleSimple />
        </div>
      </div>));

storiesOf('Without addon', module)
    .add('Text', () => (
      <p>Lorem ipsum</p>
    ));
