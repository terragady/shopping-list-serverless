import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div<{props:{height?:string, width?:string, color?:string}}>`
  --width: ${props=>props.props.width ? props.props.width : '100px'};
  --height: ${props=>props.props.height ? props.props.height : '15px'};
  z-index: 9999;
  width: var(--width);
  height: var(--height);
  background-color: rgba(11, 95, 240, 0);
  margin: 0;
  position: relative;
  :after {
    border-radius: 100px;
    content: '';
    position: absolute;
    background-color: ${props=>props.props.color ? props.props.color : 'rgb(255, 255, 255)'};
    height: var(--height);
    animation-name: slide;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @keyframes slide {
    0% {
      right: calc(var(--width) - 15px);
      left: 0px;
    }
    15% {
      left: 0px;
    }
    50% {
      right: 0px;
      left: calc(var(--width) - 15px);
    }
    65% {
      right: 0px;
    }
    100% {
      right: calc(var(--width) - 15px);
      left: 0px;
    }
  }
`

export default function Loader({ color, width, height }: { color?: string; width?: string; height?: string }) {
  return <StyledLoader props={{color,width,height}}/>
}
