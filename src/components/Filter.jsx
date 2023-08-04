import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NativeSelect } from '@mantine/core';

function Filter(props){

    const context = useContext(AppContext);
    console.log(context)

    return (
        <div>
            <NativeSelect
                data={props.data}
                label={props.title}
                size="md"
                onClick={props.onClick}
            />
        </div>
        
    )
}

export default Filter;