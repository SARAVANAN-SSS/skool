

const names = ['Mani','Rani', 'Vani', 'Kani', 'Dhoni', 'Nani', 'Rajni', 'Sara','Lisa','Marie','Jim','Jin']

const messages = [
    "What a massive six! 🔥",
    "Did you see that catch? Unbelievable!",
    "The bowler is on a hat-trick! 🎯",
    "Who's your favorite player today?",
    "The chase looks really tough now.",
    "That was a bad umpiring decision. 😡",
    "India needs a strong partnership here. 🇮🇳",
    "This over is make or break for the batting side.",
    "What a brilliant fielding effort!",
    "That no-ball might cost them the game.",
    "The crowd is going wild! 🎉",
    "This is one of the best matches ever!"
];



export const randomName = () => names[Math.floor(Math.random() * names.length)]; 
export const randomMessge = () => messages[Math.floor(Math.random() * messages.length)]; 