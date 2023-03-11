import { useRef } from 'react';
import * as S from './DonutChart.styles';

const DonutChart = ({ percent = 0, raio = 72.5, colors }) => {
  const id = useRef(Math.random().toString(36).substring(2, 9));
  const circumference = 2 * Math.PI * raio;
  const strokePercent = (circumference * percent) / 100;

  return (
    <S.Container>
      <S.ContainerSvg viewBox="0 0 210 210">
        <S.Back
          cx="105"
          cy="105"
          r="72.5"
          fill="transparent"
          strokeWidth="30"
        />
        <S.Front
          cx="105"
          cy="105"
          r={raio}
          fill="transparent"
          strokeWidth="30"
          strokeLinecap="round"
          percent={strokePercent}
          circumference={circumference}
          stroke={`url(#${id.current})`}
        />
        <defs>
          <linearGradient
            id={id.current}
            x1="-9"
            y1="82"
            x2="145"
            y2="178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={colors[0]} />
            <stop offset="1" stopColor={colors[1]} />
          </linearGradient>
        </defs>
      </S.ContainerSvg>
      <S.ContainerInfo>
        <S.Percent>{Math.trunc(percent)}%</S.Percent>
        <S.Info>Alcançado</S.Info>
      </S.ContainerInfo>
    </S.Container>
  );
};

export default DonutChart;
