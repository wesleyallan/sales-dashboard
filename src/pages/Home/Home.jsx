import { useSales } from '../../context/SalesContext';
import Legend from '../../components/Legend';
import smile from '../../assets/smile.svg';
import DonutChart from '../../components/DonutChart';
import ColumnChart from '../../components/ColumnChart';
import abbDay from '../../functions/abbDay';
import convertValue from '../../functions/convertValue';
import * as S from './Home.styles';

const Home = () => {
  const { sales } = useSales();

  return (
    <S.Container>
      <S.Card>
        <S.Title>NPS Geral</S.Title>
        <S.NpsContent>
          <img src={smile} alt="Ícone de smile" />
          <S.Title secondary>Excelente!</S.Title>
        </S.NpsContent>
        <Legend title="NPS Score">{sales.nps}</Legend>
      </S.Card>
      <S.Card>
        <S.Title>Vendas Fechadas</S.Title>
        <DonutChart
          percent={sales.percentSales}
          colors={['#CE9FFC', '#7367F0']}
        />
        <S.LegendsContainer>
          <Legend isLabel title="Esperado">
            {sales.targetSales}
          </Legend>
          <Legend isLabel labelColor="gradientPurple" title="Alcançado">
            {sales.resultSales}
          </Legend>
        </S.LegendsContainer>
      </S.Card>
      <S.Card>
        <S.Title>Meta Mensal</S.Title>
        <DonutChart
          percent={sales.percentAmount}
          colors={['#A66DE9', '#DF9780']}
        />
        <S.LegendsContainer>
          <Legend isLabel title="Esperado">
            {convertValue(sales.targetAmount)}
          </Legend>
          <Legend isLabel labelColor="gradientOrange" title="Alcançado">
            {convertValue(sales.resultAmount)}
          </Legend>
        </S.LegendsContainer>
      </S.Card>
      <S.Card>
        <S.TitleDays>
          <S.Title>Vendas por dia da semana</S.Title>
          <S.SettingsIcon />
        </S.TitleDays>
        <S.ContainerSalesGraph>
          <S.DaysContent>
            <S.Destaques>
              <S.DestaqueInfo>
                <S.Arrow direction="up" />
                Dia com mais vendas
              </S.DestaqueInfo>
              <S.DestaqueDay>
                {String(sales.highestSale).charAt(0).toUpperCase() +
                  String(sales.highestSale).slice(1)}
              </S.DestaqueDay>
            </S.Destaques>
            <S.Destaques>
              <S.DestaqueInfo>
                <S.Arrow direction="down" />
                Dia com mais vendas
              </S.DestaqueInfo>
              <S.DestaqueDay>
                {String(sales.lowerSale).charAt(0).toUpperCase() +
                  String(sales.lowerSale).slice(1)}
              </S.DestaqueDay>
            </S.Destaques>
          </S.DaysContent>
          <S.ColumnChartContainer>
            {Object.keys(sales.dayInfo).map((day) => (
              <ColumnChart
                key={abbDay(day)}
                day={day}
                colorColumn="gradientCyan"
              />
            ))}
          </S.ColumnChartContainer>
        </S.ContainerSalesGraph>
      </S.Card>
    </S.Container>
  );
};

export default Home;
