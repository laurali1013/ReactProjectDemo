import Counter from '../components/counter';


import { connect } from 'react-redux';

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementActionAsync,
} from "../redux/action_creators";



export default connect((state) => ({ count: state }), {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync:createIncrementActionAsync,
})(Counter);