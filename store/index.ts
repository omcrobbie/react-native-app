import { types } from "./actions";
import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
const uuid = require('uuid/v1');

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
        case types.CAMPAIGN_CREATE:
            const campaign: Campaign = {
                name: payload.name,
                description: payload.description,
                id: uuid(),
                startDate: new Date().toISOString(),
                records: [],
                categories: []
            };
            return {
                ...state,
                campaigns: [campaign, ...state.campaigns]
            };
        case types.CAMPAIGN_SET_CURRENT:
            const currentCampaign = state.campaigns.find(c => c.id === payload);
            return {...state, currentCampaign}
        case types.CAMPAIGN_REMOVE:
            return {
                ...state,
                currentCampaign: '',
                campaigns: state.campaigns.filter(c => c.id !== payload)
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