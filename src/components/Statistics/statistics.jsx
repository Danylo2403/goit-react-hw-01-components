import {
  StatisticsWrap,
  Title,
  List,
  Item,
  Label,
  Persentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Persentage>{stat.percentage}%</Persentage>
            </Item>
          );
        })}
      </List>
    </StatisticsWrap>
  );
};
