import React, { FunctionComponent, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/client';

import Table from './Table/Table';
import CreateUserDialog from './Dialog/CreateUserDialog';
import { GET_USERS } from './queries';
import { User } from '../model/user';

const useStyles = makeStyles(theme => ({}));

const Layout: FunctionComponent = (): ReactElement  => {
  const classes = useStyles();
  const [createUserDialogOpen, setCreateUserDialogOpen] = React.useState(false);
  const { loading, error, data } = useQuery(GET_USERS);
  const rows = data?.getUsers || [];

  const handleClickOpen = () => {
    setCreateUserDialogOpen(true);
  };

  const handleClose = () => {
    setCreateUserDialogOpen(false);
  };

  const handleSave = (user: User) => {
    setCreateUserDialogOpen(false);
  };

  return (
    <div>
      <Table rows={rows} />
      <Button color="primary" onClick={handleClickOpen}>
        Create User
      </Button>
      <CreateUserDialog
        open={createUserDialogOpen}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
}

export default Layout;