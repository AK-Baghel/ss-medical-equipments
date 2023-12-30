import React, { useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {
    const [value, setvalue] = useState(false)
    const [dashboardToogle, setdashboardToogle] = useState(false)
    return (
        <Context.Provider value={
            { value, setvalue, dashboardToogle }
        }>
            {children}
        </Context.Provider>
    )
}

export default AppContext