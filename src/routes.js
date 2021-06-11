import React from 'react';
import Homepage from "./containers/Homepage";
import Goldens from "./containers/Goldens";
import Cavaliers from "./containers/Cavaliers";
import FilteredDogs from "./containers/FilteredDogs";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/hakkinda",
        exact: false,
        component: () => {return <div>Hakkında</div>},
        title: "Hakkinda"
    }
];

export default routes;