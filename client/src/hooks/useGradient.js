


export  const useGradient=()=>{
   const changeBackground=()=>{
       document.querySelector('body').classList.toggle('purple-gradient')
   }
   return [changeBackground] 
}