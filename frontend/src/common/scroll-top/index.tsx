import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";

const ScrollTopWrapper = styled.div`
  cursor: pointer;

  .scroll-button {
    position: fixed;
    bottom: 2em;
    right: 1em;
    background-color: ${({ theme }) => theme.black};
    border-radius: 5px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
  }
`;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollTopWrapper>
      {isVisible && (
        <div className={"scroll-button"} onClick={scrollToTop}>
          <FaArrowUp color={theme.white} />
        </div>
      )}
    </ScrollTopWrapper>
  );
}
