export interface ExpenseItem {
  id: string;
  expenseName: string;
  category: string;
  iconName: string;
  iconBgColor?: string;
  companyName: string;
  vendor: string;
  amount: string;
  amountColor: string;
}

export const expenseData: ExpenseItem[] = [
  {
    id: "1",
    expenseName: "Flight to NYC",
    category: "Travel",
    iconName: "plane",
    iconBgColor: "bg-black-100 text-black-500",
    companyName: "Zemlak, Daniel and Leannon",
    vendor: "American Airlines",
    amount: "$545.00",
    amountColor: "text-black",
  },
  {
    id: "2",
    expenseName: "Cloud Hosting",
    category: "IT Services",
    iconName: "server",
    iconBgColor: "bg-indigo-100 text-indigo-500",
    companyName: "Carroll Group",
    vendor: "AWS",
    amount: "$1,249.99",
    amountColor: "text-black",
  },
  {
    id: "3",
    expenseName: "Software Licenses",
    category: "Subscriptions",
    iconName: "key-round",
    iconBgColor: "bg-yellow-100 text-yellow-600",
    companyName: "Rowe-Schoen",
    vendor: "Adobe",
    amount: "$300.00",
    amountColor: "text-black",
  },
  {
    id: "4",
    expenseName: "Lunch Meeting",
    category: "Client Meal",
    iconName: "utensils",
    iconBgColor: "bg-rose-100 text-rose-500",
    companyName: "Wyman-Ledner",
    vendor: "Gramercy Tavern",
    amount: "$140.75",
    amountColor: "text-black",
  },
  {
    id: "5",
    expenseName: "Conference Registration",
    category: "Professional Development",
    iconName: "badge-dollar-sign",
    iconBgColor: "bg-green-100 text-green-600",
    companyName: "Reichert PLC",
    vendor: "JSWorld",
    amount: "$925.50",
    amountColor: "text-black",
  },
  {
    id: "6",
    expenseName: "Taxi to Airport",
    category: "Travel",
    iconName: "car-front",
    iconBgColor: "bg-blue-100 text-blue-600",
    companyName: "Klocko Inc.",
    vendor: "Yellow Cab",
    amount: "$56.90",
    amountColor: "text-black",
  },
  {
    id: "7",
    expenseName: "Office Snacks",
    category: "Office",
    iconName: "cookie",
    iconBgColor: "bg-orange-100 text-orange-500",
    companyName: "Jast Ltd.",
    vendor: "Instacart",
    amount: "$89.76",
    amountColor: "text-black",
  },
  {
    id: "8",
    expenseName: "Team Dinner",
    category: "Team Outing",
    iconName: "wine",
    iconBgColor: "bg-pink-100 text-pink-500",
    companyName: "Friesen and Sons",
    vendor: "Olive Garden",
    amount: "$270.00",
    amountColor: "text-black",
  },
  {
    id: "9",
    expenseName: "Laptop Purchase",
    category: "Equipment",
    iconName: "laptop",
    iconBgColor: "bg-lime-100 text-lime-700",
    companyName: "Deckow Group",
    vendor: "Best Buy",
    amount: "$1,200.00",
    amountColor: "text-black",
  },
  {
    id: "10",
    expenseName: "Coffee for Meeting",
    category: "Client Meal",
    iconName: "coffee",
    iconBgColor: "bg-brown-100 text-brown-700",
    companyName: "Sipes, Beier and Dietrich",
    vendor: "Starbucks",
    amount: "$34.25",
    amountColor: "text-black",
  },
];
