import { useState, useEffect} from 'react'

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }  
  
        setLoading(false) 
      } 
      catch(error) {
        console.log(error)
        setLoading(false) //cancelar el estado de carga
        setError(true)
      } 
    }, 2000)        
  }, [])  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  
  return {
    item, 
    loading, 
    error, 
    saveItem
  }
}

export { useLocalStorage }