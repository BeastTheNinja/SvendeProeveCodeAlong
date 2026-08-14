export interface EstateDataByID {
    id: number;
    address: string;
    price: number;
    payout: number;
    gross: number;
    net: number;
    cost: number;
    numRooms: number;
    numFloors: number;
    floorSpace: number;
    groundSpace: number;
    basementSpace: number;
    yearConstruction: number;
    yearRebuilt: number;
    description: string;
    floorplan: string;
    numClicks: number;
    cityId: number;
    typeId: number;
    energyLabelId: number;
    staffId: number;
    createdAt: Date;
    updatedAt: Date;
}
