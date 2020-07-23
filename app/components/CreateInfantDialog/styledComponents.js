
import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;
  grid-gap: 0 16px;
  width: 552px;
  height: 100%;
`;

export const Half = styled.div`
`;

export const Full = styled.div`
  grid-column: 1 / 3 ;
`;

export const ActionsContainer = styled.div`
  display: flex;
`;

// nombre
// apellidoP ApellidoM
// genero    birthdate
// peso      altura
// nombreTutor
// apellidoPT ApellidoMT
// generoT   númeroTelefono
// correo
// imgInfante imgTutor
