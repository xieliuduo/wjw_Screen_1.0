import fetch from 'utils/fetch'
import store from '../store'

  
  // 首页 签约情况
  export function homeContract(){
    return fetch({
      url: '/wjw-big-screen/get-contract',
      method: 'get',
      params: store.getters.curArea
    })
  };
  // 首页 履约情况
  export function homeGetService(){
    return fetch({
      url: '/wjw-big-screen/get-service',
      method: 'get',
      params: store.getters.curArea
    })
  }
  
  // 公共 入驻信息
  export function homeGetSettled(){
    return fetch({
      url: '/wjw-big-screen/get-settled',
      method: 'get',
      params: store.getters.curArea
    })
  }


