import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PlayContext from './Contexts/PlayContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlayContext>
    <App />
  </PlayContext>
)
