import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import Footer from "./Footer";

import HotelPageFetch from "../../components/HotelPageFetch/HotelPageFetch"
import React from "react";
import {
    Container,
    Flex,
    HeaderSection,
    SectionAnother,
} from "../../components/Styled-components/Global";
import {
    HeaderHotelCardPage,
    HotelCardPageImgWrapper,
    HotelCardPageTextWrapper
} from "../../components/Styled-components/HotelPage";

const HotelPage = () => {
    const {data, handleClickLink} = HotelPageFetch()
    return (
        <>
            <HeaderHotelCardPage>
                <Container>
                    <HeaderMenu/>
                </Container>
            </HeaderHotelCardPage>
            <SectionAnother>
                <Container>
                    <HeaderSection>{data.name}</HeaderSection>
                    <Flex justyfy="space-between">
                        <HotelCardPageImgWrapper>
                            <img src={data.imageUrl} alt={`hotel ${data.name}`}/>
                        </HotelCardPageImgWrapper>
                        <HotelCardPageTextWrapper>
                            <span>
                                We are glad to welcome you!
                                <br/>
                                This hotel is located in the country {" "}
                                <a href="/Users/HeJlenocTb/Desktop/react7/public#"
                                   onClick={handleClickLink}>{data.country}</a> in the
                                city
                                called <a href="/Users/HeJlenocTb/Desktop/react7/public#"
                                          onClick={handleClickLink}>{data.city}</a>.
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore eaque inventore
                                iure
                                molestias neque perferendis quae quibusdam repellat soluta? Ab beatae deserunt
                                doloribus,
                                ducimus enim eum fugit laboriosam minus neque optio provident quae, quidem, quis
                                similique
                                sit soluta totam. Autem delectus dignissimos dolor dolorum eum harum impedit molestias
                                nisi,
                                nulla odio pariatur quam ratione rem, saepe tempore vel vero. Aliquam ex illo ipsam
                                reiciendis rerum sint sit ullam veritatis! Ab, adipisci alias, amet aperiam culpa cum
                                doloremque dolores ducimus eum facere facilis illum magni mollitia nemo nesciunt officia
                                quas, quia quis quod rem repellendus rerum tempore ut voluptatem voluptates.
                            </span>
                        </HotelCardPageTextWrapper>
                    </Flex>
                </Container>
            </SectionAnother>
            <Footer/>
        </>

    )
}

export default HotelPage;