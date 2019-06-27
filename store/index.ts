import { types, Instance } from 'mobx-state-tree';
import { Campaign, ICampaignIn } from './campaign';

export const Store = types.model('Root', {
        campaigns: types.array(Campaign),
        currentCampaignId: types.maybeNull(types.string),
        showCampaignModal: false,
        showCategoryModal: false
    })
    .views(self => ({
        get currentCampaign() {
            return self.campaigns.find(c => c.id === self.currentCampaignId);
        }
    }))
    .actions(self => ({
        setCurrentCampaignId(id) {
            self.currentCampaignId = id;
        },
        createCampaign(campaignData: ICampaignIn) {
            self.campaigns.push(Campaign.create(campaignData));
        },
        removeCampaign(id) {
            const current = self.campaigns.find(c => c.id === id);
            self.campaigns.remove(current!);
            self.currentCampaignId = null;
        },
        toggleValue(val: 'showCampaignModal' | 'showCategoryModal') {
            self[val] = !self[val];
        }
    }))
export interface IStore extends Instance<typeof Store> {}