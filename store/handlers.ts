import { parse, differenceInDays } from 'date-fns';
const uuid = require('uuid/v1');

export function findCampaign(state: Store, campaignId: string): Campaign {
    return state.campaigns.find(c => c.id === campaignId)!;
}
export function createCampaign(payload: CampaignInput): Campaign {
    return {
        ...payload,
        id: uuid(),
        startDate: new Date().toISOString(),
        records: [],
        categories: []
    };
}
export function createCategory(state: Store, {color, label}: CategoryInput) {
    const campaign = findCampaign(state, state.currentCampaignId);
    const category: Category = {
        color,
        label,
        id: uuid()
    };
    campaign.categories.push(category);
}
export function removeCategory(state: Store, categoryId: string) {
    const campaign = findCampaign(state, state.currentCampaignId)!;
    const idx = campaign.categories.indexOf(campaign.categories.find(c => c.id === categoryId)!);
    campaign.categories.splice(idx, 1);
}
