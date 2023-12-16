import Hero from "./components/hero/Hero";
import Notifications from "./components/notifications/Notifications";
import OneApp from "./components/one_app/Features";
import Savings from "./components/savings/Savings";
import Tools from "./components/tools/Tools";
import Transactions from "./components/transactions/Transactions";


export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <Hero />
      <OneApp />
      <Transactions />
      <Savings />
      <Notifications />
      <Tools />
    </main>
  )
}
