
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template: 24px 1fr / 500px 1fr;
  padding: 24px 0;
  overflow-y: auto;
  height: 90vh;
`;

export const Title = styled.div`
  color: #000000;
  font-family: CircularStd;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.38px;
  line-height: 29px;
  text-align: left;
`;

export const ContentContainer = styled.div`
  grid-row: 2 / 2;
  grid-column: 1 / 2;
  width: 100%;
  margin: 24px 0;
`;
