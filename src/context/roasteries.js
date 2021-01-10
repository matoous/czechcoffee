import {useState, useEffect, createContext, useContext} from 'react'
import firebase from '../firebase/clientApp'
import {HouseFill} from "react-bootstrap-icons";

export const RoasteriesContext = createContext()

export default function RoasteriesProvider({children}) {
  const [roasteries, setRoasteries] = useState(null)
  const [loadingRoasteries, setLoadingRoasteries] = useState(true) // Helpful, to update the UI accordingly.

  const searchRoasteries = (q) => {
    const term = q.toLowerCase().trim();
    return roasteries.filter(roastery =>
      roastery.name.toLowerCase().includes(term)
    ).map(r => ({
      id: r.id,
      link: `/roasteries/${r.id}`,
      icon: <HouseFill/>,
      name: r.name
    }));
  }

  useEffect(() => {
    firebase.firestore()
      .collection('roasteries')
      .get()
      .then(res => {
        setRoasteries(res.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })));
      })
  }, []);

  return (
    <RoasteriesContext.Provider value={{roasteries, loadingRoasteries, searchRoasteries}}>
      {children}
    </RoasteriesContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useRoasteries = () => useContext(RoasteriesContext)
