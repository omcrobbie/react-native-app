export const types = {
    CAMPAIGN_CREATE: 'CAMPAIGN_CREATE',
    CAMPAIGN_REMOVE: 'CAMPAIGN_REMOVE',
    CAMPAIGN_SET_CURRENT: 'CAMPAIGN_SET_CURRENT',
    CATEGORY_CREATE: 'CATEGORY_CREATE',
    CATEGORY_REMOVE: 'CATEGORY_REMOVE',
    RECORD_CREATE: 'RECORD_CREATE',
    TOGGLE_VALUE: 'TOGGLE_VALUE'
}
export const actions: Actions = {
    campaignCreate: (payload) => ({type: types.CAMPAIGN_CREATE, payload}),
    campaignRemove: (id) => ({type: types.CAMPAIGN_REMOVE, payload: id}),
    campaignSetCurrent: (id) => ({type: types.CAMPAIGN_SET_CURRENT, payload: id}),
    recordCreate: (payload) => ({type: types.RECORD_CREATE, payload}),
    toggleValue: (stateKey) => ({type: types.TOGGLE_VALUE, payload: stateKey}),
    categoryCreate: (payload) => ({type: types.CATEGORY_CREATE, payload}),
    categoryRemove: (payload) => ({type: types.CATEGORY_REMOVE, payload})
}