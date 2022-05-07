import {useState} from "react";
import {
    Container,
    StyledLink,
    Flex,
    SectionPromotion,
    PromotionIcon,
    ButtonBookNowAndSingUP
} from "../../components/Styled-components/Global";
import {
    PromotionCloseBtn,
    PromotionWrapperAnnouncement,
    PromotionWrapperContent,
    PromotionWrapperIcon,
} from "../../components/Styled-components/Promotion";



const ClosePromotion = () => {
    const [isClose, setIsClose] = useState(true)
    const handleClickClose = () => {
        setIsClose(!isClose)
    }
    return {
        isClose,
        handleClickClose,
    }
}

const Promotion = () => {
    const {isClose, handleClickClose} = ClosePromotion()
    return (
        isClose && (
            <SectionPromotion>
                <Container>
                    <PromotionWrapperContent>
                        <Flex justify='right'>
                            <PromotionCloseBtn onClick={handleClickClose}/>
                        </Flex>
                        <Flex>
                            <PromotionWrapperIcon>
                                <PromotionIcon>
                                    <use href="#Group"></use>
                                </PromotionIcon>
                            </PromotionWrapperIcon>
                            <PromotionWrapperAnnouncement>
                                <p>Sign up and get 20% off your first booking</p>
                                <StyledLink to={`register`}>
                                    <ButtonBookNowAndSingUP  padding='12px 32px'>
                                        Sign up
                                    </ButtonBookNowAndSingUP>
                                </StyledLink>
                            </PromotionWrapperAnnouncement>
                        </Flex>
                    </PromotionWrapperContent>
                </Container>
            </SectionPromotion>
        )
    )
}
export default Promotion;