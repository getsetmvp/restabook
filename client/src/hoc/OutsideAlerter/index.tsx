// package imports
import React, { useRef, useEffect } from "react";

// local imports

// interfaces
interface Props {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

const OutsideAlerter = (props: Props) => {
  const wrapperRef: React.ForwardedRef<HTMLInputElement> = useRef(null);

  /**
   * Function to handle if clicked on outside of element
   */
  const handleClickOutside = React.useCallback((event: MouseEvent) => {
    const { onOutsideClick } = props;
    if (
      wrapperRef &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node | null)
    ) {
      onOutsideClick();
    }
  }, [props]);

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, handleClickOutside]);

  return <div ref={wrapperRef}>{props.children}</div>;
};

export default OutsideAlerter;
