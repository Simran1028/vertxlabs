import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard'
import Analytics from './assets/pages/Analytics'
import Dealroom from './assets/pages/Dealroom'
import Connect from './assets/pages/Connect'
import Profile from './assets/pages/Profile/Profile'
import Settings from './assets/pages/Settings'
import Overview from './assets/pages/Profile/Overview'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/dealroom" element={<Dealroom />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
