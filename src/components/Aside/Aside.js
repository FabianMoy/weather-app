import React, {useState} from 'react';
import { Button } from '../styled-components/styled-components';
import { AsideBackground } from './AsideBackground';


export const Aside = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='Aside__wrapper'>
            {open&&<div> Hola, sere el search</div>}
            <Button 
                onClick={()=>{setOpen(!open)}}
            > 
                Search other City
            </Button>
            <AsideBackground />
            
        </div>
    )
}
