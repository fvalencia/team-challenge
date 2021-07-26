import React, { FunctionComponent, ReactElement, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DatePicker } from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { departments, statuses } from './constants';
import { User } from '../../model/user';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      width: '100%',
      margin: '10px 0'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    formField: {
      margin: '10px 0'
    }
  })
);

interface CreateUserDialogProps {
  open: boolean;
  handleClose: () => void
  handleSave: (user: User) => void
}

const CreateUserDialog: FunctionComponent<CreateUserDialogProps> = ({ open, handleClose, handleSave }): ReactElement  => {
  const classes = useStyles();
  const handleSubmit = () => {};

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [department, setDepartment] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleTextChange = (callbackFn: Function) => {
    return (event: React.ChangeEvent<{ value: unknown }>) => {
      console.log('pepe ' + event.target.value);
      callbackFn(event.target.value);
    };
  };

  const handleDepartmentChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setDepartment(event.target.value as string);
  };

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  const handleDateChange = (date: any) => {
    setDateOfBirth(date);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create User</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.formField}
          autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          onChange={handleTextChange(setName)}
          fullWidth
        />
        <TextField
          className={classes.formField}
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <DatePicker
          className={classes.formField}
          label="Date of Birth"
          id="dateOfBirth"
          fullWidth
          value={dateOfBirth}
          onChange={handleDateChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="department-label-id">
            Department
          </InputLabel>
          <Select
            labelId="department-label-id"
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            {departments.map(department => (
              <MenuItem key={department.id} value={department.id}>
                <em>{department.value}</em>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="status-label-id">
            Status
          </InputLabel>
          <Select
            labelId="status-label-id"
            id="status"
            value={status}
            onChange={handleStatusChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            {statuses.map(status => (
              <MenuItem key={status.id} value={status.id}>
                <em>{status.value}</em>
              </MenuItem>
            ))}
          </Select>
          {/* TODO: Peform Password Validation */}
          <TextField
            className={classes.formField}
            margin="dense"
            id="password"
            label="Password"
            type="text"
            fullWidth
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateUserDialog;