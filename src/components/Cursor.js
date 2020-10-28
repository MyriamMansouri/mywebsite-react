import React, { useState, useEffect } from "react";
import usePrevious from "../hooks/usePrevious";
import { Box } from "rebass";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    timestamp: Date().now,
  });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [heroHovered, setHeroHovered] = useState(false);
  const prevPosition = usePrevious(position);
  const theme = useTheme();

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll("div.hero-title").forEach((el) => {
      el.addEventListener("mouseover", () => setHeroHovered(true));
      el.addEventListener("mouseout", () => setHeroHovered(false));
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

  // do not render cursor on Mobile
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <Box
      className={`${hidden && "cursor--hidden"} ${
        clicked && "cursor--clicked"
      } ${linkHovered && "cursor--link-hovered"} ${
        heroHovered && "cursor--hero-hovered"
      }`}
      css={style(`${position.x}px`, `${position.y}px`, theme.colors)}
    />
  );
};

const style = (left, top, colors) => {
  const {primary, accent, accent1} = colors
  return css`
    width: 30px;
    height: 30px;
    background-color: ${primary};
    border-radius: 100%;
    position: fixed;
    transform: translate(-90%, -90%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: darken;
    transition: all 450ms ease;
    transition-property: opacity, background-color, transform, mix-blend-mode;
    left: ${left};
    top: ${top};

    &.cursor--hidden {
      opacity: 0;
    }

    &.cursor--link-hovered {
      transform: translate(-50%, -50%) scale(2);
      background-color: ${accent};
    }

    &.cursor--clicked {
      transform: translate(-50%, -50%) scale(0.5);
      mix-blend-mode: normal;
      background-color: ${accent1};
      animation: vibrate 1s infinite;
    }
    &.cursor--hero-hovered {
      transform: translate(-50%, -50%) scale(7);
      animation: color-change 500ms ease infinite;
      transition: all 450ms ease;
    }
    @keyframes color-change {
      0% {
        background-color: ${accent};
      }
      25% {
        background-color: ${accent1};
      }
      50% {
        background-color: ${primary};
      }
    }
  `;
};

export default Cursor;
