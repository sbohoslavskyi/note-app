import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "../Header";
import NoteList from "../NoteList";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact={true} path="/">
                        <NoteList />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
