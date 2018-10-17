/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import shallowComponent from 'helpers/shallowRenderHelper';
import React from 'react';
import expect from 'expect'
import Main from 'components/Main';
import SchoolsList from 'components/SchoolsList';



describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    const props = Object.assign({
      schools: [],
      actions: {}
    })
    MainComponent = shallowComponent(Main,props);
  });

  it('should render the SchoolsList', () => {
    expect(MainComponent.type()).toBeA(Function)
  });

  it('should render a list of schools', () => {
   expect(MainComponent.find('SchoolsList').props().schools).toBeA(Array);
  });

  it('should provide the list of actions', () => {
    expect(MainComponent.props().actions).toBeA(Object)
  });
});

