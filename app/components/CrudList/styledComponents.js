
import styled from 'styled-components';
// import Avatar from '@material-ui/core/Avatar';

export const Container = styled.div`
  display: grid;
  grid-template: 1fr / 24px 1fr;
`;

export const ContentContainer = styled.div`
  padding: 0 12px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const Title = styled.div`
  color: #1E1E1E;
  font-family: CircularStd;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
`;

export const Date = styled.div`
  color: #8E8E8E;
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
`;

export const Message = styled.div`
  color: #3D4150;
  font-family: CircularStd;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  width: 433px;
  text-align: left;
  word-wrap: break-word;
  margin-top: 18px;
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  margin-top: 16px;
`;
