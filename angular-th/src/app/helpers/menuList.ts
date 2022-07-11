import { Menu } from "../model/menu";

export const menuList: Menu[] =[ //POTENTIALLY SHIFTING ALL OF MENU TO SEARCH AND SEARCH FILTERS
{
    name: 'Home',
    link: '/',
    icon: 'icon-grid',
},

{
    name: 'Sell a Home',
    link: '/add-property',
    icon: 'icon-circular-graph', //CHANGE THIS TO A MORE FITTING ICON
},

{
    name: 'Listings',
    link: '/listings',
    icon: 'icon-list',
},

// {                            MAYBE USE PROFILE IN SIDE BAR
//     name:'Profile',
//     link: '/user-profile',
//     icon: 'icon-user'
// },

];