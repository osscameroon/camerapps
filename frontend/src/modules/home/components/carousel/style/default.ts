import styled from "styled-components";
import {size} from "../../../../../constants";

const carouselHeight = "100%";

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
        height: 100%;
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
  
  @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {

    .slide__description {

      .description-content {
        margin-left: 1em !important;
        margin-top: 1em !important;
        
        p{
          font-size: .9em;
          width: 280px;
        }

        h2 {
          margin-top: 0;
          margin-bottom: .5em;
          z-index: 2;
        }

        .btn {
          z-index: 2;
        }
      }
    }
    
  }
  
  @media (max-width: ${size.tablet}) {
    .slide-container {
      position: relative;
      
      .slide__image {
        width: 100%;
      }
      
      .slide__description {
        position: absolute;
        
        p {
          display: none;
        }
        
        .description-content {
          margin-left: 1em;
          height: 100%;
          margin-top: 45%;
          
          h2 {
            margin-top: 0;
            margin-bottom: .5em;
            z-index: 2;
            color: #fff;
          }
          
          .btn {
            z-index: 2;
          }
        }
      }
    }
  }
`;