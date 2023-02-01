

const Cuadro =({valor, alHacerClick})=>{
    return(
        <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-40 w-40 border-2 border-amber-400  text-center rounded-lg'
        onClick={()=>alHacerClick()}
        >
            {valor}
            
            </button>
    )
}

export default Cuadro