import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/product').default);

require('./models').default.forEach(key => app.model(key.default))


// 4. Router

// babel6+ 用require引 export default 导出的组件  还要加个require().default
/*

  或者使用 import Router from './router'

  app.router(Router)

*/
app.router(require('./router').default);

// 5. Start
app.start('#root');
