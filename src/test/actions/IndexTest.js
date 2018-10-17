/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import expect from 'expect'
import {ADD_SCHOOL,DELETE_SCHOOL} from '../../main/actions/const';
import * as actions from '../../main/actions'


describe('schools actions', () => {
  it('addSchool should create ADD_SCHOOL action', () => {
    expect(actions.addSchool('Use Redux')).toEqual({
      school: 'Use Redux',
      type: ADD_SCHOOL
    })
  })

  it('deleteSchool should create DELETE_SCHOOL action', () => {
    expect(actions.deleteSchool(1)).toEqual({
      school: 1,
      type: DELETE_SCHOOL
    })
  })

})
