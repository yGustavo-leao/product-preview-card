import styled from "styled-components";

export const Container = styled.div`
    max-width: 370px;
    display: grid;
    grid-template-areas:
    "img"
    "content";
    border-radius: 10px;
    overflow: hidden;
    background-color: white;

    @media (min-width: 700px) {
        max-width: 670px;
        grid-template-areas:
        "img content";
        grid-template-columns: 50% 50%;
    }
`

export const ProductImgContainer = styled.picture`
    grid-area: img;
    display: flex;
`

export const ProductImgResponsive = styled.source`

`

export const ProductImg = styled.img`
    width: 100%;
    object-fit: cover;
`

export const ContentContainer = styled.main`
    grid-area: content;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;

    @media (min-width: 700px) {
        justify-content: space-between;
        padding: 2rem;
    }
`

export const Info = styled.h2`
    font-weight: 500;
    letter-spacing: 3px;
    font-size: .8rem;
    color: #6c7289;
`

export const Title = styled.h1`
    font-family: "Fraunces", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings:
        "SOFT" 0,
        "WONK" 0;
    color: #1c232b;
`

export const Description = styled.p`
    font-weight: 500;
    line-height: 1.5rem;
    color: #6c7289;
`

export const PriceContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    margin: 1rem 0;
    align-items: center;
`

export const CurrentPrice = styled.span`
    font-family: "Fraunces", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings:
        "SOFT" 0,
        "WONK" 0;
    font-size: 2rem;
    font-weight: 900;
    color: #3c8067;
`

export const OldPrice = styled.span`
    color: #6c7289;
    text-decoration: line-through;
`

export const CartButton = styled.button`
    padding: 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    column-gap: .5rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #3c8067;

    &:hover {
        background-color: #1c232b;
    }
`

export const CartIcon = styled.img`
    width: 20px;
    height: 20px;
`