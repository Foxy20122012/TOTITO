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

    const calculaGanador =(mytablero)=>{
        const jugadasGanadoras =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,7],
            [0,4,8],
            [2,4,6],
        ];
        for (let indicejugada = 0; indicejugada < jugadasGanadoras.length; indicejugada++){
            const[a, b, c]= jugadasGanadoras[indicejugada];
        if (mytablero[a] && mytablero[a] === mytablero[b] && mytablero[a] === mytablero[c]){
            return mytablero[a];
        }
        }
        return '';
    }

    return (
        <div className="">
            <span>{'El ganador es: '+ calculaGanador(cuadros)}</span>
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
        </div>
    )
}

export default Tablero