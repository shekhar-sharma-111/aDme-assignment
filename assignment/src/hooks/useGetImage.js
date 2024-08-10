// import React from 'react'

import { useEffect, useState } from "react"

function useGetImage() {
   const[loading,setLoading]= useState(true)
   const[images,setImages]=useState([]);
   

   
   useEffect(()=>{
    const getImages =async()=>{
        setLoading(true)
        try {
            const res= await fetch(`https://picsum.photos/v2/list?page=2&limit=100`)
            const data = await res.json()
            if(data.error) throw new Error(data.error)
            setImages(data)
           
        } catch (error) {
            console.error(error.message)
            
        }finally{
            setLoading(false)
        }
    };
    getImages();
},[])
    return {loading,images}
}

export default useGetImage