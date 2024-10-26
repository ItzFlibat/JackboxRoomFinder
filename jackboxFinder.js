const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const gameNames = {
    prototype: 'Prototype',
    'ecast-test-client': 'EcastTestClient',
    'quiplash2-international': 'Quiplash 2 InterLASHional',
    'guesspionage-crowdplay': 'Guesspionage Crowdplay',
    drawful2: 'Drawful 2',
    drawful2international: 'Drawful 2',
    'acquisitions-inc': 'Acquisitions, Inc.',
    bigsurvey: 'The Jackbox Survey Scramble',
    ydkj2015: "You Don't Know Jack 2015",
    drawful: 'Drawful',
    wordspud: 'Word Spud',
    lieswatter: 'Lie Swatter',
    fibbage: 'Fibbage',
    fibbage2: 'Fibbage 2',
    earwax: 'Earwax',
    auction: 'Bidiots',
    bombintern: 'Bomb Corp',
    quiplash: 'Quiplash',
    fakinit: "Fakin' It",
    awshirt: 'Tee K.O.',
    quiplash2: 'Quiplash 2',
    triviadeath: 'Trivia Murder Party',
    pollposition: 'Guesspionage',
    fibbage3: 'Fibbage 3',
    survivetheinternet: 'Survive the Internet',
    monstermingle: 'Monster Seeking Monster',
    bracketeering: 'Bracketeering',
    overdrawn: 'Civic Doodle',
    ydkj2018: "You Don't Know Jack: Full Stream",
    splittheroom: 'Split the Room',
    rapbattle: 'Mad Verse City',
    slingshoot: 'Zeeple Dome',
    patentlystupid: 'Patently Stupid',
    triviadeath2: 'Trivia Murder Party 2',
    rolemodels: 'Role Models',
    jokeboat: 'Joke Boat',
    ridictionary: 'Dictionarium',
    pushthebutton: 'Push the Button',
    'jackbox-talks': 'Talking Points',
    quiplash3: 'Quiplash 3',
    everyday: 'The Devils and the Details',
    worldchamps: "Champ'd Up",
    'blanky-blank': "Blather 'Round",
    'apply-yourself': 'Job Job',
    'drawful-animate': 'Drawful Animate',
    'the-wheel': 'The Wheel of Enormous Proportions',
    'survey-bomb': 'The Poll Mine',
    'murder-detectives': 'Weapons Drawn',
    'quiplash3-tjsp': 'Quiplash 3',
    'awshirt-tjsp': 'Tee K.O.',
    'triviadeath2-tjsp': 'Trivia Murder Party 2',
    fourbage: 'Fibbage 4',
    htmf: 'Roomerang',
    'antique-freak': 'Junktopia',
    'range-game': 'Nonsensory',
    lineup: 'Quixort',
    awshirt2: 'Tee K.O. 2',
    'nopus-opus': 'Dodo Re Mi',
    'risky-text': 'FixyText',
    'time-trivia': 'Timejinx',
    'us-them': 'Hypnotorious',
    fakinit2: "Fakin' It All Night Long",
    drawful3: 'Dirty Drawful',
    captcha: 'Let Me Finish'
};

function generateCode(length = 4) {
    return Array.from({
        length
    }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
}

function capitalizeBoolean(value) {
    return value ? 'True' : 'False';
}

async function main() {
    let testedCount = 0;

    while (true) {
        const code = generateCode();
        testedCount++;
        console.log(`Testing: ${code} (Tried ${testedCount} rooms)`);

        try {
            const response = await fetch(`https://ecast.jackboxgames.com/api/v2/rooms/${code}`);
            if (response.ok) {
                const data = await response.json();

                let appTag = data.body.appTag;
                const gameName = gameNames[appTag] || appTag;

                console.log(`Room Found: ${code}`);
                console.log(`Room Game: ${gameName}`);
                console.log(`Audience Enabled: ${capitalizeBoolean(data.body.audienceEnabled)}`);
                console.log(`Password Required: ${capitalizeBoolean(data.body.passwordRequired)}`);
                console.log(`Twitch Locked: ${capitalizeBoolean(data.body.twitchLocked)}`);
                console.log(`Moderation Enabled: ${capitalizeBoolean(data.body.moderationEnabled)}`);
                console.log(`Link to Game: https://jackbox.tv/?code=${code}`);
                break;
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
}

main();
