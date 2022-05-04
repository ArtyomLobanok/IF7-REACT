
import {useState} from "react";
import {Button, Container, StyledLink, Flex} from "../../components/Styled-components/Global";
import {
    PromotionCloseBtn,
    PromotionCloseBtnWrapper,
    PromotionWrapperAnnouncement,
    PromotionWrapperContent,
    PromotionWrapperIcon
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
            <Container>
                <PromotionWrapperContent>
                    <Flex justify='right'>
                        <PromotionCloseBtn onClick={handleClickClose}/>
                    </Flex>
                    <Flex>
                        <PromotionWrapperIcon>
                            <svg>
                                <use href="#Group"></use>
                            </svg>
                        </PromotionWrapperIcon>
                        <PromotionWrapperAnnouncement>
                            <p>Sign up and get 20% off your first booking</p>
                            <StyledLink to={`register`}>
                                <Button active padding='12px 32px'>
                                    Sign up
                                </Button>
                            </StyledLink>
                        </PromotionWrapperAnnouncement>
                    </Flex>
                </PromotionWrapperContent>
            </Container>
        )
    )
}
export default Promotion;