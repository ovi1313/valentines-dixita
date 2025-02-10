document.getElementById('start-btn').addEventListener('click', function() {
    playMusic('music1.mp3');
    showCatImages();
});

function playMusic(src) {
    const audio = new Audio(src);
    audio.loop = true;
    audio.play();
}

function showCatImages() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="cat1.jpg" alt="Cat Image 1">
        <img src="cat2.jpg" alt="Cat Image 2">
        <button id="next-btn">Continue</button>
    `;
    playMusic('music2.mp3');
    document.getElementById('next-btn').addEventListener('click', showAwkwardText);
}

function showAwkwardText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, I know this is awkward 😢</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music3.mp3');
    document.getElementById('next-btn').addEventListener('click', askAboutValentines);
}

function askAboutValentines() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, let's start with some questions. Do you like Valentine's?</h2>
        <label><input type="radio" name="valentines" value="very much"> Very much</label>
        <label><input type="radio" name="valentines" value="kinda"> Kinda</label>
        <label><input type="radio" name="valentines" value="no"> No</label>
        <label><input type="radio" name="valentines" value="hate it"> Hate it</label>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music4.mp3');
    document.getElementById('next-btn').addEventListener('click', askAboutCelebration);
}

function askAboutCelebration() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Have you celebrated Valentine's ever before?</h2>
        <label><input type="radio" name="celebration" value="many times"> Many times</label>
        <label><input type="radio" name="celebration" value="a few"> A few</label>
        <label><input type="radio" name="celebration" value="once"> Once</label>
        <label><input type="radio" name="celebration" value="never"> Never</label>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music5.mp3');
    document.getElementById('next-btn').addEventListener('click', showFeelingsText);
}

function showFeelingsText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, I know these distances keep us apart, but my feelings do not alter.</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music6.mp3');
    document.getElementById('next-btn').addEventListener('click', showFirstDayText);
}

function showFirstDayText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Since the first day I saw you, I felt something in me.</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music7.mp3');
    document.getElementById('next-btn').addEventListener('click', showMeanText);
}

function showMeanText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But I stayed, refrained my feelings, and was mean to you lol 😢</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music8.mp3');
    document.getElementById('next-btn').addEventListener('click', showFellForYouText);
}

function showFellForYouText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I fell for you, despite the distances.</h2>
        <img src="bunny1.jpg" alt="Bunny Image 1">
        <img src="bunny2.jpg" alt="Bunny Image 2">
        <button id="next-btn">Continue</button>
    `;
    playMusic('music9.mp3');
    document.getElementById('next-btn').addEventListener('click', showDontShowItText);
}

function showDontShowItText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I don't show it, to not make it awkward, and I know online doesn't work, but I'm happy to have you regardless.</h2>
        <button id="next-btn">Okay</button>
    `;
    playMusic('music10.mp3');
    document.getElementById('next-btn').addEventListener('click', showDesireText);
}

function showDesireText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I desire you, I adore you.</h2>
        <button id="next-btn">Okay</button>
    `;
    playMusic('music11.mp3');
    document.getElementById('next-btn').addEventListener('click', showRating);
}

function showRating() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Leave a rating for me 😁😼</h2>
        <label><input type="radio" name="rating" value="2"> 2</label>
        <label><input type="radio" name="rating" value="5"> 5</label>
        <label><input type="radio" name="rating" value="1"> 1</label>
        <label><input type="radio" name="rating" value="0"> 0</label>
        <label><input type="radio" name="rating" value="04"> 04</label>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music12.mp3');
    document.getElementById('next-btn').addEventListener('click', showBirthDatesText);
}

function showBirthDatesText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Those digits were your birth dates lol</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music13.mp3');
    document.getElementById('next-btn').addEventListener('click', showGirlsText);
}

function showGirlsText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, you know all these girls are dying to date me 😎</h2>
        <img src="ana_de_armas.jpg" alt="Ana de Armas">
        <img src="scarlett_johansson.jpg" alt="Scarlett Johansson">
        <img src="disha_patani.jpg" alt="Disha Patani">
        <img src="kriti_sanon.jpg" alt="Kriti Sanon">
        <button id="next-btn">Continue</button>
    `;
    playMusic('music14.mp3');
    document.getElementById('next-btn').addEventListener('click', showChooseText);
}

function showChooseText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But do you know whom I want to have? Do you know who I would choose over all these given the chance?</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music15.mp3');
    document.getElementById('next-btn').addEventListener('click', showHintText);
}

function showHintText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Hint: She plays COD, has a dog and a cat, two sisters, likes momo, and supports Barca 😑😒</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music16.mp3');
    document.getElementById('next-btn').addEventListener('click', showMirrorPic);
}

function showMirrorPic() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>🫵🫵</h2>
        <img src="mirror.jpg" alt="Mirror Pic">
        <button id="next-btn">Continue</button>
    `;
    playMusic('music17.mp3');
    document.getElementById('next-btn').addEventListener('click', showOldWomanPic);
}

function showOldWomanPic() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>You might look like this after 50 years</h2>
        <img src="old_woman.jpg" alt="Old Woman">
        <button id="next-btn">Continue</button>
    `;
    playMusic('music18.mp3');
    document.getElementById('next-btn').addEventListener('click', showLoveYouText);
}

function showLoveYouText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But I would still LOVE YOU</h2>
        <button id="next-btn">Continue</button>
    `;
    playMusic('music19.mp3');
    document.getElementById('next-btn').addEventListener('click', showValentineProposal);
}

function showValentineProposal() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Dixita Sharma, would you be my Online Valentine?</h2>
        <button id="yes-btn">Yes</button>
    `;
    playMusic('music20.mp3');
    document.getElementById('yes-btn').addEventListener('click', showCoupleCats);
}

function showCoupleCats() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="couple_cats.jpg" alt="Couple Cats">
        <img src="cute1.jpg" alt="Cute Image 1">
        <img src="cute2.jpg" alt="Cute Image 2">
    `;
    playMusic('music21.mp3');
}