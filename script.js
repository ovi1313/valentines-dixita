let currentAudio = null;

// Function to play music
function playMusic(src) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(src);
    currentAudio.loop = true;
    currentAudio.play().catch(error => {
        console.log('Autoplay was prevented. Adding a play button.');
        addPlayButton(src);
    });
}

// Function to add a play button if autoplay is prevented
function addPlayButton(src) {
    const content = document.getElementById('content');
    const playButton = document.createElement('button');
    playButton.textContent = 'Play Music';
    playButton.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(src);
        currentAudio.loop = true;
        currentAudio.play();
        playButton.remove();
    });
    content.appendChild(playButton);
}

document.getElementById('start-btn').addEventListener('click', function() {
    playMusic('music/music6.mp3');
    showCatImages();
});

function showCatImages() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <img src="images/3396d75ebfd5f9fb1f1d2e413e684e48.jpg" alt="Cat Image 1">
        <img src="images/death note matching icons.jpg" alt="Cat Image 2">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music8.mp3');
        showAwkwardText();
    });
}

function showAwkwardText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, I know this is awkward 😭</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music5.mp3');
        askAboutValentines();
    });
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
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music7.mp3');
        askAboutCelebration();
    });
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
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music2.mp3');
        showFeelingsText();
    });
}

function showFeelingsText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, I know these distances keep us apart, but my feelings do not alter.</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music9.mp3');
        showFirstDayText();
    });
}

function showFirstDayText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Since the first day I saw you, I felt something in me.</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music10.mp3');
        showMeanText();
    });
}

function showMeanText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But I stayed, refrained my feelings, and was mean to you lol 😭</h2>
        <img src="images/474099622_1163071962155975_3470776591597852520_n_(1).jpg" alt="me">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music8.mp3');
        showFellForYouText();
    });
}

function showFellForYouText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I fell for you, despite the distances.</h2>
        <img src="images/Mumbai_nightlife_S.jpg" alt="wolf forest">
        <img src="images/image_processing20191010-4-pcjcgb.jpg" alt="bunny den">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music12.mp3');
        showDontShowItText();
    });
}

function showDontShowItText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I don't show it, to not make it awkward, and I know online doesn't work, but I'm happy to have you regardless.</h2>
        <button id="next-btn">Okay</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music14.mp3');
        showDesireText();
    });
}

function showDesireText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I desire you, I adore you.</h2>
        <button id="next-btn">Okay</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music1.mp3');
        showRating();
    });
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
    document.getElementById('next-btn').addEventListener('click', showBirthDatesText);
}

function showBirthDatesText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Those digits were your birth dates lol</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', showGirlsText);
}

function showGirlsText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Well, you know all these girls are dying to date me 😎</h2>
        <img src="images/ana-de-armas-1626771511.jpg" alt="Ana de Armas">
        <img src="images/images.jpg" alt="Scarlett Johansson">
        <img src="images/images (1).jpg" alt="Disha Patani">
        <img src="images/go8GUz7poytTvm9P9HNHQ3T84N1.jpg" alt="Kriti Sanon">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music4.mp3');
        showChooseText();
    });
}

function showChooseText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But do you know whom I want to have? Do you know who I would choose over all these given the chance?</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music9.mp3');
        showHintText();
    });
}

function showHintText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Hint: She plays COD, has a dog and a cat, two sisters, likes momo, and supports Barca 😑😒</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music11.mp3');
        showMirrorPic();
    });
}

function showMirrorPic() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>🫵🫵</h2>
        <img src="images/474643101_1143588693932858_3607986806516585990_n.jpg" alt="Mirror Pic">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music6.mp3');
        showOldWomanPic();
    });
}

function showOldWomanPic() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>You might look like this after 50 years😭😭</h2>
        <img src="images/old-nepalese-woman-kathmandu-nepal-asia-KM0AK9.jpg" alt="Old Woman">
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music5.mp3');
        showLoveYouText();
    });
}

function showLoveYouText() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>But I would still LOVE YOU💗💗</h2>
        <button id="next-btn">Continue</button>
    `;
    document.getElementById('next-btn').addEventListener('click', () => {
        playMusic('music/music13.mp3');
        showValentineProposal();
    });
}

function showValentineProposal() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Dixita Sharma, would you be my Online Valentine?</h2>
        <button id="yes-btn">Yes</button>
    `;
    document.getElementById('yes-btn').addEventListener('click', () => {
        playMusic('music/music3.mp3');
        showCoupleCats();
    });
}

function showCoupleCats() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>I'm waiting in Roblox :3❤️🩷</h2>
        <img src="images/465083917_536052149433552_8611436472363315222_n.jpg" alt="Couple">
        <img src="images/470057438_1106251534211332_3137401872797282078_n.jpg" alt="Cute Image">
        <img src="images/472334904_1652437555347607_2182129606558583818_n.jpg" alt="Cute Image 2">
    `;
    playMusic('music/music14.mp3');
}
