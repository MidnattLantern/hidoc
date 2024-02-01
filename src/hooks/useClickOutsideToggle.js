import { useState, useRef, useEffect } from 'react'

const useClickOutsideToggle = () => {
    // UI friendly burger
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = (userInput) => {
            if (ref.current && !ref.current.contains(userInput.target)){
                setExpanded(false)
            }
        }
        document.addEventListener('mouseup', handleClickOutside)
        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
        }
    }, [ref])
    return { expanded, setExpanded, ref }
}

export default useClickOutsideToggle
