import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {setupLanguage} from "./pql-lang/setup";
import Editor from './components/Editor/Editor';
import {languageID} from './pql-lang/config';

setupLanguage();

const App = () => <Editor language={languageID}/>;

ReactDOM.render(<App/>, document.getElementById('root'));
