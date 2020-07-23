/**
 *
 * Infants
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
import makeSelectInfants from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import CrudList from '../../components/CrudList';
import * as InfantsActions from './actions';
import InfantDetail from '../../components/InfantDetail';
import NewReport from '../../components/NewReport';
import CreateInfantDialog from '../../components/CreateInfantDialog';


import {
  Container,
  Title,
  ContentContainer,
} from './styledComponents';

export class Infants extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      infants: {
        infantsList,
        dialogOpen,
        dialogDetailsOpen,
        dialogReportOpen,
        currentInfant,
      },
      setDialog,
      setDialogDetails,
      setDialogReport,
      setCurrentInfant,
      InputSetMessage,
      SetReportType,
      CreateReport,
    } = this.props;
    console.log();
    return (
      <Container>
        <Title>Infantes</Title>
        <ContentContainer>
          <CrudList
            data={infantsList}
            setDialog={setDialogDetails}
            setCurrentItem={setCurrentInfant}
          />
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
        <CreateInfantDialog
          open={dialogOpen}
          setDialog={setDialog}
        />
        <InfantDetail
          infant={currentInfant}
          open={dialogDetailsOpen}
          setDialog={setDialogDetails}
          reportDialog={setDialogReport}
        />
        <NewReport
          infant={currentInfant}
          open={dialogReportOpen}
          setDialog={setDialogReport}
          setType={SetReportType}
          setMessage={InputSetMessage}
          CreateReport={CreateReport}
        />
      </Container>
    );
  }
}

Infants.propTypes = {
  infants: PropTypes.object,
  classes: PropTypes.object,
  setDialog: PropTypes.func,
  setDialogDetails: PropTypes.func,
  setDialogReport: PropTypes.func,
  setCurrentInfant: PropTypes.func,
  InputSetMessage: PropTypes.func,
  SetReportType: PropTypes.func,
  CreateReport: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  infants: makeSelectInfants(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(InfantsActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'infants', reducer });
const withSaga = injectSaga({ key: 'infants', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(Infants);
