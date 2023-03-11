import styled, { keyframes } from 'styled-components';

export const fillColumn = keyframes`
  from {
    height: 0;
  }
`;

export const Container = styled.div`
  height: ${({ height }) => height / 10}rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
  z-index: 2;
`;

export const Column = styled.div`
  height: ${({ maxHeight, sales, highestSale }) =>
    ((sales / highestSale) * maxHeight) / 10}rem;
  margin: 0 auto;
  width: 1.5rem;
  border-radius: 1rem;
  background: ${({ colorColumn, theme }) => theme[colorColumn] || colorColumn};
  animation: ${fillColumn} 1s ease-in-out;
`;

export const Day = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.white};
`;
