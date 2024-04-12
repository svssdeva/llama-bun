/* @refresh reload */
import { lazy } from 'solid-js';
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import './index.css'
import App from './App'
const Chat = lazy(() => import('./pages/chat'));
const NotFound = lazy(() => import('./pages/404'));

const root = document.getElementById('root')

// render(() => <App />, root!)

render(() => (
    <Router root={App}>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={App} />
        <Route path="*404" component={NotFound} />
    </Router>
), root!);
