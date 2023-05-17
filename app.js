const image = document.querySelector('.img');
const fullName = document.querySelector('.myName');
const professional = document.querySelector('#proffesional');
const para = document.querySelector('.mypara');
const btn = document.querySelector('.surBtn');
const mainDiv = document.querySelector('.inner-container');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev')


const myArray = [{
    photo: 'babar.jpeg',
    myname: 'Babar Azam',
    prof: 'Cricketer',
    peragraph: 'Mohammad Babar Azam, is a Pakistani international cricketer and captain of the Pakistan national cricket team in all formats. Regarded as one of the finest batters in contemporary world cricket, he is the only cricketer in the world to be in the top five rankings across all formats.'

},
{
    photo: 'imran.jpg',
    myname: 'Imran Khan',
    prof: 'Prime Minister',
    peragraph: 'Imran Ahmed Khan Niazi PP is a politician and former cricket captain who served as the 22nd Prime Minister of Pakistan from August 2018 until April 2022. He is the founder and chairman of the political party Pakistan Tehreek-e-Insaf'

},
{
    photo: 'imran.jpg',
    myname: 'Imran Khan',
    prof: 'Prime Minister',
    peragraph: 'Imran Ahmed Khan Niazi PP is a politician and former cricket captain who served as the 22nd Prime Minister of Pakistan from August 2018 until April 2022. He is the founder and chairman of the political party Pakistan Tehreek-e-Insaf'

},
{
    photo: 'virat.jpg',
    myname: 'Virat Kohli',
    prof: 'Batman',
    peragraph: 'Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for Delhi in Indian domestic cricket'

},
{
    photo: 'rizwan.jpg',
    myname: 'Muhammad Rizwan',
    prof: 'Batman',
    peragraph: 'Mohammad Rizwan is a Pakistani international cricketer who has represented Pakistan in international cricket since 2015 and captains Pakistan Super League franchise Multan Sultans.'

},
]





// window refresh
window.addEventListener('DOMContentLoaded',function(){
    personchange();
})
// index number 
let index = 0;
// person info function

function personchange(){
    let items = myArray[index];
    image.src = items.photo;
    fullName.innerHTML = items.myname;
    professional.textContent =items.prof;
    para.innerHTML = items.peragraph;

}
// random btn
btn.addEventListener('click',function(){
    index =Math.floor(Math.random()*myArray.length);
    personchange();

})
// next btn
nextBtn.addEventListener('click',()=>{
    index++;
    if(index>myArray.length-1){
        index =0;
    }
    personchange();
})

// previous btn
prevBtn.addEventListener('click',()=>{
    index--;
    if(index<0){
        index =myArray.length-1;
    }
    personchange();
})