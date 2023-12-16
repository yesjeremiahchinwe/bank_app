import { Notiications } from "../../types";
import blockApp from "./notifications_assets/block_app.png"

export const notifications: Notiications[] = [
    {
        id: "1",
        icon: blockApp,
        title: "Banko",
        desc: "Your payment of 49€ has been processed!"
    },
    {
        id: "2",
        icon: blockApp,
        title: "Banko",
        desc: "You got a new support message!"
    },
    {
        id: "3",
        icon: blockApp,
        title: "Banko",
        desc: "Your payment was declined!"
    },
    {
        id: "4",
        icon: blockApp,
        title: "Banko",
        desc: "Please verify your payment of 99€!"
    },
    {
        id: "5",
        icon: blockApp,
        title: "Banko",
        desc: "New account statistics are available!"
    },
]