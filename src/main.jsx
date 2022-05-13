import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rafael from './componentes/people/rafael'
import Amanda from './componentes/people/amanda'
import Jorge from './componentes/people/jorge'
import Ana from './componentes/people/ana'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='rafael' element={<Rafael/>}/>
      <Route path='amanda' element={<Amanda/>}/>
      <Route path='jorge' element={<Jorge/>}/>
      <Route path='ana' element={<Ana/>}/>
    </Routes>
  </BrowserRouter>
)
