
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


export const CustomListItem = styled(ListItem)`
  &:hover {
    background: blue;
  }
`;

export const CustomListItemSecondaryAction = styled(ListItemSecondaryAction)`
  display: none;
  ${CustomListItem}:hover & {
    display: block;
  }
`;
