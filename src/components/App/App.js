import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "../Header";
import NoteList from "../NoteList";

function App() {
    return (
        <Router>
            <Header />
            <main className="hero">
                <div className="hero-body">
                    <div className="container">
                        <Switch>
                            <Route exact={true} path="/">
                                <h1 className="title">Note App</h1>
                                <NoteList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </main>
        </Router>
    );
}

export default App;
