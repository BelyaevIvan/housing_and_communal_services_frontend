export interface RentService {
    pk : number;
    title : string
    icon : string
    price : string
    status : string
    description : string
}


export const ServiceList_: RentService[] = [
    {
        pk : 1,
        title : 'mock1',
        icon : '',
        price : '1',
        description : 'test1',
        status : 'staus'
    },
    {
        pk : 2,
        title : 'mock2',
        icon : '',
        price : '2',
        description : 'test2',
        status : 'staus'
    },

]