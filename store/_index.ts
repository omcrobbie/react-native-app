import { types } from "./actions";
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import * as handle from './handlers';

const initialState: Store = {
    currentCampaignId: '',
    campaigns: [],
    showCampaignModal: false,
    showCategoryModal: false,
    showEntryModal: false
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.TOGGLE_VALUE:
            return {...state, [payload]: !state[payload]};
        case types.CAMPAIGN_CREATE:
            return {
                ...state,
                campaigns: [handle.createCampaign(payload), ...state.campaigns]
            };
        case types.CAMPAIGN_SET_CURRENT:
            return {
                ...state,
                currentCampaign: payload
            }
        case types.CAMPAIGN_REMOVE:
            return {
                ...state,
                currentCampaign: '',
                campaigns: state.campaigns.filter(c => c.id !== payload)
            };
        case types.CATEGORY_CREATE:
                handle.createCategory(state, payload);
                return {
                    ...state,
                    campaigns: state.campaigns.slice(0)
                };
        case types.CATEGORY_REMOVE:
            handle.removeCategory(state, payload);
            return {
                ...state,
                campaigns: state.campaigns.slice(0)
            }
        default:
            return state;
    }
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        'showCampaignModal',
        'showEntryModal'
    ]
}
export default persistReducer(persistConfig, reducer as any);