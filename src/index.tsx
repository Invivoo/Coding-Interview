import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import { getLocalizedResources } from './locales/localeConfiguration';
import { Provider } from 'react-redux';
import { create } from './store';
import { appReducer } from './appReducer';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { ROOT_ROUTE } from './route';

const history = createHistory();
const localizedResources = getLocalizedResources(history);

ReactDOM.render(
  (
    <Provider store={create(appReducer, history)} >
      <IntlProvider locale={localizedResources.language} messages={localizedResources.messages}>
        <ConnectedRouter history={history}>
          <Route path={ROOT_ROUTE} component={App} />
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
