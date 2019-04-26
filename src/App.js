import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Cards from './Cards';
import Wheel from './Wheel';
import Plinko from './Plinko';
import Utils from './Utils';

function Home() {
    return (
        <div className="standup-home">
            <p>
                <a href="https://go.indeed.com/prime-standup-zoom" target="_blank" rel="noopener noreferrer">Prime Standup Zoom</a>
                <a href="https://go.indeed.com/prime-kanban-overall" target="_blank" rel="noopener noreferrer">Prime Kanban Overall</a>
            </p>
            <div className="rule">
                <span
                    className="bell"
                    role="img"
                    onClick={() => Utils.say('Time for standup')}
                    aria-label="Time for standup!">🔔</span>
            </div>
            <p>
                <Link to="/cards">Pick a Card!</Link>
                <Link to="/wheel">Spin the Wheel!</Link>
            </p>
            <p>
                <Link to="/plinko">Plinko!</Link>
            </p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/"><h1 className="nav-title">Standup</h1></Link>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/cards" component={Cards} />
                <Route path="/wheel" component={Wheel} />
                <Route path="/plinko" component={Plinko} />
            </div>
        </Router>
    );
}

export default App;
