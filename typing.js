const input_element = document.getElementById('user-input');
const display_element = document.getElementById('display_element');
const quotes = ["For the first time, he heard something that he knew to be music. He heard people singing. Behind him, across vast distances of space and time, from the place he had left, he thought he heard music too. But perhaps, it was only an echo.", 
                "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality. Open your eyes, look up to the skies and see. I'm just a poor boy, I need no sympathy. Because I'm easy come, easy go, little high, little low. Any way the wind blows doesn't really matter to me.", 
                "Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not... that way. I hate so much about the things that you choose to be.", 
                "My love is alive way down in my heart. Although we are miles apart, if you ever need a helping hand I'll be there on the double as fast as I can.", 
                "All the blue light reflections that color my mind when I sleep. And the lovesick rejections that accompany the company I keep. All the razor perceptions that cut just a little too deep. Hey I can bleed as well as anyone, but I need someone to help me sleep.", 
                "What's cool about really little kids is that they don't say stuff to try to hurt your feelings, even though sometimes they do say stuff that hurts your feelings. But they don't actually know what they're saying. Big kids, though: they know what they're saying. And that is definitely not fun for me.", 
                "Remember that humor is written backwards. That means you first find the cliche you want to work on, then build a story around it.", 
                "And even though the moment passed me by, I still can't turn away. 'Cause all the dreams you never thought you'd lose got tossed along the way. And letters that you never meant to send got lost or thrown away. And now we're grown up orphans that never knew their names. We don't belong to no one; that's a shame. If you could hide inside me, maybe for a while, and I won't tell no one your name.", 
                "You see, what we're talkin' about here is an organism that imitates other life-forms, and it imitates 'em perfectly. When this thing attacked our dogs it tried to digest them... absorb them, and in the process shape its own cells to imitate them. This for instance. That's not dog. It's imitation. We got to it before it had time to finish.", 
                "You can tell me that your dog ran away then tell me that it took three days. I've heard every joke, I've heard every one you'd say. You think there's not a lot goin' on. Look closer baby, you're so wrong. And that's why you can stay so long when there's not a lot goin' on.", "Buddy sat down beside me. He put his arm around my waist and brushed the hair from my ear. I didn't move. Then I heard him whisper, 'How would you like to be Mrs Buddy Willard?' I had an awful impulse to laugh.",
                "To make power, people try to put pieces of this metal close enough together that they make heat fast, but not so close that they go out of control and blow up. This is very hard, but there is so much heat and power stored in this metal that some people have wanted to try anyway.",
                "The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possibly can. You will get an enormous reward. You will have created something.",
                "I want to play a game. Let's play hide and seek. Those were her exact words. Yay, you found one, I can hear her, even now. Wow, you found another one. There must be a purpose to this. That's it... The beacon is lit! I know where and when you are! Sooner or later, I will find you. Together, we will ensure a better future for the children.",
                "I am sailing home again. 'Cross the sea I am sailing stormy waters to be near you, to be free. I am flying like a bird 'cross the sky. I am flying, passing high clouds to be with you, to be free.",
                "He felt that he could not divert people's hatred from himself, because the reason for that hatred was not that he was bad (then he could have tried to be better), but that he was shamefully and repulsively unhappy. For that, for the very fact that his heart was wounded, they would be merciless towards him, as dogs kill a wounded dog howling with pain.",
                "I imagine death so much it feels more like a memory. Is this where it gets me, on my feet, several feet ahead of me? I see it coming, do I run or fire my gun or let it be? There is no beat, no melody. Burr, my first friend, my enemy. Maybe the last face I ever see. If I throw away my shot, is this how you'll remember me?",
                "The bonds between ourselves and another person exist only in our minds. Memory as it grows fainter loosens them, and notwithstanding the illusion by which we want to be duped and with which, out of love, friendship, politeness, deference, duty, we dupe other people, we exist alone. Man is the creature who cannot escape from himself, who knows other people only in himself, and when he asserts the contrary, he is lying.",
                "I don't want to sell anything, buy anything, or process anything as a career. I don't want to sell anything bought or processed, or buy anything sold or processed, or process anything sold, bought, or processed, or repair anything sold, bought, or processed. You know, as a career, I don't want to do that.",
                "We have faced our enemies a thousand times or even more; still, they cannot make us kneel. One thousand years of constant war! The giants look for any chance to bring down Asgaard's mighty walls. No matter what they send at us, we will never let it fall!",
                "It's taken me a lot of years, but I've come around to this: If you're dumb, surround yourself with smart people. And if you're smart, surround yourself with smart people who disagree with you. I'm an awfully smart man, and Mike Sabath is an idiot. He had you and he blew it. You're gonna do great here but you've gotta trust us.",
                "To be honest, as this world goes, is to be one man picked out of ten thousand.",
                "It is one thing to write as poet and another to write as a historian: the poet can recount or sing about things not as they were, but as they should have been, and the historian must write about them not as they should have been, but as they were, without adding or subtracting anything from the truth.",
                "Live a good life. If there are gods and they are just, they will not care how devout you have been, but will welcome you based on the virtues you have lived by. If there are gods, but unjust, then you should not want to worship them. If there are no gods, then you will be gone, but will have lived a noble life that will live on in the memories of your loved ones.",
                "He did not know how long it took, but later he looked back on this time of crying in the corner of the dark cave and thought of it as when he learned the most important rule of survival, which was that feeling sorry for yourself didn't work. It wasn't just that it was wrong to do, or that it was considered incorrect. It was more than that - it didn't work.",
                "You, the people, have the power. The power to create machines, the power to create happiness. You, the people, have the power to make this life free and beautiful, to make this life a wonderful adventure. Then, in the name of democracy, let us use that power, let us all unite. Let us fight for a new world, a decent world that will give men a chance to work, that will give you the future.",
                "All around us there are powers. There are animals like the whale, the bear, the wolf, and the eagle. There are powers like the sun and moon and seasons. And there are the powers inside of us like happiness and anger. We can feel all of these and dance to them. They all have much to teach us. Today, we saw the whale, so tonight we'll dance the whale dance. Each of us will tell what we learned from watching the whale.",
                "Good evening, London. Allow me first to apologize for this interruption. I do, like many of you, appreciate the comforts of everyday routine - the security of the familiar, the tranquility of repetition. I enjoy them as much as any bloke. But in the spirit of commemoration, I thought we could mark this November the 5th, a day that is sadly no longer remembered, by taking some time out of our daily lives to sit down and have a little chat.",
                "We know things are bad - worse than bad. They're crazy. It's like everything everywhere is going crazy so we don't go out anymore. We sit in the house and slowly the world we are living in is getting smaller and all we say is, \"Please, at least leave us alone in our living rooms. Let me have my toaster and my TV and my steel-belted radials and I won't say anything. Just leave us alone.\"",
                "In the witch trials, it was nearly impossible to provide compelling alibis for accused witches: The rules of evidence had a special character. For example, in more than one case a husband attested that his wife was asleep in his arms at the very moment she was accused of frolicking with the devil; but the archbishop patiently explained that a demon had taken the place of the wife.",
                "Corn is what feeds the steer that becomes the steak. Corn feeds the chicken and the pig, the turkey and the lamb, the catfish and the tilapia and, increasingly, even the salmon, a carnivore by nature that the fish farmers are reengineering to tolerate corn. The eggs are made of corn. The milk and cheese and yogurt, which once came from dairy cows that grazed on grass, now typically come from cows that spend their working lives indoors tethered to machines, eating corn.",
                "You no good little slimebag! I'm going to make you the second most miserable cab driver in New York City! I'll make sure your windows don't open in the summer, and that the heating doesn't work in the winter! I'll take the headrest off your driver's seat and send you to the most desolate parts of town! The most miserable cab driver in New York is the one that either lets him down... or feeds him!",
                "I've been thinking. When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these? Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's going to burn your house down! With the lemons! I'm going to get my engineers to invent a combustible lemon that burns your house down!",
                "If we can simply determine whether Johnson was \"conservative\" or \"liberal,\" for instance, we can use that comprehensive allegiance to determine where he would have stood on every issue, just as we make the same blanket determination for ourselves. No need to look at particulars. In other words, we should like to know which sort of cant would best suit the man who told us to clear our minds of cant.",
                "We all, every one of us, carry a star inside our chests. Light and darkness are always side-by-side. If you show even the slightest fear or tears to the darkness, it will immediately swell and come attacking, and swallow up the light. Serenity, in order to defeat the darkness and dark souls, you must keep the star inside your chest burning brightly at all times. That is your most important charge.",
                "One day in Boston, I was in Harvard Square. I saw a cover of Popular Electronics with this thing that looked like what I had been imagining, and so I grabbed it off the shelf, I looked at it and I bought it and I ran back to Bill's dorm, and I think he was probably playing poker that night and usually losing money at that point. One of the few times when that's been the case.",
                "I don't understand you people! I mean all these picky little points you keep bringing up. They don't mean nothing! You saw this kid just like I did. You're not gonna tell me you believe that phony story about losing the knife, and that business about being at the movies. Look, you know how these people lie! It's born in them! I mean, what the heck? I don't have to tell you! They don't know what the truth is!",
                "I think the world divides neatly into those who are excited by the managed induction of terror and those who are not. I do not find terror exciting. I find it terrifying. One of my basic goals is to subject my nervous system to as little total terror as possible. The cruel paradox of course is that this kind of makeup usually goes hand in hand with a delicate nervous system that's extremely easy to terrify.",
                "Let folly be our cloak, a veil before the eyes of the Enemy! For he is very wise, and weighs all things to a nicety in the scales of his malice. But the only measure that he knows is desire, desire for power; and so he judges all hearts. Into his heart the thought will not enter that any will refuse it, that having the Ring we may seek to destroy it. If we seek this, we shall put him out of reckoning.",
                "In general, many of these targets are easier marks if you are wearing the correct uniform. You should always have one suit or fashionable dress outfit hanging in the closet for the proper heists. Specialized uniforms, such as nun and priest garb, can be most helpful. Check out your local uniform store for a wide range of clothes that will get you in, and especially out, of all kinds of stores.",
                "At the time when Britain faced a plunge into chaos and darkness, a hero emerged who not only succeeded in getting the feuding tribes to work together against their common enemy, but led them in a series of smashing victories that established him as a figure of great power and importance - a figure ripe for developing into the myth-laden king of later accounts.",
                "Every time people try to punish the rich, the rich don't simply comply. They react. They have the money, power, and intent to change things. They don't just sit there and voluntarily pay more taxes. Instead, they search for ways to minimize their tax burden. They hire smart attorneys and accountants, and persuade politicians to change laws or create legal loopholes. They use their resources to effect change.",
                "Only I could do it! I was well aware that killing people is crime in itself! Yet at that point it was the only way to make things right! I thought to myself that someday people will come to realize this as much, and regard it as an act of justice! I had no choice but to act as Kira... it was the destiny given to me. I was chosen to renew this rotten world, to bring about true peace - a utopia.",
                "Lasher, Paul realized, was the only one who hadn't lost touch with reality. He, alone of the four leaders, seemed unshocked by the course of events, undisturbed by them, even, inexplicably, at peace. Paul, perhaps, had been the one most out of touch, having had little time for reflection, having been so eager to join a large, confident organization with seeming answers to the problems that had made him sorry to be alive.",
                "Everyone said I was daft to build a castle on a swamp, but I built it all the same, just to show them. It sank into the swamp. So I built a second one. That sank into the swamp. So I built a third. That burned down, fell over, then sank into the swamp. But the fourth one stayed up. And that's what you're going to get, Lad, the strongest castle in all of England.",
                "Mother says I was a dancer before I could walk. She says I began to sing long before I could talk. But I've often wondered, how did it all start? Who found out that nothing can capture a heart like a melody can? Well, whoever it was, I'm a fan. So I say thank you for the music, the songs I'm singing. Thanks for all the joy they're bringing. Who can live without it? I ask in all honesty. What would life be? Without a song or a dance what are we? So I say thank you for the music, for giving it to me.",
                "Dropping through sky, through the glass of the roof, through the roof of your mouth, through the mouth of your eye, through the eye of the needle, it's easier for me to get closer to heaven than ever feel whole again.",
                "He may look like an idiot and talk like an idiot, but don't let that fool you. He really is an idiot."];
const words = "the of to and a in is it you that he was for on are with as I his they be at one have this from or had by hot but some what there we can out other were all your when up use word how said an each she which do their time if will way about many then them would write like so these her long make thing see him two has look more day could go come did my sound no most number who over know water than call first people may down side been now find any new work part take get place made live where after back little only round man year came show every good me give our under name very through just form much great think say help low line before turn cause same mean differ move right boy old too does tell sentence set three want air well also play small end put home read hand port large spell add even land here must big high such follow act why ask men change went light kind off need house picture try us again animal point mother world near build self earth father head stand own page should country found answer school grow study still learn plant cover food sun four thought let keep eye never last door between city tree cross since hard start might story saw far sea draw left late run don't while press close night real life few stop open seem together next white children begin got walk example ease paper often always music those both mark book letter until mile river car feet care second group carry took rain eat room friend began idea fish mountain north once base hear horse cut sure watch color face wood main enough plain girl usual young ready above ever red list though feel talk bird soon body dog family direct pose leave song measure state product black short numeral class wind question happen complete ship area half rock order fire south problem piece told knew pass farm top whole king size heard best hour better true during hundred am remember step early hold west ground interest reach fast five sing listen six table travel less morning ten simple several vowel toward war lay against pattern slow center love person money serve appear road map science rule govern pull cold notice voice fall power town fine certain fly unit lead cry dark machine note wait plan figure star box noun field rest correct able pound done beauty drive stood contain front teach week final gave green oh quick develop sleep warm free minute strong special mind behind clear tail produce fact street inch lot nothing course stay wheel full force blue object decide surface deep moon island foot yet busy test record boat common gold possible plane age dry wonder laugh thousand ago ran check game shape yes hot miss brought heat snow bed bring sit perhaps fill east weight language among";
let all_words = words.split(" ");
let type = 'words';
var characters_length;
var challenge_text;
var seconds = 0; //solved
var raw = 0;
var wpm = 0; //solved
var accuracy = 100; //accuracy is equal to ratio of true characters compared to false_characters
var random_words = [];
var srw = []
var span_index = 0;
var added = false;
var true_characters = 0; //solved
var false_characters = 0; //solved
let started = false
let user_characters = '';
let input_count = 0;
var Interval;
var data;

window.onload = function() {
  repeat()
}
function repeat() {
  clearInterval(Interval)
  srw = [];
  raw = 0;
  input_count = 0;
  wpm = 0;
  accuracy = 100;
  span_index = 0;
  seconds = 0;
  true_characters = 0;
  false_characters = 0;
  added = false;
  started = false;
  input_element.value = '';
  user_characters = '';
  document.getElementById('display_element').innerHTML='';
  if (type == 'words') {
    random_words = [];
    all_words = words.split(" ");
    for (let i = 0; i < 25; i++) {
      random_words.push(all_words[Math.floor(Math.random() * all_words.length)])
    }
    challenge_text = random_words.join(' ');
  } else if (type == 'text') {
    all_words = quotes[Math.floor(Math.random() * quotes.length)].split(' ');
    challenge_text = all_words.join(' ');
  }
  characters_length = challenge_text.length;
  challenge_text.split('').forEach(letter => {
    characterSpan = document.createElement('span');
    characterSpan.innerText = letter;
    display_element.appendChild(characterSpan);
  })
  display_variables();
}
function repeat2() {
  document.querySelector('.field').style.opacity="1";
  document.querySelector('.results-field').style.opacity='0';
  document.querySelector('.field').style.zIndex="1";
  document.querySelector('.results-field').style.zIndex="0";
  repeat()
}
input_element.addEventListener('input', () => {
    typing() 
    if (started === false) {
        started = true;
        Interval = setInterval(function() {
          
            seconds ++;
            wpm = Math.floor((true_characters / 5) / (seconds / 60))
            raw = Math.floor((input_count / 5) / (seconds / 60))
            console.log('true_characters:',true_characters)
            console.log('input_count:',input_count)
            accuracy = Math.floor(((user_characters.length - false_characters) / user_characters.length) * 100);
            var moment_stats = [seconds,wpm,raw];
            srw.push(moment_stats)
            display_variables();
            if (added == false) {
              added = false;
            }
            
        }, 1000);
    }
})
function typing() {
  input_count ++
  user_characters = input_element.value;
  const characters = challenge_text;
  const span_characters = display_element.querySelectorAll('span');
  span_index = user_characters.length;
  true_characters = 0;
  false_characters = 0;
  span_characters.forEach((character, index) => {
    const user_character = user_characters[index];
    character.className='';
    if (user_character == null) {

    } else if (user_character == character.innerText) {
        true_characters ++;
        character.classList.add('true');
        character.classList.remove('false')
    } else if (user_character != character.innerText){
        false_characters ++;
        character.classList.add('false');
        character.classList.remove('true')
    }
  })
  if (user_characters.length == characters.length) {
      clearInterval(Interval);
      display_results()
  }
  span_characters[user_characters.length].classList.add('reached');
}
function display_variables() {
  document.querySelector('.wpm').innerHTML=wpm + ' wpm';
  document.querySelector('.accuracy').innerHTML=accuracy + '%';
}
function display_results() {
  document.querySelector('.field').style.opacity="0";
  document.querySelector('.results-field').style.opacity='1';
  document.querySelector('.field').style.zIndex="0";
  document.querySelector('.results-field').style.zIndex="1";
  document.querySelector('#wpm-result').innerHTML=wpm;
  document.querySelector('#acc-result').innerHTML=accuracy + "%";
  drawChart()
}
function text() {
  type = 'text';
  repeat();
  document.getElementById('text-button').classList.add('selected');
  document.getElementById('words-button').classList.remove('selected');
}
function word() {
  type = 'words';
  repeat();
  document.getElementById('text-button').classList.remove('selected');
  document.getElementById('words-button').classList.add('selected');
}








google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  data = new google.visualization.DataTable();
  data.addColumn('number','time');
  data.addColumn('number','wpm');
  data.addColumn('number','raw');
  data.addRows(srw);
  var options = {
    curveType: 'function',
    backgroundColor: ('rgba(0,0,0,0.5)'),
    legend: { position: 'right', textStyle:{color:'#C8C8C8'} },
    colors: ['white','#646464'],
    backgroundColor : {
      fill: '#1E1E1E',
      stroke: '#3C3C3C'
    },
    vAxis: {
      minValue:0,
      
      title: 'Words per minute',
      gridlines: {
        color: '#3C3C3C'
      },
      textStyle: {
        color:'#C8C8C8'
      },
      titleTextStyle: {
        color: '#C8C8C8',
        fontName: 'Verdana',
        fontSize: 12,
        italic: false 
      }
      
    },
    hAxis: {
      minValue:1,
      gridlines: {
        color: '#3C3C3C'
      },
      textStyle: {
        color:'#C8C8C8'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}