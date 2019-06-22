import { createSelector } from 'reselect';
import { parse, differenceInDays } from 'date-fns'

const getCurrentCampaignId = (state: Store) => state.currentCampaignId;
const getCampaigns = (state: Store) => state.campaigns;

export const getCurrentCampaign = createSelector([
    getCurrentCampaignId,
    getCampaigns
], (campaignId, campaigns): Partial<Campaign> => {
    if (campaignId) {
        const currentCampaign = campaigns.find(c => c.id === campaignId);
        return {
            ...currentCampaign,
            days: differenceInDays(new Date(), parse(currentCampaign!.startDate)) + 1
        }
    }
    return {};
});