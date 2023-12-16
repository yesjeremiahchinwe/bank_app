import { Features } from "../../types";
import flashlight from "./features_assets/flashlight-line.png"
import safeFill from "./features_assets/safe-fill.png"
import smartphone from "./features_assets/smartphone-line.png"
import chart from "./features_assets/line-chart.png"
import bankCard from "./features_assets/bank-card.png"
import wifi from "./features_assets/wifi-line.png"


export const features: Features[] = [
    {
        id: "1",
        icon: flashlight,
        title: "Instant transactions",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    },
    {
        id: "2",
        icon: safeFill,
        title: "Saving accounts",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    },
    {
        id: "3",
        icon: smartphone,
        title: "Mobile banking",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    },
    {
        id: "4",
        icon: chart,
        title: "Advanced statistics",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    },
    {
        id: "5",
        icon: bankCard,
        title: "Virtual cards",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    },
    {
        id: "6",
        icon: wifi,
        title: "Contactless payments",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
    }
]