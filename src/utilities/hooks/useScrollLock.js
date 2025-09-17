import { useCallback } from "react";

// disable scrolling on body element, primarily when modal element is opened
// by setting overflow: hidden style on body element 
export const useScrollLock = () => {
  const bodyElement = document.body;

  const lockScroll = useCallback(() => {
    // calculate scrollbar width depending on the browser to prevent layout shift
    // when overflow hidden in applied on the body element 
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    bodyElement.setAttribute("style", `--scroll-lock: hidden; --scroll-bar-offset: ${scrollBarWidth}px`);
  }, []);

  const unlockScroll = useCallback(() => {
    bodyElement.style.removeProperty("--scroll-lock");
    bodyElement.style.removeProperty("--scroll-bar-offset");
  }, []);

  return {
    lockScroll,
    unlockScroll
  }
}