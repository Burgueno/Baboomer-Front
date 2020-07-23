/**
 *
 * LayoutHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Group from '@material-ui/icons/Group';
import WorkOutline from '@material-ui/icons/WorkOutline';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Switch, Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Releases from 'containers/Releases/Loadable';
import Infants from 'containers/Infants/index';
import Staff from 'containers/Staff/index';
import makeSelectLayoutHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import { Container, WorkArea, AppBarTitle, ProfileContainer, Name } from './styledComponents';
import * as LayoutHomeActions from './actions';
import PrivateRoute from '../../utils/PrivateRoute';


export class LayoutHome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    anchorEl: null,
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      classes,
      location,
      layouthome: { menu },
      drawerClick,
      logOut,
    } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const icon = [
      <CalendarToday />,
      <Group />,
      <WorkOutline />,
    ];
    return (
      <Container>
        <AppBar position={'fixed'} className={classes.appBar}>
          <Toolbar className={classes.rootToolbar}>
            <AppBarTitle>Estancia Infantil Angel</AppBarTitle>
            <ProfileContainer>
              <Name>Direccion</Name>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => { logOut(); }}>Cerrar sesión</MenuItem>
              </Menu>
            </ProfileContainer>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {menu.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={drawerClick(item.id, item.url)}
                className={classes.rootList}
                disableRipple
              >
                <ListItemIcon>
                  {icon[item.id]}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  classes={{
                    primary: classes.primary,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <WorkArea
          inicio={find(menu, 'status').fullScreen}
        >
          <div className={classes.toolbar} />
          <Switch location={location}>
            <PrivateRoute
              path="/releases"
              component={Releases}
            />
            <PrivateRoute
              path="/infants"
              component={Infants}
            />
            <PrivateRoute
              path="/staff"
              component={Staff}
            />
            <Redirect from="/" to="/releases" />
          </Switch>
        </WorkArea>
      </Container>
    );
  }
}

LayoutHome.propTypes = {
  layouthome: PropTypes.object,
  dispatch: PropTypes.func.isRequired, // eslint-disable-line
  classes: PropTypes.object,
  location: PropTypes.object,
  drawerClick: PropTypes.func,
  logOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  layouthome: makeSelectLayoutHome(),
});

function mapDispatchToProps(dispatch, ownProps) {
  const actions = bindActionCreators(LayoutHomeActions, dispatch);
  return {
    dispatch,
    ...actions,
    drawerClick: (itemIndex, url) => () => {
      const currentUrl = ownProps.match.url.slice(-1) === '/' ? ownProps.match.url.slice(0, -1) : ownProps.match.url;
      dispatch(actions.drawerActive(itemIndex));
      dispatch(push(currentUrl + url));
    },
    logOut: () => {
      dispatch(push('/sign_in'));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'layoutHome', reducer });
const withSaga = injectSaga({ key: 'layoutHome', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(LayoutHome);
