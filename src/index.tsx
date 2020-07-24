import React from "react";
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Auth, {authReducer} from "./member/Auth";
import MyPage, {memberChangerReducer} from "./member/MyPage";

const rootReducer = combineReducers({
    authReducer, memberChangerReducer
})

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <MyPage />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
