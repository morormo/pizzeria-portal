import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';


class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar dissableGutters>
              <PageNav />
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
        <Container maxWidth='lg'>
          <Toolbar />
          {children}
        </Container>
      </div>
    );
  }
}

export default MainLayout;
