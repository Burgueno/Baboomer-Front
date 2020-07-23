/**
 *
 * Staff
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import makeSelectStaff from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import CrudList from '../../components/CrudList';
import {
  Container,
  Title,
  ContentContainer,
} from './styledComponents';

export class Staff extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      staff: {
        staffList,
      },
    } = this.props;

    return (
      <Container>
        <Title>Personal</Title>
        <ContentContainer>
          <CrudList
            data={staffList}
          />
        </ContentContainer>
      </Container>
    );
  }
}

Staff.propTypes = {
  staff: PropTypes.object,
  // classes: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  staff: makeSelectStaff(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'staff', reducer });
const withSaga = injectSaga({ key: 'staff', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(Staff);
