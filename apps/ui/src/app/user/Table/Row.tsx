import React, { FunctionComponent, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { User } from '../../model/user';

const useStyles = makeStyles(theme => ({}));

interface RowProps {
  row: User;
}

const Row: FunctionComponent<RowProps> = ({ row }): ReactElement  => {
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.name}</TableCell>
      <TableCell align="right">{row.dateOfBirth}</TableCell>
      <TableCell align="right">{row.department}</TableCell>
      <TableCell align="right">{row.status}</TableCell>
      <TableCell />
    </TableRow>
  );
}

export default Row;