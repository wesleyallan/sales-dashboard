import * as S from './Legend.styles';

const Legend = ({
  children,
  title = 'title',
  isLabel = false,
  labelColor = 'black',
}) => {
  return (
    <S.Container isLabel={isLabel} labelColor={labelColor}>
      <S.Title>{title}</S.Title>
      <S.Value>{children}</S.Value>
    </S.Container>
  );
};

export default Legend;
