import React, { Component } from 'react'
import { withRouter, Link, routerRedux } from 'dva/router'
import * as api from '../services/example'

class Product extends Component {

  componentDidMount() {
    api.getProduct()
      .then(res => {
        console.log(res)
      })
  }


  /*
    action 的格式如下，它需要有一个 type ，表示这个 action 要触发什么操作；payload 则表示这个 action 将要传递的数据

    Action
    Action 表示操作事件，可以是同步，也可以是异步
    {
      type: String,
      payload: data
    }
    格式
    dispatch(Action);
    dispatch({ type: 'todos/add', payload: 'Learn Dva' });

  */

  clickProductList = (event) => {

    console.log(this.props)

    const currentProdcut = {
      name: '3333'
    }

    this.props.dispatch({
      //  product/updateList  product是model中的nameSpace   updateList相当于redux中的action type的reducer
      type: "product/updateList",
      payload: currentProdcut
    })
  }

  clickProductListAsync = () => {

    const currentProdcut = {
      name: '444Async'
    }

    this.props.dispatch({

      type: 'product/updateListAsync',
      payload: currentProdcut,

    })

  }

  clickProductListHttp = () => {

    this.props.dispatch({

      type: 'product/updateListHttp',
      payload: { id: 1001 },

    })

  }


  clicGoToHandle = () => {

    // routerRedux

    this.props.history.push('/')
  }

  clickRouterReduxHandle = (event) => {

    this.props.dispatch(routerRedux.push('/'))

  }

  render() {

    const { productList } = this.props.productList


    return (
      <div>
        商品： { this.props.title }
        <ul>
          {
            productList.map((ele, index) => {
              return <li key={index} >{ ele.name }</li>
             })
          }
        </ul>
        <button onClick={ this.clickProductList } >获取商品列表</button>
        <button onClick={ this.clickProductListAsync } >获取商品列表Async</button>
        <button onClick={ this.clickProductListHttp } >获取商品列表Http</button>
        <Link to='/' >去首页Link</Link>
        <button onClick={ this.clicGoToHandle } >去首页this.props.history.push('/')</button>
        <button onClick={ this.clickRouterReduxHandle } >去首页this.props.dispatch(routerRedux.push('/'))</button>

      </div>
    )
  }
}

export default withRouter(Product) // 将该子组件挂载到Router实例中
