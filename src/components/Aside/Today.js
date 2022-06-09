import React, { memo } from 'react'

const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
]

const date = new Date();
const dayOfWeek = days[date.getDay()];
const number = date.getDate();
const monthOfYear = months[date.getMonth()];

export const Today = memo(() => {

    return (
        <div className='today__container'>
            <p>
                Today &#8226; { `${dayOfWeek} ${number} ${monthOfYear}` } 
            </p>
        </div>
    )})
