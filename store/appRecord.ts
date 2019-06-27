import { types } from 'mobx-state-tree';

const AppRecord = types.model('AppRecord', {
    id: types.string,
    timeStamp: types.Date
})
