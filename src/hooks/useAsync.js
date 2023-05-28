import React, { useEffect, useState } from 'react'

const useAsync = (fetchFunction) => {
    
    const [data,setData] = useState('');
    const [status,setStatus] = useState("idle");
    const [error,setError] = useState("");

    useEffect(()=>{
        setStatus("pending")
        setError('')

        fetchFunction()
        .then( res => {
            setData(res);
            setStatus("success")
            setError('')
        })
        .catch((error)=>{
            setData('');
            setStatus("error")
            setError(error)
        })
    },[fetchFunction])
  return {
        data,
        setData,
        isLoading: status === "pending",
        isSuccess: status === "success",
        isError: status === "error",
        error
  }
}

export default useAsync