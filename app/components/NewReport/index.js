/**
*
* NewReport
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import DialogGeneral from '../../components/DialogGeneral';
import {
  Container,
  ContentContainer,
  Subheader,
  Text,
  ActionsContainer,
  DescriptionContainer,
} from './styledComponents';


class NewReport extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    reportType: '',
  };

  handleChange = (event) => {
    const { setType } = this.props;
    this.setState({ [event.target.name]: event.target.value });
    setType(event.target.value);
  };

  render() {
    const {
      infant: {
        name,
        firstSurname,
        secondSurname,
      },
      classes,
      setDialog,
      open,
      setMessage,
      CreateReport,
    } = this.props;

    const nodo = (
      <Container>
        <ContentContainer>
          <Subheader>Para:</Subheader>
          <Text>{`${firstSurname} ${secondSurname} ${name}`}</Text>
          <Select
            value={this.state.reportType}
            onChange={this.handleChange}
            input={<Input name="reportType" id="reportType-label-placeholder" />}
            displayEmpty
            name="reportType"
            className={classes.selectRoot}
          >
            <MenuItem value="" disabled className={classes.menuItemRoot}>
              <em>Tipo de reporte</em>
            </MenuItem>
            <MenuItem value={1} className={classes.menuItemRoot}>Niño enfermo</MenuItem>
            <MenuItem value={2} className={classes.menuItemRoot}>Reporte de conducta</MenuItem>
          </Select>
        </ContentContainer>
        <DescriptionContainer>
          <TextField
            id="textarea"
            label="Descripcion"
            multiline
            fullWidth
            className={classes.textField}
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
        </DescriptionContainer>
      </Container>
    );

    const actions = (
      <ActionsContainer>
        <Button className={classes.close} onClick={() => { setDialog(); }}>Cerrar</Button>
        <Button variant="contained" className={classes.send} onClick={() => { CreateReport(); setDialog(); }}>
          Enviar a padres de familia
        </Button>
      </ActionsContainer>
    );

    return (
      <DialogGeneral
        title={'Nuevo reporte'}
        node={nodo}
        nodeActions={actions}
        open={open}
      />
    );
  }
}

NewReport.propTypes = {
  infant: PropTypes.object,
  classes: PropTypes.object,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
  setType: PropTypes.func,
  setMessage: PropTypes.func,
  CreateReport: PropTypes.func,
};

export default withStyles(styles)(NewReport);
