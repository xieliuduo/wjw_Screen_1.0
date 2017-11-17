const getters = {
//   curMap: state => state.common.controlLeftNavnum
    curArea:state =>{
        if(state.common.controlLeftNavnum=='全国'){
            return {}
        }
        let areaArray = state.common.controlLeftNavnum.split('-');
        return {
            province:areaArray[0],
            city:areaArray[1],
            region:areaArray[2],
        }
    }
}
export default getters