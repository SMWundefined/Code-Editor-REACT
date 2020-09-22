import { useState, useEffect } from 'react';

const PREFIX ='codepen-clone-'
//key is prefixed with this Prefix. Easy to see the application

export default function useLocalStorage(key, initialValue) {
    const prefixKey = PREFIX + key
    const [value, setValue] = useState (() => {
        const jsonValue = localStorage.getItem(prefixKey)

        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue ==='function'){
            return initialValue()
        }
        else {
            return initialValue
        }
    })
    //first initialize and store in localStorage
    //getting the value from localStorage after updation
    useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey , value])
    //saving the value in localStorage which is updation
    //if prefixkey changes, the value also should change

    return [value, setValue]
}
//