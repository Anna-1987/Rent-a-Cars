import styled from 'styled-components';

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
  padding: 28px;
`;

export const LoadMore = styled.p`
  display: ${(props) => props.display || 'block'};
  color: var(--color-text-loadmore);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-text-loadmore-hover);
  }
`;
