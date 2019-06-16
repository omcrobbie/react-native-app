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
export function setCurrentCampaign(state: Store, campaignId: string): Campaign {
    const currentCampaign = findCampaign(state, campaignId);
    return {
        ...currentCampaign,
        days: setDays(currentCampaign)
    }
}
export function createCategory(state: Store, {color, label}: CategoryInput): Campaign {
    const id = state.currentCampaign!.id;
    const campaign = findCampaign(state, id);
    const category: Category = {
        color,
        label,
        id: uuid()
    };
    campaign.categories.push(category);
    return {
        ...campaign,
        days: setDays(campaign)
    };
}
export function refreshCampaigns(state: Store): Campaign[] {
    const others = state.campaigns.filter(c => c.id !== state.currentCampaign!.id);
    return [
        state.currentCampaign!, ...others
    ];
}
export function setDays(campaign: Campaign) {
    const startDate = parse(campaign.startDate);
    return differenceInDays(new Date(), startDate) + 1;
}