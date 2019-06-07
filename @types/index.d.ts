declare interface Store {
    currentCampaign: string | null;
    campaigns: Campaign[];
    showCampaignModal: boolean;
    showEntryModal: boolean;
}
declare interface Campaign {
    id: string;
    name: string;
    description: string;
    entries: Entry[];
    startDate: string;
    endDate: string;
}
declare interface CampaignInput {
    name: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
}
declare interface Entry {
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
    campaignCreate(payload: CampaignInput);
    campaignRemove(id: string);
    campaignSetCurrent(id: string);
    entryCreate(payload: EntryInput);
    entryRemove(id: string);
    toggleValue(stateKey: string);

}