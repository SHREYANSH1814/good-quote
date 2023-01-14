let quotes=[{
    text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author:"Steve Jobs"
},{
    text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mondella"
},{
    text:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author:"James Cameron"
},{
    text:"Life is what happens when you're busy making other plans.",
    author:"John Lennon"
},{
    text:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author:"Mother Teresa"
},{
    text:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author:"Ralph Waldo Emmerson"
},{
    text:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author:"Benjamin Franklin"
},{
    text:"Always remember that you are absolutely unique. Just like everyone else.",
    author:"Margaret Meao"
}];




const q=document.querySelector('.quote');
const w=document.querySelector('.writter');
const btn=document.querySelector('#change');
function getrandom(){
    return Math.floor(Math.random()*quotes.length);
}
function changer(){
w.textContent=quotes[getrandom()].author;
q.textContent=quotes[getrandom()].text;
}
btn.addEventListener('click',changer);



