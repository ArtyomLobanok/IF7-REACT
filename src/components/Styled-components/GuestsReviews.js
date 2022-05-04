import styled from "styled-components";

export const GuestReviewsWrapperSlider = styled.div`
  margin: -8px;

  .slick-next {
    z-index: 1000;
    transform: translate3d(-44px, -190px, 0);
  }

  .slick-next img {
    z-index: 1000;
  }

  .slick-prev:before,
  .slick-next:before {
    content: '' !important;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .slick-prev {
    z-index: 1000;
    transform: translate3d(15px, -190px, 0);
  }

`