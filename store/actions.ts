export const types = {
    CAMPAIGN_CREATE: 'CAMPAIGN_CREATE',
    CAMPAIGN_REMOVE: 'CAMPAIGN_REMOVE',
    CAMPAIGN_SET_CURRENT: 'CAMPAIGN_SET_CURRENT',
    ENTRY_CREATE: 'ENTRY_CREATE',
    ENTRY_REMOVE: 'ENTRY_REMOVE',
    TOGGLE_VALUE: 'TOGGLE_VALUE'
}
export const actions = {
    campaignCreate: (payload) => ({type: types.CAMPAIGN_CREATE, payload}),
    campaignRemove: (id) => ({type: types.CAMPAIGN_REMOVE, payload: id}),
    campaignSetCurrent: (id) => ({type: types.CAMPAIGN_SET_CURRENT, payload: id}),
    entryCreate: (payload) => ({type: types.ENTRY_CREATE, payload}),
    entryRemove: (id) => ({type: types.ENTRY_REMOVE, payload: id}),
    toggleValue: (stateKey) => ({type: types.TOGGLE_VALUE, payload: stateKey})
}