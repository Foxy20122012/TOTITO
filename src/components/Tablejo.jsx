'use client';
import {useState} from "react"
import Cuadro from "./cuadro"


const Tablero =()=>{
    const[cuadros, setCuadros] = useState(Array(9).fill(' '))
    const [turno, setTurno] = useState('X')

    const pintaFigura = (indexItem) =>{
        const misCuadritos =cuadros.slice()
        misCuadritos.splice(indexItem, 1, turno)
        setCuadros(misCuadritos)
        if (turno === 'X'){
            setTurno('O')
            } else{
                setTurno("X")
        }
    }

    return (
        
            <div className='grid grid-cols-3 gap-1'>
                            
              {
                cuadros.map((item, indexItem)=>{
                   

                    return <Cuadro
                     key={indexItem} 
                     valor={item}
                     alHacerClick ={()=> pintaFigura(indexItem)}
                     />
                })
              }

            
        </div>
    )
}

export default Tablero