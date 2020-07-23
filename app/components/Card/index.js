/**
*
* Card
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
  Container,
  ContentContainer,
  // AvatarCustom,
  Header,
  Title,
  Date,
  Message,
  Image,
} from './styledComponents';


class Card extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      author,
      date,
      message,
      image,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <Container>
          <Avatar className={classes.avatar}>{author.charAt(0)}</Avatar>
          <ContentContainer>
            <Header>
              <Title>{author}</Title>
              <Date>{date}</Date>
            </Header>
            <Message>{message}</Message>
            { image && <Image src={image} /> }
          </ContentContainer>
        </Container>
      </Paper>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object,
  author: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.string,
};

export default withStyles(styles)(Card);
