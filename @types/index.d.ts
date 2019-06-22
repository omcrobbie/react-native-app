declare interface Store {
    currentCampaignId: string;
    campaigns: Campaign[];
    showCampaignModal: boolean;
    showEntryModal: boolean;
    showCategoryModal: boolean;
}
declare interface Campaign {
    id: string;
    name: string;
    description: string;
    records: AppRecord[];
    categories: Category[];
    startDate: string;
    days?: number;
    endDate?: string;
}
declare interface Category {
    label: string;
    weight?: number;
    color: string;
    id: string;
}
declare interface CategoryInput {
    label: string;
    color: string;
}
declare interface CampaignInput {
    name: string;
    description: string;
    startDate?: Date;
}
declare interface AppRecord {
    campaignId: string;
    categoryId: string;
    timeStamp: string;
    id: string;
}
declare interface AppRecordInput {
    categoryId: string;
    campaignId: string;
}

declare interface Actions {
    campaignCreate(payload: CampaignInput): void;
    campaignRemove(id: string): void;
    campaignSetCurrent(id: string): void;
    categoryCreate(payload: CategoryInput): void;
    categoryRemove(payload: string): void;
    recordCreate(payload: AppRecordInput): void;
    toggleValue(stateKey: string): void;

}