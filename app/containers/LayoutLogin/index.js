/**
 *
 * LayoutLogin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLayoutLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import image from '../../images/Baboomer_logo.png';
import * as LayoutLoginActions from './actions';
import {
  Container,
  LoginContainer,
  ImageContainer,
  LogoImage,
  Title,
  FormContainer,
} from './styledComponents';

export class LayoutLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      InputSetEmail,
      InputSetPassword,
      loginAction,
    } = this.props;
    console.log();
    return (
      <Container>
        <LoginContainer>
          <LogoImage src={image} />
          <Title>Bienvenido</Title>
          <FormContainer>
            <TextField
              id="user"
              placeholder={'Usuario'}
              fullWidth
              className={classes.textField}
              margin="normal"
              InputProps={{
                className: classes.inputRoot,
                disableUnderline: true,
              }}
              onChange={(event) => { InputSetEmail(event.target.value); }}
            />
            <TextField
              id="password"
              type="password"
              placeholder={'Contraseña'}
              fullWidth
              className={classes.textField}
              margin="normal"
              InputProps={{
                className: classes.inputRoot,
                disableUnderline: true,
              }}
              onChange={(event) => { InputSetPassword(event.target.value); }}
            />
            <div>
              <Button variant="contained" className={classes.send} onClick={() => { loginAction(); }}>
                Ingresar
              </Button>
            </div>
          </FormContainer>
        </LoginContainer>
        <ImageContainer />
      </Container>
    );
  }
}

LayoutLogin.propTypes = {
  // layoutlogin: PropTypes.object,
  classes: PropTypes.object,
  InputSetEmail: PropTypes.func,
  InputSetPassword: PropTypes.func,
  loginAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  layoutlogin: makeSelectLayoutLogin(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(LayoutLoginActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'layoutLogin', reducer });
const withSaga = injectSaga({ key: 'layoutLogin', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(LayoutLogin);
