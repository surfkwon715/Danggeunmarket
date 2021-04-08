
import axios from "axios";
import {useState} from 'react';

//Action
const LOAD = "item/LOAD";
const CREATE = "item/CREATE";

const initialState ={
    item_list:[{
        title:"노트북", 
        contents:"싸게 팔아요"
    }]
}

//Action Creators
export const loadItem = (item_list)=>{
    return {type:LOAD, item_list};
}

export const createItem = (item)=> {
    return { type: CREATE, item };
};
  
export const getItemListSV = ()=>{ 
    return function(dispatch){
        const [ResData, setData] = useState(initialState);
        const Load =()=>{
            axios(
                {
                method: 'get',
                url:"http://15.165.77.77:8080/api/boards" ,
                data:{},
                }
            ).then((response)=>{
                setData(response.data)
              }).catch(error=>{
                  console.log(error);
              })
            }
            dispatch(loadItem(ResData))
        };
};


// export const addItemSV = (item) => {
//     return function(dispatch){
//         // const [itemList, setList] = useState(null);
//         const Create =()=>{
//             axios(
//             {
//                 method: 'get',
//                 url:"http://15.165.77.77:8080/api/boards/3" ,
//                 data:{
//                 },
//               })
//               .then((response)=>{
//                 dispatch(createItem(response))
//                 //데이터 내려오는 형태에 맞춰서 조정
//                 // setList({title:response.data.title, contents:response.data.contents});
//               }).catch(error=>{
//                   console.log(error);
//               })
//             }
//         React.useEffect(()=>{Create();
//         },[])
//     };
// };



//Reducer
export default function reducer(state= initialState,action={}){

    switch(action.type){
        case "item/LOAD":
            return {...state.item_list, item_list: action.item_list} //action.item-list?   
            
        case "word/CREATE":
            // 받아온 데이터를 추가한 새 리스트 만들기
            const new_item_list = [...state.item_list, action.item];
            
            //   state를 갈아끼워요
            return { ...state, item_list: new_item_list }; 
        
        default:
            return state;
    }



}