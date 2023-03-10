import {combineReducers} from 'redux'
import { age, fname, gender, lname, profession } from './reducer'

export const reducers = combineReducers({
    firstName: fname,
    lastName: lname,
    age: age,
    gender: gender,
    profession: profession
})