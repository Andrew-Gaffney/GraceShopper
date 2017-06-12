import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_ORDER_PRODUCTS, CREATE_NEW_ORDER} from '../constants';
import axios from 'axios';

export const receiveOrders = orders => {
  return ({
    type: RECEIVE_ORDERS,
    orders
  });
};

export const receiveOrder = order => {
  return ({
    type: RECEIVE_ORDER,
    order
  });
};

export const receiveOrderProducts = orderProducts => {
  return ({
    type: RECEIVE_ORDER_PRODUCTS,
    orderProducts
  });
};

export const createNewOrder = userId => {
  return ({
    type: CREATE_NEW_ORDER,
    userId
  });
};

export const newOrderCreator = userId => dispatch => {
  axios.post('/api/orders', {userId})
    .then( res => res.data )
    .then( order => {
      dispatch(createNewOrder(order));
    })
    .catch(err => {console.error(err);});
};

export const getOrderProductsByOrderId = orderId => dispatch => {
  axios.get(`/api/orders/${orderId}`)
    .then( res => res.data )
    .then( orderProducts => {
      dispatch(receiveOrderProducts(orderProducts));
    })
    .catch(err => {console.error(err);});
};

export const getOrdersByUserId = userId => dispatch => {
  axios.get(`/api/orders/user/${userId}`)
    .then( res => res.data )
    .then( orders => {
      dispatch(receiveOrders(orders));
    })
    .catch(err => {console.error(err);});
};

export const getOrderById = orderId => dispatch => {
  axios.get(`/api/orders/${orderId}`)
    .then( res => res.data )
    .then( order => {
      dispatch(receiveOrder(order));
    })
    .catch(err => {console.error(err);});
};