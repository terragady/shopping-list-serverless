import React from 'react'
import styled from 'styled-components'

export const LoaderWrapperFixed = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  /* transform: translateX(-50%); */
  background-color: #e0e0e0c1;
  z-index: 9999;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

export const LoaderWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`


const StyledCircleSpinner = styled.div<{ props: { color?: string; size?: number, fast?: boolean } }>`
  width: ${props => (props.props.size ? props.props.size : 75)}px;
  height: ${props => (props.props.size ? props.props.size : 75)}px;
  margin: 0;
  background: transparent;
  border-top: 4px solid ${props => (props.props.color ? props.props.color : '#009688')};
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: ${props => (props.props.fast ? '0.4s' : '0.8s')} spin linear infinite;
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`

export default function CircleSpinner({ color, size, fast }: { color?: string; size?: number, fast?: boolean }) {
  return <StyledCircleSpinner props={{ color, size, fast }} />
}
