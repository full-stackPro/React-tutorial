import * as action from './const';

export function addSchool(school){
        return {
           school:school,
           type:action.ADD_SCHOOL
        };
    }

export function deleteSchool(school){
        return {
           school:school,
           type:action.DELETE_SCHOOL
        };
    }

