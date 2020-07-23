/**
*
* InfantDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DialogGeneral from '../../components/DialogGeneral';
import {
  Container,
  ContentContainer,
  Subheader,
  Text,
  Image,
  ActionsContainer,
} from './styledComponents';

class InfantDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      infant: {
        name,
        firstSurname,
        secondSurname,
        genre,
        birthdate,
        height,
        weight,
        extras,
        image,
        tuthorName,
        tuthorFirstSurname,
        tuthorSecondSurname,
        tuthorGenre,
        email,
        phone,
      },
      classes,
      setDialog,
      open,
      reportDialog,
    } = this.props;

    const nodo = (
      <Container>
        <ContentContainer>
          <Subheader>Género</Subheader>
          <Text>{genre === 'M' ? 'Masculino' : 'Femenino'}</Text>
          <Subheader>Fecha de nacimiento</Subheader>
          <Text>{birthdate}</Text>
          <Subheader>Peso</Subheader>
          <Text>{height}</Text>
          <Subheader>Altura</Subheader>
          <Text>{weight}</Text>
          {
            extras && (
              <div>
                <Subheader>Cuidados especiales</Subheader>
                <Text>{extras}</Text>
              </div>
            )
          }
          <Subheader>Nombre del tutor</Subheader>
          <Text>{tuthorFirstSurname} {tuthorSecondSurname} {tuthorName}</Text>
          <Subheader>Género del tutor</Subheader>
          <Text>{tuthorGenre === 'M' ? 'Masculino' : 'Femenino'}</Text>
          <Subheader>Numero de teléfono</Subheader>
          <Text>{phone}</Text>
          <Subheader>Correo electronico</Subheader>
          <Text>{email}</Text>
        </ContentContainer>
        <Image src={image} />
      </Container>
    );

    const actions = (
      <ActionsContainer>
        <Button className={classes.close} onClick={() => { setDialog(); }}>Cerrar</Button>
        <Button variant="contained" className={classes.send} onClick={() => { setDialog(); reportDialog(); }}>
          Crear reporte a alumno
        </Button>
      </ActionsContainer>
    );

    return (
      <DialogGeneral
        title={`${firstSurname} ${secondSurname} ${name}`}
        node={nodo}
        nodeActions={actions}
        open={open}
        setDialog={setDialog}
      />
    );
  }
}

InfantDetail.propTypes = {
  infant: PropTypes.object,
  classes: PropTypes.object,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
  reportDialog: PropTypes.func,
};

export default withStyles(styles)(InfantDetail);
