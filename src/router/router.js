import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage"
import CouponsPage from "@/pages/CouponsPage"
import AddPage from "@/pages/AddPage"

const routes = [ {
    path: "/",
    component: MainPage,
},
{
    path: "/Coupons",
    component: CouponsPage,},
{
    path: "/createCoupons",
    component: AddPage,},
]

const router = createRouter({routes, history: createWebHistory()})

export default router;