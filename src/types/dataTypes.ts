export interface DataEstate {
    id: number;
    address: string;
    price: number;
    numRooms: number;
    floorSpace: number;
    city: City;
    type: EnergyLabel;
    energyLabel: EnergyLabel;
    estateImages: EstateImage[];
}

export interface City {
    name: string;
    zipcode: number;
}

export const Name = {
    Aalborg: "Aalborg",
    AalborgSØ: "Aalborg SØ",
    Nørresundby: "Nørresundby",
} as const;

export interface EnergyLabel {
    name: string;
}

export interface EstateImage {
    image: Image;
}

export interface Image {
    filename: string;
    author: typeof Author;
    description: string;
}

export const Author = {
    Colourbox: "Colourbox",
} as const;
