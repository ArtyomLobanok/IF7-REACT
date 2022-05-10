import React from 'react';
import AvailableHotelsSlider from "../../components/AvailableHotelsSlider/AvailableHotelsSlider"
import {Container, HeaderSection, SectionAnother, } from "../../components/Styled-components/Global"
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";
import {AvailableHotelsTitle} from "../../configs/stringsData";

function AvailableHotels() {
    const loadSpinner = useSelector(state => state.formReducer.loading);
    return (
        <>
            {
                loadSpinner &&
                <SectionAnother>
                    <Container>
                        <HeaderSection>{AvailableHotelsTitle}</HeaderSection>
                        {
                            loadSpinner ?
                                (
                                    <AvailableHotelsSlider/>
                                ) : (
                                    <CircularProgress/>
                                )
                        }
                    </Container>
                </SectionAnother>
            }
        </>
    );
}

export default AvailableHotels;

