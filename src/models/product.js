import * as api from '../services/example'

export default {
  namespace: "product",

  state: {
    productList: [
      {
        name: '1111'
      },
      {
        name: '2222'
      },
    ]
  },

  reducers: {
    updateList(state, action) { // product/updateList
      let currentProductList = deepClone(state) // 将state进行深度Clone
      currentProductList.productList.push(action.payload)
      return currentProductList
    }
  },

  effects: {

    *updateListAsync({ payload: todo }, { put, call }) {

      // put  用来发起一条action
      // call 以异步的方式调用函数

      // yield call(delay, 2000)
      // yield call(addTodo, todo)

      yield put({
        type: 'updateList',
        payload: todo // 参数
      })
    },

    *updateListHttp ({ payload }, { put, call }) {

      // 网络请求
      const request = yield call(api.getProduct, payload) // 以异步的方式调用函数 异步处理完后，再进行put的action
      const data = request.data //
      if (data) {
        yield put({
          type: 'updateList',
          payload: data
        })
      }
    }
  },

  /*

    subscriptions 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action
    数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、
    geolocation 变化、history 路由变化等等
    格式为 ({ dispatch, history }) => unsubscribe

    #异步数据初始化

    比如：当用户进入 /users 页面时，触发 action users/fetch 加载用户数据

     subscriptions: {
        setup({ dispatch, history }) {
          history.listen(({ pathname }) => {
            if (pathname === '/users') {
              dispatch({
                type: 'users/fetch',
              });
            }
          });
        },
      },


   */

  subscriptions: {

    setup({ dispatch, history }) {

      console.log(dispatch, history)

    }

  }

}

function deepClone(arr) {

  let _obj = JSON.stringify(arr)
  let objClone = JSON.parse(_obj)

  return objClone
}
