import styled from "styled-components";

const carouselHeight = "400px";

export const CarouselWrapper = styled.div`
  width: 100vw;
  height: ${carouselHeight};
  position: relative;
  
  .slider {
    height: ${carouselHeight};
    overflow: hidden;
  }

  .slide-container {
    width: 100% !important;
    height: 100%;
    display: flex !important;
    background-color: #eee;

    .slide__image {
      height: 100%;
      width: 50%;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
        object-position: left center;
      }
    }

    .slide__description {
      width: 50%;
      height: 100%;

      .description-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 400px;
        margin-left: 4em;
        margin-top: 4em;

        p {
          margin-bottom: 1.5em;
        }
      }
    }
  }
`;