import {createContext, useState} from 'react';

const AppContext = createContext();

function ContextProvider(props){
    const [theme, setTheme] = useState('light');

    function updateTheme(value){
        setTheme(value);
    }

    return(
        <AppContext.Provider value={{theme, updateTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    ContextProvider
}


