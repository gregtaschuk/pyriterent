import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import Tool from './Tool.jsx'
import Tag from './Tag.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tools/:cardKeyHash" element={<Tool />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="/tag/:uid" element={<Tag />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
