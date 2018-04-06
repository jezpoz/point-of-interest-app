import {
    User,
    Location,
} from './types';

export const resolvers = {
    Query: {
        me: (): User => ({
            userId: '87213b97-8076-4d39-afbd-74805ebeed94',
            firstName: 'Jesper',
            lastName: 'Førisdahl',
            email: 'jesper.forisdahl@capgemini.com',
        }),
        getLocations: (): [Location] => ([{
            locationId: 'e68dd305-db4e-4fec-a463-ca6a62fcf81a',
            lat: 59.920150,
            long: 10.683548,
            name: 'Capgemini Norway Skøyen',
            locationType: 'company',
            description: 'Capgemini Norway',
            homepage: 'www.capgemini.com',
            addedByUser: {
                userId: '87213b97-8076-4d39-afbd-74805ebeed94',
                firstName: 'Jesper',
                lastName: 'Førisdahl',
                email: 'jesper.forisdahl@capgemini.com',
            },
            editedBy: [{
                userId: '87213b97-8076-4d39-afbd-74805ebeed94',
                firstName: 'Jesper',
                lastName: 'Førisdahl',
                email: 'jesper.forisdahl@capgemini.com',
            }],
        }]),
    }
}