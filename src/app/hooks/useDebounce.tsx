import { useState, useEffect } from "react";

import React from 'react'

const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            console.log('setting new timeout')
            setDebouncedValue(value)
        }, delay)

        return () => {
            console.log('clearing timeout')
            clearTimeout(id)
        }
    }, [value, delay])

  return debouncedValue
}

export default useDebounce