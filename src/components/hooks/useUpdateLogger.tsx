import { useEffect } from 'react'

const useUpdateLogger = (value:string) => {
        useEffect(() => {
            console.log(value)
        }, [value])

}

export default useUpdateLogger;