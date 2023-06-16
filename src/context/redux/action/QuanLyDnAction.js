
import StartFireBase from '../../../components/fireBase/fireBaseconfig';
import { onValue, ref, set, update, push, child } from 'firebase/database'
import { async } from '@firebase/util';
const db = StartFireBase();
let refer = 'DienNuoc'
// const refer1 = ''
const ref2 = 'CaiDat'
const ref3 = 'SetUp'
const ref4 = 'Value'
const ref5 = 'SetUp/HanMuc'
const ref6 = 'Total'
// const ref5 = 'Status'
const dataref = [{
  date: 'Total/Thang1',

},
{
  date: 'Total/Thang2',

},
{
  date: 'Total/Thang3',

},
{
  date: 'Total/Thang4',

},
{
  date: 'Total/Thang5',

},

{
  date: 'Total/Thang7',

},

{
  date: 'Total/Thang8',

},
{
  date: 'Total/Thang9',

},
{
  date: 'Total/Thang10',

},
{
  date: 'Total/Thang11',

},
{
  date: 'Total/Thang12',

},


]
// export const WeatherAction=()=>{
//   return async dispatch =>{
//     try {
//       const result  = await axios {
//         method:'get',
//         url:``
//       }
//     } catch (error) {
      
//     }
//   }
// }
export const QuanLyDienNuocAction = () => {


  return async dispatch => {
    try {
      const dbRef = ref(db, refer);
      onValue(dbRef, (snapshot) => {
        let records = []
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();

          records.push({ 'key': keyName, 'data': data })

          // console.log('records',records.key);
        },

        );

        dispatch({
          type: 'LAY_THONG_TIN_DN',
          dienNuoc: records
        })
      }

      )


    } catch (error) {

    }
  }
}
export const QuanLyDienNuocThangAction = () => {
  const records = []

  return async dispatch => {
    try {
      // dataref.map((refer1) => {

      //     const dbRef = ref(db, refer1.date);

      //     onValue(dbRef, (snapshot) => {

      //       snapshot.forEach((childSnapshot) => {
      //         let keyName = childSnapshot.key;
      //         let data = childSnapshot.val();
      //         // console.log(data)
      //         records.push({ 'key': keyName, 'data': data })


      //       },

      //       );


      //     }

      //     ) 


      //   } 

      //   )
      const dbRef = ref(db, ref6);
      onValue(dbRef, (snapshot) => {
        let records = []
        snapshot.forEach((childSnapshot) => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();

          records.push({ 'key': keyName, 'data': data })

          dispatch({
        type: 'LAY_THONG_TIN_DN_M',
        dienNuocM: records
      })
        },

        );


      }

      )
    



    } catch (error) {

    }

  }


}
export const CaiDatThoiGianAction = (values) => {
  return async dispatch => {
    try {



      set(ref(db, ref2), {
        gio: values.gio,
        phut: values.phut,

      });


    } catch (error) {

    }
  }
}
export const CaiDatVlaueAction = (values) => {
  // const newPostkey = push(child(ref(db), 'SetUp/CaiDat')).key
  // console.log('key',newPostkey);
  const updateData =
  {
    '/HanMuc': values.hanMuc,

  }
  return async dispatch => {
    try {
      const updates = {}

      update(ref(db, ref3), updateData);


    } catch (error) {

    }
  }
}
export const CaiDatPhoneAction = (values) => {
  // const newPostkey = push(child(ref(db), 'SetUp/CaiDat')).key
  // console.log('key',newPostkey);
  const updateData =
  {
    '/Phone': values.phone,

  }
  return async dispatch => {
    try {
      const updates = {}

      update(ref(db, ref3), updateData);


    } catch (error) {

    }
  }
}
export const HanMucAction = () => {

  return async dispatch => {
    try {
      const dbRef = ref(db, ref3);

      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data.HanMuc);
        dispatch({
          type: 'LAY_THONG_TIN_HM',
          hanMuc1: data.HanMuc
        })
      });
    } catch (error) {

    }
  }
}
export const ActionsStatus = (values) => {
  const updateData =
  {
    '/Status': values,

  }
  return async dispatch => {
    try {
      const updates = {}

      update(ref(db, ref3), updateData);


    } catch (error) {

    }
  }
}
export const ValueNowAction = () => {
  return async dispatch => {
    try {
      const dbRef = ref(db, ref4);
      // onValue(dbRef, (snapshot) => {
      //   let records = []
      //   snapshot.forEach((childSnapshot) => {
      //     let keyName = childSnapshot.key;
      //     let data = childSnapshot.val();

      //     records.push({ 'key': keyName, 'data': data })

      //   },

      //   );

      //   dispatch({
      //     type:'LAY_THONG_TIN_NOW',
      //     dnNow:records
      //   })
      // }

      // )
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        dispatch({
          type: 'LAY_THONG_TIN_NOW',
          dnNow: data
        })
      });

    } catch (error) {

    }
  }
}

