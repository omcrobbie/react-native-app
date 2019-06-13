declare interface Store {
    currentCampaign: Campaign | null;
    campaigns: Campaign[];
    showCampaignModal: boolean;
    showEntryModal: boolean;
}
declare interface Campaign {
    id: string;
    name: string;
    description: string;
    records: AppRecord[];
    categories: Category[];
    startDate: string;
    endDate?: string;
}
declare interface Category {
    label: string;
    weight: number;
    color: string;
    id: string;
}
declare interface CategoryInput {
    label: string;
    weight?: number;
    color: string;
}
declare interface CampaignInput {
    name: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
}
declare interface AppRecord {
    label: string;
    weight: number;
    color: string;
    timeStamp: string;
    id: string;
}
declare interface EntryInput {
    label: string;
    weight?: number;
    color: string;
}
declare interface Actions {
    campaignCreate(payload: CampaignInput): void;
    campaignRemove(id: string): void;
    campaignSetCurrent(id: string): void;
    entryCreate(payload: EntryInput): void;
    entryRemove(id: string): void;
    toggleValue(stateKey: string): void;

}