const successQuotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "I never dreamed about success. I worked for it. – Estée Lauder",
  "The ones who are crazy enough to think they can change the world, are the ones that do. – Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success seems to be connected with action. Successful people keep moving. – Conrad Hilton",
  "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "Fall seven times and stand up eight. – Japanese Proverb",
  "Some people dream of success, while others wake up and work hard at it. – Napoleon Hill",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
  "Your limitation—it's only your imagination. Push yourself, because no one else is going to do it for you."
];
const button = document.querySelector("button");
const quot = document.querySelector("h1")

button.addEventListener('click',() =>{
    const index = Math.floor(Math.random()*20)
    quot.textContent = successQuotes[index];
})