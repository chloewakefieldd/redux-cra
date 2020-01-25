import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { click } from './actions/click'

function App({onClick}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClick}>Click me</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(click())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
