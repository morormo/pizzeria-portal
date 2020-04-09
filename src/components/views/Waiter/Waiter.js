import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  render() {
    const{ id } =this.props;
    return(
      <div className={styles.component}>
        <h2>Waiter view</h2>
        <Link to={`${process.env.PUBLIC_URL}/waiter/booking/:${id}`} activeClassName="active">Waiter/booking/:{id}</Link>
        <Link to={`${process.env.PUBLIC_URL}/waiter/booking/new`} activeClassName="active">Waiter/booking/new</Link>
      </div>
    );
  }
}

Waiter.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Waiter;
