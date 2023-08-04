import {useContext} from "react"
import { Switch, Group} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { AppContext } from '../context/AppContext';

function ThemeSwitch(){
    const context = useContext(AppContext)

    function handleClick(event){
        let ischecked = event.target.checked;
        if(ischecked){
            // dark mode
            context.updateTheme('dark');
        }else{
            // light mode
            context.updateTheme('light');
        }
    }

    return(
        <Group position="center">
            <Switch
                size="lg"
                color={'dark'}
                onLabel={<IconSun size="1rem" stroke={2.5} color={'orange'} />}
                offLabel={<IconMoonStars size="1rem" stroke={2.5} color={'gray'} />}
                onClick={handleClick}
            />
        </Group>
    )
}

export default ThemeSwitch;