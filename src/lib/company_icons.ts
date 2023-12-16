import amazon_logo from "./company_icons_assets/amazon_logo.png"
import apple_pay_logo from "./company_icons_assets/apple_pay_logo.png"
import bitcoin_logo from "./company_icons_assets/bitcoin_logo.png"
import gpay_logo from "./company_icons_assets/gpay_logo.png"
import mastercard_logo from "./company_icons_assets/mastercard_logo.png"
import paypal_logo from "./company_icons_assets/paypal_logo.png"
import shopify from "./company_icons_assets/shopify_logo.png"
import visa_logo from "./company_icons_assets/visa_logo.png"
import webflow_logo from "./company_icons_assets/webflow_logo.png"
import zapier_logo from "./company_icons_assets/webflow_logo.png"
import { StaticImageData } from "next/image"


type CompanyIcons = {
    id: string
    icon: StaticImageData
    name: string
}

export const companyIcons: CompanyIcons[] = [
    {
        id: "1",
        icon: webflow_logo,
        name: "Webflow company logo"
    },

    {
        id: "2",
        icon: shopify,
        name: "Shopify company logo"
    },

    {
        id: "3",
        icon: zapier_logo,
        name: "Zapier company logo"
    },

    {
        id: "4",
        icon: bitcoin_logo,
        name: "Bitcoin logo"
    },

    {
        id: "5",
        icon: paypal_logo,
        name: "Paypal company logo"
    },

    {
        id: "6",
        icon: mastercard_logo,
        name: "Mastercard company logo"
    },

    {
        id: "7",
        icon: visa_logo,
        name: "Visa card logo"
    },

    {
        id: "8",
        icon: gpay_logo,
        name: "GPay company logo"
    },

    {
        id: "9",
        icon: apple_pay_logo,
        name: "Apple company logo"
    },

    {
        id: "10",
        icon: amazon_logo,
        name: "Amazon company logo"
    },
]