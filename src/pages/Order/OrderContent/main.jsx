import React from 'react'
import PropTypes from 'prop-types'
import OrderBody from '../../../components/Order/OrderBody/orderBody'
import OrderDetail from './OrderDetail/orderDetail';

function OrderContent(props) {
    return (
        <>
            <OrderBody/>
            <OrderBody/>
            <OrderBody/>
            <OrderBody/>
            {/* <OrderDetail/> */}
        </>
    )
}

OrderContent.propTypes = {

}

export default OrderContent

