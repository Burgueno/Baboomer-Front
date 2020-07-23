
import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  width: 552px;
  height: 100%;
`;

export const ContentContainer = styled.div`
`;

export const Subheader = styled.div`
  color: #485071;
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.19px;
  line-height: 14px;
  text-align: left;
`;

export const Text = styled.div`
  color: #000000;
  font-family: CircularStd;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 19px;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
`;
