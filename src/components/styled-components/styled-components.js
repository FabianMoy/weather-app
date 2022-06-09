import styled from 'styled-components';
    
export const Display = styled.div`
    display: flex;
    justif-content: center;
    align-items: center;
    flex-direction: column;
`

export const Image = styled.img.attrs(({icon}) => ({
    src: ``,
    alt: icon
}))`
    width: 30rem;
`

export const Button = styled.button`
    background-color: #818080;
    border: none;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.8);
    padding: 1.5%;

    &:hover{
        background-color: #a1a0a0;
        cursor: pointer;
    }
    &:active{
        background-color: #616060;
    }
`