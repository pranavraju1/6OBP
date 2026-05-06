import { useEffect, useState } from "react"

const Test = () => {
  useEffect(()=>{
    const handleResize = () => {
      console.log("Width:", window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  },[])
  return (
    <div>
      <h1>Resize page</h1>
    </div>
  )
}

export default Test
