import styled from "styled-components";

export const PromotionWrapperContent = styled.section`
  background: #EAF0F9;
`
export const PromotionCloseBtn = styled.button`
  margin:24px 24px 0 0;
  overflow: hidden;
  position: relative;
  border: none;
  padding: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  color: #BFBFBF;
  font: inherit;
  text-indent: 100%;
  cursor: pointer;
  &:focus {
    outline: solid 0 transparent;
    box-shadow: 0 0 0 2px #BFBFBF
  }
  &:hover {
    background: rgba(29, 161, 142, .1)
  }
  &:before,
  &:after{
    position: absolute;
    top: 15%;
    left: calc(50% - .0625em);
    width: .125em;
    height: 70%;
    border-radius: .125em;
    transform: rotate(45deg);
    background: currentcolor;
    content: ''
  }
  &:after {
    transform: rotate(-45deg);
  }
`
export const PromotionWrapperAnnouncement = styled.div`
  p {
    font-size: 24px;
    font-weight: 500;
    color: #383838;
    margin-bottom: 21px;
  }
`
export const PromotionWrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  margin: 0 24px 57px;
  svg {
    top: 6px;
    position: relative;
    width: 58px;
    height: 57px;
    margin: 14px;
    fill: #3077C6;
  }
`