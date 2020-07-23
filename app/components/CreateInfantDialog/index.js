/**
*
* CreateInfantDialog
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DialogGeneral from '../../components/DialogGeneral';
import {
  Container,
  Half,
  Full,
  ActionsContainer,
} from './styledComponents';


class CreateInfantDialog extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    genre: '',
    genreT: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      classes,
      open,
      setDialog,
    } = this.props;

    const nodo = (
      <Container>
        <Full>
          <TextField
            id="name"
            label="Nombre"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Full>
        <Half>
          <TextField
            id="firstSurname"
            label="Apellido paterno"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <TextField
            id="secondSurname"
            label="Apellido materno"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <Select
            value={this.state.genre}
            onChange={this.handleChange}
            input={<Input name="genre" id="genre-label-placeholder" />}
            displayEmpty
            name="genre"
            className={classes.selectRoot}
          >
            <MenuItem value="" disabled className={classes.menuItemRoot}>
              <em>Género</em>
            </MenuItem>
            <MenuItem value className={classes.menuItemRoot}>Masculino</MenuItem>
            <MenuItem value={false} className={classes.menuItemRoot}>Femenino</MenuItem>
          </Select>
        </Half>
        <Half>
          <TextField
            id="birthdate"
            label="Fecha de nacimiento"
            type="date"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <TextField
            id="weight"
            label="Peso"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <TextField
            id="height"
            label="Altura"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Full>
          <TextField
            id="tuthorName"
            label="Nombre del tutor"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Full>
        <Half>
          <TextField
            id="tuthorFirstSurname"
            label="Apellido paterno del tutor"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <TextField
            id="tuthorSecondSurname"
            label="Apellido materno del tutor"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
        <Half>
          <Select
            value={this.state.genreT}
            onChange={this.handleChange}
            input={<Input name="genreT" id="genreT-label-placeholder" />}
            displayEmpty
            name="genreT"
            className={classes.selectRoot}
          >
            <MenuItem value="" disabled className={classes.menuItemRoot}>
              <em>Género</em>
            </MenuItem>
            <MenuItem value className={classes.menuItemRoot}>Masculino</MenuItem>
            <MenuItem value={false} className={classes.menuItemRoot}>Femenino</MenuItem>
          </Select>
        </Half>
        <Half>
          <TextField
            id="tuthorPhone"
            label="Telefono del tutor"
            fullWidth
            className={classes.textField}
            margin="normal"
            InputLabelProps={{
              shrink: true,
              className: classes.menuItemRoot,
            }}
            InputProps={{
              className: classes.menuItemRoot,
            }}
          />
        </Half>
      </Container>
    );

    const actions = (
      <ActionsContainer>
        <Button className={classes.close} onClick={() => { setDialog(); }}>Cerrar</Button>
        <Button variant="contained" className={classes.send}>
          Guardar
        </Button>
      </ActionsContainer>
    );

    return (
      <DialogGeneral
        title={'Nuevo infante'}
        node={nodo}
        nodeActions={actions}
        open={open}
        setDialog={setDialog}
      />
    );
  }
}

CreateInfantDialog.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
};

export default withStyles(styles)(CreateInfantDialog);
