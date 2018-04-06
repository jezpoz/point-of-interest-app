type LOCATION_TYPE = 'store' | 'location' | 'company';

export interface User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Location {
    locationId: string;
    lat: number;
    long: number;
    name: string;
    locationType: LOCATION_TYPE;
    description: string;
    homepage: string;
    addedByUser: User;
    editedBy: [User];
}