import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import postsModule from './modules/posts';
import dashboardModule from './modules/dashboard';
import accountsModule from './modules/accounts';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(postsModule);
app.loadModule(dashboardModule);
app.loadModule(accountsModule);
app.init();
