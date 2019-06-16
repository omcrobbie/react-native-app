import { types } from "./actions";
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import * as handle from './handlers';

const initialState: Store = {
    currentCampaign: null,
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
                currentCampaign: handle.setCurrentCampaign(state, payload)
            }
        case types.CAMPAIGN_REMOVE:
            return {
                ...state,
                currentCampaign: null,
                campaigns: state.campaigns.filter(c => c.id !== payload)
            };
        case types.CATEGORY_CREATE:
                return {
                    ...state,
                    currentCampaign: handle.createCategory(state, payload),
                    campaigns: handle.refreshCampaigns(state)
                };
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