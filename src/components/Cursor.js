import React, { useState, useEffect } from "react";
import usePrevious from "../hooks/usePrevious";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.accent};
  border-radius: 100%;
  position: fixed;
  transform: translate(-90%, -90%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: darken;
  transition: all 150ms ease;
  transition-property: opacity, background-color, transform, mix-blend-mode;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  &.cursor--hidden {
    opacity: 0;
  }

  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(3);
    background-color: ${(props) => props.accent};
  }
  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.5);
    mix-blend-mode: normal;
    background-color: #fc2727
  }
`;

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    timestamp: Date().now,
  });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const theme = useTheme();
  const prevPosition = usePrevious(position);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, div.hero-title").forEach((el) => {
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

  const getMouseSpeed = () => {
    if (prevPosition) {
      const distanceX = Math.abs(position.x - prevPosition.x);
      const distanceY = Math.abs(position.x - prevPosition.x);
      const dt = Math.abs(position.timestamp - prevPosition.timestamp);

      return Math.sqrt(distanceX ** 2 + distanceY ** 2) / dt;
    }
  };
  console.log(getMouseSpeed());
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
      accent={theme.colors.accent}
    />
  );
};

export default Cursor;
