/**
*
* DialogGeneral
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DialogGeneral extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      open,
      setDialog,
      title,
      node,
      nodeActions,
      classes,
    } = this.props;
    return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => { setDialog(); }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" disableTypography className={classes.title}>
          {title}
        </DialogTitle>
        <Divider variant="inset" className={classes.dividerRoot} />
        <DialogContent className={classes.contentRoot}>
          {node}
        </DialogContent>
        <Divider variant="inset" className={classes.dividerRoot} />
        <DialogActions>
          {nodeActions}
        </DialogActions>
      </Dialog>
    );
  }
}

DialogGeneral.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  node: PropTypes.element,
  nodeActions: PropTypes.element,
  open: PropTypes.bool,
  setDialog: PropTypes.func,
};

export default withStyles(styles)(DialogGeneral);
