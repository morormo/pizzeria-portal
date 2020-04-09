import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Tables extends React.Component {
  render() {
    const{ id } =this.props;
    return(
      <div className={styles.component}>
        <h2>Tables view</h2>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/:${id}`} activeClassName="active">Tables/booking/:{id}</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName="active">Tables/booking/new</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/:${id}`} activeClassName="active">Tables/events/:{id}</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName="active">Tables/booking/new</Link>
      </div>
    );
  }
}

Tables.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Tables;
