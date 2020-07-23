
import styled from 'styled-components';
import image from '../../images/Login-image.jpg';

export const Container = styled.div`
  background-color: #FFFFFF;
  display: grid;
  grid-template: 1fr / 480px 1fr;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 280px;
  height: 344px;
  margin: 24px;
  align-self: center;
  justify-self: center;
`;

export const ImageContainer = styled.div`
  background-image: url(${image});
  width: 100%;
  background-position: 43% 11%;
  zoom: 0.55;
`;

export const LogoImage = styled.img`
  width: 112px;
  height: 40px;
`;

export const Title = styled.div`
  color: #000000;
  font-family: CircularStd;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 38px;
  text-align: left;
  margin-top: 32px;
`;

export const FormContainer = styled.div`
  margin-top: 40px;
`;
