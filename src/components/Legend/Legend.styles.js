import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  gap: 1rem;
  ${({ isLabel }) =>
    isLabel &&
    css`
      &::before {
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: ${({ theme, labelColor }) =>
          theme[labelColor] || labelColor};
      }
    `}
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

export const Value = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
`;
