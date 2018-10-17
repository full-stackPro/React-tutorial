import * as ActionType from '../actions/const';

const initialState = [
  {name: 'Lovedale', tagline: 'A wonderful school'},
  {name: 'Bishop', tagline: 'An awesome school'},
  {name: 'Daffodils', tagline: 'An excellent school'}]


export default function shools(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_SCHOOL:
      return [
        {
          name: action.school.name,
          tagline: action.school.tagline
        },
        ...state
      ]


    case  ActionType.DELETE_SCHOOL:
      return state.filter(school =>
        school.name !== action.school.name
      )

    default:
      return state;

  }

}
