type LOCATION_TYPE = "store" | "location" | "company";

export interface IUser {
    id: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ILocation {
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    locationType: LOCATION_TYPE;
    description: string;
    homepage: string;
    addedByUser: IUser;
    editedBy: [IUser];
}