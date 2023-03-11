import { useSales } from '../../context/SalesContext';
import abbDay from '../../functions/abbDay';
import * as S from './ColumnChart.styles';

const ColumnChart = ({ day, colorColumn }) => {
  const height = 200;
  const { sales } = useSales();
  return (
    <S.Container height={height}>
      <S.Column
        maxHeight={height}
        sales={sales.dayInfo[day].sales}
        highestSale={sales.dayInfo[sales.highestSale].sales}
        colorColumn={colorColumn}
      />
      <S.Day>{abbDay(day)}</S.Day>
    </S.Container>
  );
};

export default ColumnChart;
