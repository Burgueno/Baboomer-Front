/**
*
* CrudList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import CrudItem from './CrudItem';

class CrudList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      data,
      setDialog,
      setCurrentItem,
    } = this.props;
    return (
      <List dense className={classes.root}>
        {
          data.map((item) => (
            <div>
              <CrudItem
                item={item}
                setDialog={setDialog}
                setCurrentItem={setCurrentItem}
              />
            </div>
          ))
        }
      </List>
    );
  }
}

CrudList.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
  setDialog: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

export default withStyles(styles)(CrudList);
