import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Homepage from './components/views/HomePage/HomePage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesEventsId from './components/views/TablesEventsId/TablesEventsId';

import { Provider } from 'react-redux';
import WaiterContainer from './components/views/Waiter/WaiterContainer';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
  },
});

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter basename={'/panel'}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <Switch>
                  <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
                  <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                  <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
                  <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventsId} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={WaiterContainer} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
                  <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />

                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
