import { Navigation } from 'components/Navigation'
import { Dashboard } from 'components/pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { Login } from 'components/pages/login/Login'
import { Signup } from 'components/pages/signup/Signup'
import { Vote } from 'components/pages/vote/Vote';
import Country from 'components/pages/country/Country'
import { Region } from 'components/pages/region/Region'
import { Municipality } from 'components/pages/municipality/Municipality'
import { Position } from 'components/pages/position/Position'
import { Candidate } from 'components/pages/candidate/Candidate';

function App () {
  return (
    <Routes>
      <Route path='/' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Dashboard />
        </div>
      }></Route>
      <Route path='/login' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Login />
        </div>
      }></Route>
      <Route path='/signup' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Signup />
        </div>
      }></Route>
      <Route path='/vote' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Vote />
        </div>
      }></Route>
      <Route path='/country' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Country />
        </div>
      }></Route>
      <Route path='/region' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Region />
        </div>
      }></Route>
      <Route path='/municipality' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Municipality />
        </div>
      }></Route>
      <Route path='/position' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Position />
        </div>
      }></Route>
      <Route path='/candidate' element={
        <div className='App'>
          <Navigation />
          <div className='mb-3'></div>
          <Candidate />
        </div>
      }></Route>
    </Routes>
  )
}

export default App
