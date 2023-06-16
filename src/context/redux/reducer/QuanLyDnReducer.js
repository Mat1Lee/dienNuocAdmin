const InitializeState ={
  tableDataDefault :[],
  tableDataMonth:[],
  dataNow:[],
  arrUser:[],
  hanMuc :[]

}

export const QuanLyDienNuocReducer =(state=InitializeState,action)=>{
  switch (action.type) {
    case 'LAY_THONG_TIN_DN':
      state.tableDataDefault=action.dienNuoc
      return {...state}
    case 'LAY_THONG_TIN_DN_M':
      state.tableDataMonth=action.dienNuocM
      return {...state}
    case 'LAY_THONG_TIN_NOW':
      state.dataNow= action.dnNow
      // console.log(state.dataNow)
      return {...state}
    case 'LAY_THONG_TIN_HM':
      state.hanMuc= action.hanMuc1
      console.log(state.hanMuc)
      return {...state}
    default:
      return {...state}
  }

}