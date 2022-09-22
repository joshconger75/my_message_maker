const fortunes = [`Don’t hold onto things
    that require a tight grip.`,`Look how far you've come.`,`Each time you break your own
    boundaries to ensure that
    someone else likes you, you
    like yourself a little less.`,`Sitting in silence with you
    is all the noise I need.`,`Every good and perfect
    gift is from above.`,`One bad chapter
    doesn't mean your story is over.`,`All we have to decide is what to do
    with the time that is given to us.  –J.R.R. Tolkien`,`Live as if you were to die tomorrow.
    Learn as if you were to live forever.  -Gandhi`,`The best way to predict your
    future is to create it.  -Abraham Lincoln`,`There are far, far better things ahead
    than any we leave behind.  -C.S. Lewis`];
const beginingOfFortune = 'Hello! This was in your Fortune cookie: ';

const randNum = () => {
    let num = Math.floor(Math.random()*10);
    return num;
}

const fortuneGen = () => {
    const num1 = randNum();
    return fortunes[num1];
}

const newFortune = 'New Fortune?'
document.querySelector("h6").onclick = () => {
    document.querySelector(".static").innerHTML = beginingOfFortune;
    document.querySelector(".fortune").innerHTML = fortuneGen();
    document.querySelector("h6").innerHTML = newFortune;
};