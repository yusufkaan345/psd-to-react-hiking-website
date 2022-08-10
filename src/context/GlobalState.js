import { createContext, useState } from 'react'

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
    const [openModal,setOpenModal]=useState(false)
    return (
        <GlobalContext.Provider value={{ openModal: openModal, setOpenModal }}>
            {props.children}
        </GlobalContext.Provider>
    )
}