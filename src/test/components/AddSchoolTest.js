/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import shallowComponent from 'helpers/shallowRenderHelper';
import React from 'react';
import expect from 'expect'
import AddSchool from 'components/AddSchool';


describe('AddSchool', () => {
  let AddSchoolComponent;
  let props;
  beforeEach(() => {
    props = Object.assign({
      schools: [],
      actions: {
        addSchool: expect.createSpy()
      }
    });
    AddSchoolComponent = shallowComponent(AddSchool,props);
  });

  it('should render the form to add a school', () => {
    expect(AddSchoolComponent.type()).toBe('form');
  });

  it('should have a form className', () => {
    expect(AddSchoolComponent.hasClass('form')).toBe(true);
  });

  it('should addSchool on submit', () => {
    let button = AddSchoolComponent.find('form');

    button.simulate('submit', { preventDefault(){} });
    expect(props.actions.addSchool).toHaveBeenCalled();
  })

});
