/**
 *
 * Releases
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import makeSelectReleases from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import Card from '../../components/Card';
import * as ReleasesActions from './actions';
import NewRelease from '../../components/NewRelease';
import {
  Container,
  Title,
  ContentContainer,
  ChipContainer,
} from './styledComponents';

export class Releases extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      releases: {
        releasesList,
        chips,
        selectedChip,
        dialogOpen,
      },
      setChip,
      setDialog,
      InputSetMessage,
      CreateRelease,
    } = this.props;

    return (
      <Container>
        <Title>Comunicados y Notificaciones</Title>
        <ChipContainer>
          {
            chips.map((item) => (
              <Chip
                label={item}
                className={item === selectedChip ? classes.chipSelected : classes.chip}
                clickable
                onClick={() => setChip(item)}
              />
            ))
          }
        </ChipContainer>
        <ContentContainer>
          {
            releasesList.map((item) => (
              (selectedChip === 'Comunicados' && item.type === 0) &&
                <Card
                  author={item.author}
                  date={item.date}
                  message={item.message}
                  image={item.image}
                />
            ))
          }
          {
            releasesList.map((item) => (
              (selectedChip === 'Notificaciones' && item.type > 0) &&
                <Card
                  author={item.author}
                  date={item.date}
                  message={item.message}
                  image={item.image}
                />
            ))
          }
          <Button
            variant="extendedFab"
            aria-label="Add"
            className={classes.fab}
            focusVisibleClassName={classes.contained}
            classes={{ focusVisible: classes.contained }}
            onClick={() => { setDialog(); }}
          >
            <AddIcon />
            Nuevo
          </Button>
        </ContentContainer>
        <NewRelease
          open={dialogOpen}
          setDialog={setDialog}
          setMessage={InputSetMessage}
          CreateRelease={CreateRelease}
        />
      </Container>
    );
  }
}

Releases.propTypes = {
  releases: PropTypes.object,
  classes: PropTypes.object,
  setChip: PropTypes.func,
  setDialog: PropTypes.func,
  InputSetMessage: PropTypes.func,
  CreateRelease: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  releases: makeSelectReleases(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(ReleasesActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'releases', reducer });
const withSaga = injectSaga({ key: 'releases', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(Releases);
