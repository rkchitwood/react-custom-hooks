import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialFlipState=true){
    const [isFlipped, setIsFlipped] = useState(initialFlipState);
    const toggleFlip = () => {
        setIsFlipped(flipped => !flipped);
    }
    return [isFlipped, toggleFlip];
}

function useAxios(baseUrl){
    const [responses, setResponses] = useState([]);
    const [error, setError] = useState(null);
    async function addResponse(restOfUrl){
        try{
            const resp = await axios.get(`${baseUrl}${restOfUrl}`);
            setResponses(prevResponses => [...prevResponses, resp.data]);
        }catch(err){
            setError(err);
        }
    }
    return [responses, error, addResponse];
}

export default { useFlip, useAxios };