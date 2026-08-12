export interface ReviewDataTypes {
    id:        number;
    comment:   string;
    numStars:  number;
    createdAt: Date;
    estate:    Estate;
    user:      User;
}

export interface Estate {
    address: string;
    city:    City;
}

export interface City {
    zipcode: number;
    name:    string;
}

export interface User {
    firstname: string;
    lastname:  string;
    email:     string;
}
