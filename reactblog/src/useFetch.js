import { useState,useEffect } from "react";
const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const AbortConst=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:AbortConst.signal})
            .then(res=>{
                //console.log(res);
                if(!res.ok || res.status===404){
                    throw Error('could not fetch data for that resource.');
                }
                return res.json();
            })
            .then(d=>{
                setData(d);
                setisPending(false);
                setError(null);
            })
            .catch(err=>{
                console.log('error');
                if(err.name === 'AbortError'){
                //console.log('fetch aborted');
                }
            else{
                setisPending(false);
                setData(null);
                setError(err.message);
            }
            })
        },200);
        //return ()=>AbortConst.abort();
    },[url]);

    return {data,isPending,error};
}
export default useFetch;