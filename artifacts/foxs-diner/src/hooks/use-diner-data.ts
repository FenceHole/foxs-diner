// Centralized hardcoded data for the pure frontend implementation
export function useDinerData() {
  const menu = {
    breakfast: [
      { name: "Apple Fritter French Toast", description: "Our signature item, highly recommended", price: "$10.99", highlighted: true },
      { name: "Deluxe Breakfast", description: "Eggs, bacon or sausage, and home fries", price: "$12.99" },
      { name: "Belgian Waffles", description: "Thick and fluffy, served with syrup", price: "$8.99" },
      { name: "Blueberry Pancakes", description: "Stack of three loaded with fresh blueberries", price: "$9.99" },
      { name: "Country Biscuits & Gravy", description: "Fresh baked biscuits smothered in homemade sausage gravy", price: "$8.99" },
      { name: "The Big Omelet", description: "Huge portions, well-prepared with your choice of fillings", price: "$11.99" },
      { name: "Breakfast Sandwich", description: "Fried egg, sausage, and cheese on thick Italian bread", price: "$7.99" },
      { name: "Scrambled Eggs with Bacon", description: "Classic favorite served with toast", price: "$8.99" },
      { name: "Home Fries", description: "Crispy and seasoned to perfection", price: "$3.99" },
    ],
    lunchDinner: [
      { name: "Country Fried Steak", description: "Topped with gravy, served with two sides", price: "$14.99", highlighted: true },
      { name: "Classic Reuben Sandwich", description: "Corned beef, sauerkraut, Swiss, Thousand Island on rye", price: "$11.99" },
      { name: "Taco Salad", description: "Crispy shell filled with seasoned beef, lettuce, tomato, cheese", price: "$10.99" },
      { name: "Liver & Onions", description: "A classic diner staple done right", price: "$12.99" },
      { name: "Hot Roast Beef Sandwich", description: "Smothered in rich gravy with mashed potatoes", price: "$13.99" },
    ],
    drinksDesserts: [
      { name: "Fresh Coffee", description: "Bottomless cup, always hot", price: "$2.99" },
      { name: "Homemade Doughnuts", description: "Baked fresh daily", price: "$2.50" },
      { name: "Ice Cream Sundae", description: "Vanilla ice cream, chocolate syrup, cherry", price: "$4.99" },
      { name: "Assorted Pies", description: "Ask your server for today's selection", price: "$4.50" },
    ]
  };

  const reviews = [
    {
      text: "After seeing them advertised on PTL, we were in the area and decided to give it a shot. The food was fresh and delicious. Traditional breakfast with bacon and one order of waffles versus one order of French toast. Food: 5 Service: 5 Atmosphere: 5",
      author: "Veronica Z.",
      source: "Google Review"
    },
    {
      text: "This was my first time and the food was delicious. I had the deluxe breakfast with the french toast. Every bite was tasty and fulfilling. I enjoyed the coffee and service was great. I would definitely return.",
      author: "Misty Williams",
      source: "Google Review"
    },
    {
      text: "If I could give 10 stars, I would! This HIDDEN GEM!",
      author: "Local Guide",
      source: "Google Review"
    },
    {
      text: "What a great local breakfast spot! The omelets were huge and delicious. Delicious home style breakfast served quickly by super friendly staff.",
      author: "Sarah M.",
      source: "Google Review"
    },
    {
      text: "Every bite feels like home! The food is amazing, and the staff treats us like family. Our favorite place to gather!",
      author: "Regular Guest",
      source: "Facebook"
    },
    {
      text: "This diner is a gem! The homemade meals and warm service make it our go-to spot. Every visit feels like a warm embrace!",
      author: "Happy Customer",
      source: "Facebook"
    }
  ];

  return { menu, reviews };
}
