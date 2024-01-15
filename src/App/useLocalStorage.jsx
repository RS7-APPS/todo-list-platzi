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


/* const defaultTodos = [
  { text: 'cortar tomate', completed: true},
  { text: 'pelar papa', completed: false},
  { text: 'hacer jugo', completed: true},
  { text: 'LALALALA jeiken', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
//localStorage.removeItem('TODOS_V1')