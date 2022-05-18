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
import {PromotionButtonText, PromotionText} from "../../configs/stringsData";



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
                                <p>{PromotionText}</p>
                                <StyledLink to={`register`}>
                                    <ButtonBookNowAndSingUP  padding='12px 32px'>
                                        {PromotionButtonText}
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