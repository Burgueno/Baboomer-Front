/**
*
* NewRelease
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DialogGeneral from '../../components/DialogGeneral';
import {
  Container,
  ActionsContainer,
} from './styledComponents';

class NewRelease extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      setDialog,
      open,
      setMessage,
      CreateRelease,
    } = this.props;

    const nodo = (
      <Container>
        <TextField
          id="mensaje"
          label="Mensaje"
          multiline
          fullWidth
          margin="normal"
          rows={6}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
            className: classes.menuItemRoot,
          }}
          InputProps={{
            className: classes.menuItemRoot,
          }}
          onChange={(event) => { setMessage(event.target.value); }}
        />
      </Container>
    );

    const actions = (
      <ActionsContainer>
        <Button className={classes.close} onClick={() => { setDialog(); }}>Cerrar</Button>
        <Button variant="contained" className={classes.send} onClick={() => { CreateRelease(); setDialog(); }}>
          Guardar
        </Button>
      </ActionsContainer>
    );
    return (
      <DialogGeneral
        title={'Nuevo comunicado'}
        node={nodo}
        nodeActions={actions}
        open={open}
        setDialog={setDialog}
      />
    );
  }
}

NewRelease.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
  setMessage: PropTypes.func,
  CreateRelease: PropTypes.func,
};

export default withStyles(styles)(NewRelease);
