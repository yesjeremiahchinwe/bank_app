import { StaticImageData } from "next/image"

type Features = {
    id: string
    icon: StaticImageData
    title: string
    desc: string
}

type Transactions = {
    id: string
    icon: StaticImageData
    merchant_name: string
    used_for: string
    price: string
}

type Savings = {
    id: string
    background: string
    icon: StaticImageData
    name: string
    price: string
}

type Notiications = {
    id: string
    icon: StaticImageData
    title: string
    desc: string
}
