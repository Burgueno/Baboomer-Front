export default {
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 1201,
    color: '#000',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.04)',
  },
  drawer: {
    width: 204,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 204,
    borderRight: 'none',
    backgroundColor: '#FBF9FF',
  },
  content: {
    flexGrow: 1,
  },
  rootToolbar: {
    justifyContent: 'space-between',
  },
  toolbar: {
    minHeight: 64,
  },
  primary: {
    color: '#485071',
    fontFamily: 'CircularStd',
    fontSize: '14px',
    fontWeight: 300,
    letterSpacing: '0.5px',
    lineHeight: '17px',
    textAlign: 'left',
  },
  rootList: {
    // paddingTop: '16px',
    // paddingBottom: '16px',
    '&:hover': {
      backgroundColor: 'rgba(72, 215, 190, 0.1599999964237213)',
    },
  },
};
