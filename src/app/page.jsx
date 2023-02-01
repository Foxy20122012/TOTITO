import '../styles/globals.css'
import Tablero from '../components/Tablejo'
import Image from 'next/image'
import AlertProvider from '../components/AlertProvider'


 const Home=()=> {
  return (
    <div className='bg-green-300 '>
    <div className='mx-auto container flex justify-center'>
      <Tablero className="m-5 p-2"/>
      <AlertProvider/>
    </div>
      
   
    </div>
      
  )
}


export default Home



