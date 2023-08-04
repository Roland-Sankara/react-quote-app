import { NativeSelect } from '@mantine/core';

function Filter(props){
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