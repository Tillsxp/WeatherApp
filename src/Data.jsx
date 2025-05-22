import {useEffect, useRef} from 'react';

export default function Data () {
    const hasFetched = useRef(false);
    
    useEffect(() => {
        if(hasFetched.current) return;
        hasFetched.current = true;
        const fetchData = async () => {
            const apiKey=import.meta.env.VITE_WEATHER_API_KEY;
            const url=`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`;

                try{
                    const response = await fetch(url);
                    if(!response.ok){
                        throw new Error(`Response Status: ${response.status}`);
                    }
                    
                    const json = await response.json();
                    console.log(json);
                }
                catch (error){
                    console.log(error.message);
                }
            }
            fetchData();
        }, [])
    return null;
}