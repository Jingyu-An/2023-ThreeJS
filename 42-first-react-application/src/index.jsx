import './style.css'
import {createRoot} from 'react-dom/client'
import App from "./App.jsx";

const root = createRoot(document.querySelector('#root'))

root.render(
  <App clickersCount={4}>
    <h1>Hello World</h1>
    <p>React is awesome!</p>
  </App>
)