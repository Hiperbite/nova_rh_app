import React, { useMemo, useState } from 'react'
import { Auth } from './Auth'
import { Home } from './Home'
import { HomeScreen } from './Home/HomeScreen'

export const Screens = () => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    useMemo(() => { alert(isAuthenticated) }, [isAuthenticated])
    return (
        
        < >
            {
                isAuthenticated ? <Home /> : <Auth setAuthenticated={setAuthenticated} />
            }
        </>
    )
}
