import { Navigation } from 'components/Navigation'
import { Dashboard } from 'components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import { Login } from 'components/Login'
import { Signup } from 'components/Signup'
import { Vote } from './components/Vote';
import Country from 'components/Country'
import { Region } from 'components/Region'
import { Municipality } from 'components/Municipality'
import { Position } from 'components/Position'
import { Candidate } from './components/Candidate';

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
