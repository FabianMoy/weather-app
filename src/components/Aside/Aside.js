import React, {useState} from 'react';
import { Button } from '../styled-components/styled-components';
import { AsideBackground } from './AsideBackground';
import { ClimateDisplay } from './ClimateDisplay';
import { Today } from './Today';
import { Ubication } from './Ubication';


export const Aside = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='aside__wrapper'>
            {open&&<div> Hola, sere el search</div>}
            <Button 
                onClick={()=>{setOpen(!open)}}
            > 
                Search other City
            </Button>
            <AsideBackground />
            <ClimateDisplay />
            <div className='aside__bottom-section'>
                <Today />
                <Ubication />
            </div>
        </div>
    )
}
