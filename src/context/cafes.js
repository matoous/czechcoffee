import {useState, useEffect, createContext, useContext} from 'react'
import firebase from '../firebase/clientApp'
import {CupFill} from "react-bootstrap-icons";

export const CafesContext = createContext();

export default function CafesProvider({children}) {
  const [cafes, setCafes] = useState(null)
  const [loadingCafes, setLoadingCafes] = useState(true) // Helpful, to update the UI accordingly.

  const searchCafes = (q) => {
    const term = q.toLowerCase().trim();
    return cafes.filter(cafe =>
      cafe.name.toLowerCase().includes(term) ||
      cafe.address.toLowerCase().includes(term)
    ).map(c => ({
      id: c.id,
      link: `/cafes/${c.id}`,
      icon: <CupFill/>,
      name: c.name
    }));
  }

  useEffect(() => {
    firebase.firestore()
      .collection('cafes')
      .get()
      .then(res => {
        setCafes(res.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
      })
  }, []);

  return (
    <CafesContext.Provider value={{cafes, loadingCafes, searchCafes}}>
      {children}
    </CafesContext.Provider>
  )
}

export const useCafes = () => useContext(CafesContext)
