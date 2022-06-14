
import React from 'react';
import { createClient } from 'contentful';
import './App.css';
import Header from './Header';
import Main from './Main';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import IntroBlock from './components/IntroBlock';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Test from './testenContenful/Test100';
import Trades from './contentBlocks/Trades';

import HomepageContenBlock1 from './contentBlocks/Homepage_1';
import HomepageContenBlock2 from './contentBlocks/Homepage_2';
import HomepageContenBlock3 from './contentBlocks/Homepage_3';
import SolutionContenBlock1 from './contentBlocks/Solution_1';
import SolutionContenBlock2 from './contentBlocks/Solution_2';
import SolutionContenBlock3 from './contentBlocks/Solution_3';
import Homepage from './pages/Homepage';

import Homepage from './contentBlocks/Homepage';
import Solution from './contentBlocks/Solution';
import Solution2 from './contentBlocks/Solution2';


export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <header className='header'>
          {/* <Navbar/> */}
        </header>
        <main className='main'>
          {/* <IntroBlock/> */}
        </main>

       <Homepage/>

        {/* <Test/> */}
        {/* <Trades/>  */}
        {/* <Homepage/> */}
       <Solution2/>

      </Router>
    );
  }
}
