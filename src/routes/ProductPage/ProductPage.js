// Rncs rccp rcfc  rccp
import React, { Component } from 'react'

import { connect } from 'dva'

import Product from '../../components/Product'

class IndexPage extends Component {

  render() {

    console.log(this.props)

    /*
      dispatch: ƒ (action)
      history: {length: 3, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
      location: {pathname: "/Product", search: "", hash: "", state: undefined}
      match: {path: "/Product", url: "/Product", isExact: true, params: {…}}
      productList:
      productList: (2) [{…}, {…}]
      __proto__: Object
      staticContext: undefined
      __proto__: Object

    */

    const { productList } = this.props
    const dispatch = this.props.dispatch
    const history = this.props.history

    /*

      productList: Array(2)
      0: {name: "1111"}
      1: {name: "2222"}

    */

    return (
      <div>
        <Product  dispatch={dispatch} history={history}  title="商品类型" productList={ productList }  />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

    //  state.product  product是dva的命名空间  state.product  

    /*
      state.product === {
          productList: [
            {
              name: '1111'
            },
            {
              name: '2222'
            },
          ]
        },

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
    
    */

    productList: state.product
  }
}

export default connect(mapStateToProps)(IndexPage)
