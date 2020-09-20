import {createStore} from 'redux';
import peoplereducer from '../reducer/peoplereducer';


const store=createStore(peoplereducer);
export default store;
