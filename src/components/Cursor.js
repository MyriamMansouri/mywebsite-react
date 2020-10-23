import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fefefe;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  &.cursor--hidden {
    opacity: 0;
  }
  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.5);
    background-color: #ffc0cb;
  }
  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(2);
    border: none;
    background-color: #ffc0cb;
  }
`;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, timestamp: null });

  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    let oldPosition = {
      x: 0,
      y: 0,
      timestamp: null,
    };
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };
  // do not render cursor on Mobile
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <Container
      className={`${hidden && "cursor--hidden"} ${
        clicked && "cursor--clicked"
      } ${linkHovered && "cursor--link-hovered"}`}
      left={`${position.x}px`}
      top={`${position.y}px`}
    />
  );
};

export default Cursor;
