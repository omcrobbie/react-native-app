import { types } from "./actions";
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

const initialState: Store = {
    currentCampaign: null,
    campaigns: [],
    showCampaignModal: false,
    showEntryModal: false
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TOGGLE_VALUE:
            return {...state, [payload]: !state[payload]};
        default:
            return state;
    }
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
export default persistReducer(persistConfig, reducer);