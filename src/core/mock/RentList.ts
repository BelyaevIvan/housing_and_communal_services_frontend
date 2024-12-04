export interface RentService {
    pk : number;
    title : string
    icon : string
    icon1: string
    price : string
    status : string
    description : string
}


export const ServiceList_: RentService[] = [
    {
        pk : 1,
        title : 'Электроэнергия',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '3 ₽/кВт*ч',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },
    {
        pk : 2,
        title : 'Холодное водоснабжение',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '37 ₽/м3',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },
    {
        pk : 3,
        title : 'Горячее водоснабжение',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '240 ₽/м3',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },
    {
        pk : 4,
        title : 'Обслуживание домофона',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '55 ₽/мес',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },
    {
        pk : 5,
        title : 'Интернет',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '900 ₽/мес',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },
    {
        pk : 6,
        title : 'Уход за придомовой территорией',
        icon : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        icon1 : 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg',
        price : '150 ₽/мес',
        description : 'Не забывайте оплачивать услуги ЖКХ',
        status : 'Active'
    },

]