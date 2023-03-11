import styled, { keyframes, css } from 'styled-components';
import { MdSettings } from 'react-icons/md';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  width: 100%;
  padding: 2.9rem 4.6rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(29.7rem, max-content));
  gap: 3.2rem 5.9rem;
`;

export const Card = styled.article`
  padding: 2.9rem 4.8rem;
  border-radius: 1.6rem;
  display: flex;
  gap: 3.2rem;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.purple700};
  box-shadow: 0.3rem 0.4rem 2.6rem rgba(0, 0, 0, 0.25);
  &:nth-child(4) {
    grid-column: 1 / 4;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme, secondary }) => (secondary ? theme.green : theme.white)};
`;

export const NpsContent = styled.section`
  display: grid;
  gap: 1.6rem;
  justify-items: center;
`;

export const LegendsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

export const TitleDays = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsIcon = styled(MdSettings)`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.purple300};
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export const DaysContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Destaques = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Arrow = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  ${({ theme, direction }) =>
    direction === 'up'
      ? css`
          border-bottom: 1.4rem solid ${theme.green};
        `
      : css`
          border-top: 1.4rem solid ${theme.orange};
        `}
`;

export const DestaqueInfo = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  gap: 0.5rem;
`;

export const DestaqueDay = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 2.4rem;
  font-weight: 400;
`;

export const ColumnChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5.9rem;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 0.3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.black};
  }
`;

export const ContainerSalesGraph = styled.div`
  display: flex;
  justify-content: space-between;
`;
