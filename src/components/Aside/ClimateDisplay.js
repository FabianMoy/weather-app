import React from 'react'
import {Image, Container} from '../styled-components/styled-components';


export const ClimateDisplay = () => {

    return (
        <Container>
            <Image src={'s'} />
            <p className='weatherapp__climate-aside-display__temperature'>  
                15<span>&#186;c</span>
            </p>
            <p className='weatherapp__climate-aside-display__climate'>
                Shower
            </p>
        </Container>
    )
}
