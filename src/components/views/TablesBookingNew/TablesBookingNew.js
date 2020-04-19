import React from 'react';
import styles from './TablesBookingNew.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h2>Make new booking</h2>
    <form noValidate autoComplete="off">
      <TextField className={styles.textField} id="standard-basic" label="First name, last name" />
    </form>
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30 </MenuItem>
      </Select>
    </FormControl>
    <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
      Submit
    </Button>
  </div>
);

export default TablesBookingNew;
