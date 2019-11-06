import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import ProductPage from './routes/ProductPage/ProductPage'


/*
  1、BrowserRouter：浏览器的路由方式，也就是在开发中最常使用的路由方式

  2、HashRouter：在路径前加入#号成为一个哈希值，Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径

  3、MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化

  4、NativeRouter：经常配合ReactNative使用，多用于移动端

  5、StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用


  https://www.cnblogs.com/zhangrenjian/p/8964487.html  Router History 实现


  https://www.jianshu.com/p/ed5e56994f13?from=timeline  Switch 多匹配的情况下，优先渲染先匹配到的路由

*/

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Product" exact component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
