import { CartButton, CartIcon, Container, ContentContainer, CurrentPrice, Description, Info, OldPrice, PriceContainer, ProductImg, ProductImgContainer, Title } from "./Card.styled"

export const Card = () => {
    return (
        <Container>
            <ProductImgContainer>
                <ProductImg src={`${process.env.PUBLIC_URL}/assets/images/image-product-mobile.jpg`} alt="Product image" />
            </ProductImgContainer>

            <ContentContainer>
                <Info>PERFUME</Info>
                <Title>Gabrielle Essence Eau De Parfum</Title>
                <Description>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Description>
                <PriceContainer>
                    <CurrentPrice>$149.99</CurrentPrice>
                    <OldPrice>$169.99</OldPrice>
                </PriceContainer>

                <CartButton>
                    <CartIcon src={`${process.env.PUBLIC_URL}/assets/images/icon-cart.svg`} />
                    Add to Cart
                </CartButton>
            </ContentContainer>
        </Container>
    )
}