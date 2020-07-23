/**
*
* CrudItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  CustomListItem,
  CustomListItemSecondaryAction,
} from './styledComponents';


class CrudItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      item,
      setDialog,
      setCurrentItem,
    } = this.props;
    return (
      <CustomListItem
        button
        selected
        className={classes.rootList}
        disableRipple
      >
        <ListItemAvatar>
          <Avatar alt={'item.id'} src={item.image} />
        </ListItemAvatar>
        <ListItemText disableTypography primary={`${item.firstSurname} ${item.secondSurname} ${item.name}`} className={classes.rootText} onClick={() => { setDialog(); setCurrentItem(item); }} />
        <CustomListItemSecondaryAction>
          <IconButton className={classes.editButton} aria-label="Edit" disableRipple>
            <EditIcon />
          </IconButton>
          <IconButton className={classes.deleteButton} aria-label="Delete" disableRipple>
            <DeleteIcon />
          </IconButton>
        </CustomListItemSecondaryAction>
      </CustomListItem>
    );
  }
}

CrudItem.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  setDialog: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

export default withStyles(styles)(CrudItem);
