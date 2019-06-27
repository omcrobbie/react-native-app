import { types, Instance, SnapshotIn } from 'mobx-state-tree';
import { ICategoryIn, Category } from './category';

export const Campaign = types.model('Campaign', {
        id: types.string,
        name: types.string,
        description: types.string,
        timeStamp: types.maybe(types.Date),
        categories: types.array(Category)
    })
    .actions(self => ({
        afterCreate() {
            self.timeStamp = new Date();
        },
        addCategory(category: ICategoryIn) {

        }
    }));
export interface ICampaign extends Instance<typeof Campaign> {}
export interface ICampaignIn extends SnapshotIn<typeof Campaign> {}