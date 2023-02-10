import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/index.scss'
import Router from './router/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  ,
)
