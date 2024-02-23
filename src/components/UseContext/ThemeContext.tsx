import {createContext} from 'react'
import { theme } from './Theme'

type ThemeContextProviderProps = {
    children : React.ReactNode
}

export const Themecontext = createContext(theme);


const ThemeContextProvider = (props: ThemeContextProviderProps ) => {
  return (
    <Themecontext.Provider value={theme}>
        {props.children}
    </Themecontext.Provider>
  )
}

export default ThemeContextProvider