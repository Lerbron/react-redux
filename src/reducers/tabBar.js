/** * Created by admin on 2017/3/25. */const initState = { selected:'home' };export default function tabBarSelect(state = initState,action) {	switch (action.type){		case 'initSelected' :			return Object.assign({}, state);		case 'selectedItem' :			return Object.assign({}, state, {selected:action.selected});		default:			return state;	}}