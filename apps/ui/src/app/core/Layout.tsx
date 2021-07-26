import React, { FunctionComponent, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

interface LayoutProps {
  children: ReactElement;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement  => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Users Admin
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}

export default Layout;