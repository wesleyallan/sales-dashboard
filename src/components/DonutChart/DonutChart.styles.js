import styled, { css, keyframes } from 'styled-components';

const FillDonut = keyframes`
  from {
    stroke-dasharray: 0 455.53093477052;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const ContainerSvg = styled.svg`
  width: 100%;
  max-width: 36.5rem;
  transform: rotate(-90deg);
`;

export const Back = styled.circle`
  stroke: ${({ theme }) => theme.black};
`;

export const Front = styled.circle`
  animation: ${FillDonut} 1s ease-in-out;
  ${({ circumference, percent }) =>
    css`
      stroke-dasharray: ${percent} ${circumference};
    `};
`;

export const ContainerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Percent = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 3.4rem;
  font-weight: 700;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: 400;
`;
