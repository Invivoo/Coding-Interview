import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';

export const create = (mainReducer: Reducer<{}>, history: History) => {

    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares: Array<Middleware> = [reactRouterMiddleware];

    if (process.env.NODE_ENV !== `production`) {
        const { logger } = require(`redux-logger`);
        middlewares.push(logger);
    }

    return createStore(mainReducer, applyMiddleware(...middlewares));
};