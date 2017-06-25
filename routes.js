// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/usage',
      name: 'usage',
      getComponent(nextState, cb) {
        import('containers/UsagePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      }, {
      path: '/reviews',
      name: 'reviews',
      getComponent(nextState, cb) {
        import('containers/ReviewsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      }, {
      path: '/productGoals',
      name: 'productGoals',
      getComponent(nextState, cb) {
        import('containers/ProductGoalsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      }, {
      path: '/alerts',
      name: 'alerts',
      getComponent(nextState, cb) {
        import('containers/AlertsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      }, {
      path: '/alerts',
      name: 'alerts',
      getComponent(nextState, cb) {
        import('containers/AlertsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
      }, {
      path: '/myAccounts',
      name: 'myAccounts',
      getComponent(nextState, cb) {
        import('containers/MyAccountsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
   
      }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
