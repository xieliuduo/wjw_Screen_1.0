const common = {
  state: {
    // district: 'china',
    controlLeftNavnum: '全国'
  },
  mutations: {
    // mutationsDistrict (state, payload) {
    //   state.district = payload.district
    // },
    mutationsLeftNavnum (state, payload) {
      state.controlLeftNavnum = payload.controlLeftNavnum
    }
  },

  actions: {
    // 获取所有枚举值
    // changeDistrict ({ commit }) {
    //   let data = {district: 'hebei'};
    //   commit('mutationsDistrict', data)
    // },
    // 获取默认的 左边地图的选项
    getDefaultMapMenu ({ commit }, controlLeftNavnum) {
    //   let data = {controlLeftNavnum: '全国'};
      commit('mutationsLeftNavnum', { controlLeftNavnum })
    }
  }
}
export default common
