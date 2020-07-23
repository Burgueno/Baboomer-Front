
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FBF9FF;
  display: grid;
  grid-template: 130px 1fr / 204px 20px 1fr;
  height: 100%;
`;

export const WorkArea = styled.div`
  grid-row: 1 / 4;
  grid-column: 3 / 4 ;
  width: 100%;
`;

export const AppBarTitle = styled.div`
  color: #343239;
  font-family: CircularStd;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.57px;
  line-height: 19px;
  text-align: left;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: #485071;
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 14px;
  text-align: right;
`;
