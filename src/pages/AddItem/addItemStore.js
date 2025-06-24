import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

const initialState = {
  values: {}, // 필드 늘어날 수 있으니 이건 그대로 객체로 관리, 구독할 땐 분해해서 원시타입으로 비교
  isFilled: {},
};

export const useAddItemStore = create((set) => {
  return {
    ...initialState,
    updateFieldValue: (name, value) => {
      return set((state) => {
        const isPassed =
          name === 'tag' ? state.isFilled.tag : value > 0 ? true : false;

        return {
          ...state,
          values: { ...state.values, [name]: value },
          isFilled: { ...state.isFilled, [name]: isPassed },
        };
      });
    },
    updateTagField: (tagList) => {
      return set((state) => {
        return {
          ...state,
          values: { ...state.values, tag: '' },
          isFilled: { ...state.isFilled, tag: tagList?.length > 0 },
        };
      });
    },
  };
});

// selector-->  (state) =>  state.values[name]
// export function useSelector(selector) {
//   const selectorRef = useRef();
//   selectorRef.current = selector;

//   const [selected, setSelected] = useState(() =>
//     selector(addItemStore.getState()),
//   );
//   //selector가 특정 필드의 값을 가져오는 함수이니
//   //=> addItemStore에서 해당 필드의 값을 조회하여 selected라는 상태로 관리

//   useEffect(() => {
//     //여기서 selector를 통해 다시 확인 값 바뀌었으면 리렌더 아니면 말고
//     const newSelected =  selectorRef.current(addItemStore.getState())//새로운 상태
//     setSelected((prev) => {
//       if ((prev) !== (newSelected)) {
//         //값이 바뀌지 않았으면(객체니까 문자열로 바꿔서)
//         return prev; //같은 값이니 렌더링x
//       } else {
//         //값이 바뀌었으면
//         return newSelected; //다른 값이니 렌더링o
//       }
//     });
//   }, [selector]); //deps로 준 addItemValues는 하나의 필드라도 값이 바뀌면 새로 만들어질테니
//   //새로 만들어졌을 때 내가 구독하는 필드는 값이 바뀌었는가를 확인하는 역할

//   return selected; //구독하고 있는 필드의 상태값;
// }

export function useSelector(selector) {
  return useAddItemStore(selector, shallow);
}
