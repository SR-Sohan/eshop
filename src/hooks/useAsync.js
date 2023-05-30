// import { useEffect, useState } from 'react'

// const useAsync = (fetchFunction) => {
    
//     const [data,setData] = useState('');
//     const [status,setStatus] = useState("idle");
//     const [error,setError] = useState("");

//     useEffect(()=>{
//         setStatus("pending")
//         setError('')

//         fetchFunction()
//         .then( res => {
//             setData(res);
//             setStatus("success")
//             setError('')
//         })
//         .catch((error)=>{
//             setData('');
//             setStatus("error")
//             setError(error)
//         })
//     },[fetchFunction])
//   return {
//         data,
//         setData,
//         isLoading: status === "pending",
//         isSuccess: status === "success",
//         isError: status === "error",
//         error
//   }
// }

// export default useAsync

import { useEffect, useState } from 'react';

const useAsync = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setStatus('pending');
        setError('');

    await fetchFunction()
    .then( result => {
        if (isMounted) {
            setData(result);
            setStatus('success');
          }
    })

        
      } catch (error) {
        if (isMounted) {
          setData(null);
          setStatus('error');
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFunction]);

  return {
    data,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    error
  };
};

export default useAsync;