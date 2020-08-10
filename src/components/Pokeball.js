import React from 'react'
import styled from 'styled-components'

export default function Pokemon() {
  return (
    <AnimatedPokeball>
      <AnimatedPokeBallInner>
        <PokeballPkm></PokeballPkm>
      </AnimatedPokeBallInner>
    </AnimatedPokeball>
  )
}

const AnimatedPokeball = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: rgb(255, 105, 180);
  background: linear-gradient(
    124deg,
    rgba(255, 255, 255, 1) 55%,
    rgba(212, 212, 212, 1) 100%
  );
  border-radius: 50%;
  overflow: hidden;

  animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    background: rgb(255, 0, 0);
    background: linear-gradient(
      35deg,
      rgba(255, 182, 193) 0%,
      rgba(255, 105, 180) 100%
    );

    ::after {
      content: '';
      position: absolute;
      top: calc(50% - 5px);
      width: 100%;
      height: 2px;
      background: #000;
    }
  }
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-30deg);
    }
    30% {
      transform: translate(10px, 0) rotate(30deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    60% {
      transform: translate(10px, 0) rotate(20deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
`

const AnimatedPokeBallInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 1px solid black;
  z-index: 10;
`

const PokeballPkm = styled.div`
  width: 7px;
  height: 7px;
  background: lightgray;
  border-radius: 50%;
  animation: blink 0.5s alternate 7;

  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: var(--hotpink);
    }
  }
`
