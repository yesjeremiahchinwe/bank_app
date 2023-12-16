import { Transactions } from "../../types";
import transaction from "./transactions_assets/apple-fill.png"


export const transactions: Transactions[] = [
    {
        id: "1",
        icon: transaction,
        merchant_name: "Apple",
        used_for: "Macbook",
        price: "-999$"
    },
    {
        id: "2",
        icon: transaction,
        merchant_name: "Amazon",
        used_for: "Electronics",
        price: "-49$"
    },
    {
        id: "3",
        icon: transaction,
        merchant_name: "Twitter",
        used_for: "Ads",
        price: "-29$"
    },
    {
        id: "4",
        icon: transaction,
        merchant_name: "Microsoft",
        used_for: "Office Suite",
        price: "-149$"
    },
    {
        id: "5",
        icon: transaction,
        merchant_name: "Dropbox",
        used_for: "Cloud",
        price: "-14$"
    },
    {
        id: "6",
        icon: transaction,
        merchant_name: "Paypal",
        used_for: "Shopping",
        price: "-200$"
    },
]