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
import {
    HotelCardPageTextPartFirst, HotelCardPageTextPartFourth,
    HotelCardPageTextPartSecond,
    HotelCardPageTextPartThird
} from "../../configs/stringsData";


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
                                {HotelCardPageTextPartFirst}
                                <br/>
                                {HotelCardPageTextPartSecond} {" "}
                                <a href="/Users/HeJlenocTb/Desktop/react7/public#"
                                   onClick={handleClickLink}>{data.country}</a> {HotelCardPageTextPartThird} {" "}
                                <a href="/Users/HeJlenocTb/Desktop/react7/public#"
                                          onClick={handleClickLink}>{data.city}</a>.
                                <br/>
                                {HotelCardPageTextPartFourth}
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