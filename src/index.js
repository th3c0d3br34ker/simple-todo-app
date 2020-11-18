import './styles.css';

import React from 'react';
import TodoApp from './components/todoApp.jsx';
import { render } from 'react-dom';

const wrapper = document.getElementById('main');

render(<TodoApp />, wrapper);
