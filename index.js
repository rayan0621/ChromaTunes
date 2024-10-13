const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img'),
    volumeControl = document.getElementById('volume');

const music = new Audio();

const songs = [
    {
        path: "music/Die With A Smile.mp3",
        displayName: "Die With A Smile",
        cover: "images/image1.jpg",
        artist: "Lady Gaga & Bruno Mars",
    },
    {
        path: "music/Mind Over Matter.mp3",
        displayName: "Mind Over Matter",
        cover: "images/image2.jpg",
        artist: "Young the Giant",
    },
    {
        path: "music/Take On Me.mp3",
        displayName: "Take On Me",
        cover: "images/image3.jpg",
        artist: "A-ha",
    },
    {
        path: "music/Mr. Brightside.mp3",
        displayName: "Mr. Brightside",
        cover: "images/image4.jpg",
        artist: "The Killers",
    },
    {
        path: "music/Adore You.mp3",
        displayName: "Adore You",
        cover: "images/image5.jpeg",
        artist: "Harry Styles",
    },
    {
        path: "music/Sweater Weather.mp3",
        displayName: "Sweater Weather",
        cover: "images/image6.jpg",
        artist: "The Neighbourhood",
    },
    {
        path: "music/Teeth.mp3",
        displayName: "Teeth",
        cover: "images/image7.jpg",
        artist: "5 Seconds of Summer",
    },
    {
        path: "music/Save Your Tears.mp3",
        displayName: "Save Your Tears",
        cover: "images/image8.jpg",
        artist: "The Weekend",
    },
    {
        path: "music/Tek It.mp3",
        displayName: "Tek It",
        cover: "images/image9.jpg",
        artist: "Cafuné",
    },
    {
        path: "music/Line Without a Hook.mp3",
        displayName: "Line Without a Hook",
        cover: "images/image10.jpg",
        artist: "Ricky Montgomery",
    },
    {
        path: "music/deja vu.mp3",
        displayName: "deja vu",
        cover: "images/image11.jpg",
        artist: "Olivia Rodrigo",
    },
    {
        path: "music/Those Eyes.mp3",
        displayName: "Those Eyes",
        cover: "images/image12.jpg",
        artist: "New West",
    },
    {
        path: "music/505.mp3",
        displayName: "505",
        cover: "images/image13.jpg",
        artist: "Arctic Monkeys",
    },
    {
        path: "music/Car's Outside.mp3",
        displayName: "Car's Outside",
        cover: "images/image14.jpg",
        artist: "James Arthur",
    },
    {
        path: "music/Atlantis.mp3",
        displayName: "Atlantis",
        cover: "images/image15.jpg",
        artist: "Seafret",
    },
    {
        path: "music/Everybody's Changing.mp3",
        displayName: "Everybody's Changing",
        cover: "images/image16.jpg",
        artist: "Keane",
    },
    {
        path: "music/Mary On A Cross.mp3",
        displayName: "Mary On A Cross",
        cover: "images/image17.jpg",
        artist: "Ghost",
    },
    {
        path: "music/I Can Wait Forever.mp3",
        displayName: "I Can Wait Forever",
        cover: "images/image18.jpg",
        artist: "Simple Plan",
    },
    {
        path: "music/The Scientist.mp3",
        displayName: "The Scientist",
        cover: "images/image19.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Until I Found You.mp3",
        displayName: "Until I Found You",
        cover: "images/image20.jpg",
        artist: "Stephen Sanchez",
    },
    {
        path: "music/High Hopes.mp3",
        displayName: "High Hopes",
        cover: "images/image21.jpg",
        artist: "Panic! At The Disco",
    },
    {
        path: "music/Bones.mp3",
        displayName: "Bones",
        cover: "images/image22.jpg",
        artist: "Imagine Dragons",
    },
    {
        path: "music/Another Love.mp3",
        displayName: "Another Love",
        cover: "images/image23.jpg",
        artist: "Tom Odell",
    },
    {
        path: "music/The Night We Met.mp3",
        displayName: "The Night We Met",
        cover: "images/image24.jpg",
        artist: "Lord Huron",
    },
    {
        path: "music/Somewhere Only We Know.mp3",
        displayName: "Somewhere Only We Know",
        cover: "images/image25.jpg",
        artist: "Keane",
    },
    {
        path: "music/Yellow.mp3",
        displayName: "Yellow",
        cover: "images/image26.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Payphone.mp3",
        displayName: "Payphone",
        cover: "images/image27.jpg",
        artist: "Maroon 5 feat. Wiz Khalifa",
    },
    {
        path: "music/The Man Who Can't Be Moved.mp3",
        displayName: "The Man Who Can't Be Moved",
        cover: "images/image28.jpg",
        artist: "The Script",
    },
    {
        path: "music/Sway.mp3",
        displayName: "Sway",
        cover: "images/image29.jpg",
        artist: "Bic Runga",
    },
    {
        path: "music/Araw-Araw.mp3",
        displayName: "Araw-Araw",
        cover: "images/image30.jpg",
        artist: "Ben&Ben",
    },
    {
        path: "music/Baby Blue Eyes.mp3",
        displayName: "Baby Blue Eyes",
        cover: "images/image31.jpg",
        artist: "A Rocket To The Moon",
    },
    {
        path: "music/Ere.mp3",
        displayName: "Ere",
        cover: "images/image32.jpg",
        artist: "Juan Karlos",
    },
    {
        path: "music/Migraine.mp3",
        displayName: "Migraine",
        cover: "images/image33.jpg",
        artist: "Moonstar 88",
    },
    {
        path: "music/Habang Buhay.mp3",
        displayName: "Habang Buhay",
        cover: "images/image34.jpg",
        artist: "Zack Tabudlo",
    },
    {
        path: "music/Galway Girl.mp3",
        displayName: "Galway Girl",
        cover: "images/image35.jpg",
        artist: "Ed Sheeran",
    },
    {
        path: "music/Shut Up and Dance.mp3",
        displayName: "Shut Up and Dance",
        cover: "images/image36.jpg",
        artist: "WALK THE MOON",
    },
    {
        path: "music/Angel Baby.mp3",
        displayName: "Angel Baby",
        cover: "images/image37.jpg",
        artist: "Troye Sivan",
    },
    {
        path: "music/Dilaw.mp3",
        displayName: "Dilaw",
        cover: "images/image38.jpg",
        artist: "Maki",
    },
    {
        path: "music/Come Inside Of My Heart.mp3",
        displayName: "Come Inside Of My Heart",
        cover: "images/image39.jpg",
        artist: "IV Of Spades",
    },
    {
        path: "music/golden hour.mp3",
        displayName: "golden hour",
        cover: "images/image40.jpg",
        artist: "JVKE",
    },
    {
        path: "music/Summertime Sadness.mp3",
        displayName: "Summertime Sadness",
        cover: "images/image41.jpg",
        artist: "Lana Del Rey",
    },
    {
        path: "music/As It Was.mp3",
        displayName: "As It Was",
        cover: "images/image42.jpg",
        artist: "Harry Styles",
    },
    {
        path: "music/This Side of Paradise.mp3",
        displayName: "This Side of Paradise",
        cover: "images/image43.jpg",
        artist: "Coyote Theory",
    },
    {
        path: "music/Boulevard of Broken Dreams.mp3",
        displayName: "Boulevard of Broken Dreams",
        cover: "images/image44.jpg",
        artist: "Green Day",
    },
    {
        path: "music/Welcome to the Black Parade.mp3",
        displayName: "Welcome to the Black Parade",
        cover: "images/image45.jpg",
        artist: "My Chemical Romance",
    },
    {
        path: "music/Jenny.mp3",
        displayName: "Jenny",
        cover: "images/image46.jpg",
        artist: "The Click Five",
    },
    {
        path: "music/Collide.mp3",
        displayName: "Collide",
        cover: "images/image47.jpg",
        artist: "Howie Day",
    },
    {
        path: "music/Enchanted.mp3",
        displayName: "Enchanted",
        cover: "images/image48.jpg",
        artist: "Taylor Swift",
    },
    {
        path: "music/Viva La Vida.mp3",
        displayName: "Viva La Vida",
        cover: "images/image49.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Breakeven.mp3",
        displayName: "Breakeven",
        cover: "images/image50.jpg",
        artist: "The Script",
    },
    {
        path: "music/Girls Like You.mp3",
        displayName: "Girls Like You",
        cover: "images/image51.jpg",
        artist: "Maroon 5",
    },
    {
        path: "music/Circles.mp3",
        displayName: "Circles",
        cover: "images/image52.jpg",
        artist: "Post Malone",
    },
    {
        path: "music/Just A Dream.mp3",
        displayName: "Just A Dream",
        cover: "images/image53.jpg",
        artist: "Nelly",
    },
    {
        path: "music/Ridin' Solo.mp3",
        displayName: "Ridin' Solo",
        cover: "images/image54.jpg",
        artist: "Jason Derulo",
    },
    {
        path: "music/Happier.mp3",
        displayName: "Happier",
        cover: "images/image55.jpg",
        artist: "Marshmello & Bastille",
    },
    {
        path: "music/I Ain't Worried.mp3",
        displayName: "I Ain't Worried",
        cover: "images/image56.jpg",
        artist: "One Republic",
    },
    {
        path: "music/Pompeii.mp3",
        displayName: "Pompeii",
        cover: "images/image57.jpg",
        artist: "Bastille",
    },
    {
        path: "music/She Looks So Perfect.mp3",
        displayName: "She Looks So Perfect",
        cover: "images/image58.jpg",
        artist: "5 Seconds of Summer",
    },
    {
        path: "music/The One That Got Away.mp3",
        displayName: "The One That Got Away",
        cover: "images/image59.jpg",
        artist: "Katy Perry",
    },
    {
        path: "music/Elastic Heart.mp3",
        displayName: "Elastic Heart",
        cover: "images/image60.jpg",
        artist: "Sia",
    },
    {
        path: "music/Titanium.mp3",
        displayName: "Titanium",
        cover: "images/image61.jpg",
        artist: "David Guetta feat. Sia",
    },
    {
        path: "music/Middle.mp3",
        displayName: "Middle",
        cover: "images/image62.jpg",
        artist: "DJ Snake & Bipolar Sunshine",
    },
    {
        path: "music/STAY.mp3",
        displayName: "STAY",
        cover: "images/image63.jpg",
        artist: "The Kid Laroi & Justin Bieber",
    },
    {
        path: "music/Ghost.mp3",
        displayName: "Ghost",
        cover: "images/image64.jpg",
        artist: "Justin Bieber",
    },
    {
        path: "music/Please Don't Go.mp3",
        displayName: "Please Don't Go",
        cover: "images/image65.jpg",
        artist: "Mike Posner",
    },
    {
        path: "music/She Knows.mp3",
        displayName: "She Knows",
        cover: "images/image66.jpg",
        artist: "J.Cole feat. Amber Coffman & Cults",
    },
    {
        path: "music/Sugar.mp3",
        displayName: "Sugar",
        cover: "images/image67.jpg",
        artist: "Maroon 5",
    },
    {
        path: "music/Something Just Like This.mp3",
        displayName: "Something Just Like This",
        cover: "images/image68.jpg",
        artist: "The Chainsmokers & Coldplay",
    },
    {
        path: "music/Watermelon Sugar.mp3",
        displayName: "Watermelon Sugar",
        cover: "images/image69.jpg",
        artist: "Harry Styles",
    },
    {
        path: "music/Jealous.mp3",
        displayName: "Jealous",
        cover: "images/image70.jpg",
        artist: "Nick Jonas",
    },
    {
        path: "music/Hey Daddy (Daddy's Home).mp3",
        displayName: "Hey Daddy (Daddy's Home)",
        cover: "images/image71.jpg",
        artist: "Usher",
    },
    {
        path: "music/Toothbrush.mp3",
        displayName: "Toothbrush",
        cover: "images/image72.jpg",
        artist: "DNCE",
    },
    {
        path: "music/Oh Cecilia (Breaking My Heart).mp3",
        displayName: "Oh Cecilia (Breaking My Heart)",
        cover: "images/image73.jpg",
        artist: "The Vamps",
    },
    {
        path: "music/I Took A Pill In Ibiza (Seeb Remix).mp3",
        displayName: "I Took A Pill In Ibiza (Seeb Remix)",
        cover: "images/image74.jpg",
        artist: "Mike Posner",
    },
    {
        path: "music/Falling.mp3",
        displayName: "Falling",
        cover: "images/image75.jpg",
        artist: "Trevor Daniel",
    },
    {
        path: "music/House of Memories.mp3",
        displayName: "House of Memories",
        cover: "images/image76.jpg",
        artist: "Panic! At The Disco",
    },
    {
        path: "music/All Time Low.mp3",
        displayName: "All Time Low",
        cover: "images/image77.jpg",
        artist: "John Bellion",
    },
    {
        path: "music/Out of My League.mp3",
        displayName: "Out of My League",
        cover: "images/image78.jpg",
        artist: "Fitz and the Tantrums",
    },
    {
        path: "music/Blue Sky.mp3",
        displayName: "Blue Sky",
        cover: "images/image79.jpg",
        artist: "Hale",
    },
    {
        path: "music/Fix You.mp3",
        displayName: "Fix You",
        cover: "images/image80.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Waiting for the End.mp3",
        displayName: "Waiting for the End",
        cover: "images/image81.jpg",
        artist: "Linkin Park",
    },
    {
        path: "music/Over You.mp3",
        displayName: "Over You",
        cover: "images/image82.jpg",
        artist: "Daughtry",
    },
    {
        path: "music/Feel Good Inc..mp3",
        displayName: "Feel Good Inc.",
        cover: "images/image83.jpg",
        artist: "Gorillaz",
    },
    {
        path: "music/Freaky Friday.mp3",
        displayName: "Freaky Friday",
        cover: "images/image84.jpg",
        artist: "Lil Dicky feat. Chris Brown",
    },
    {
        path: "music/Booty Music.mp3",
        displayName: "Booty Music",
        cover: "images/image85.jpg",
        artist: "Git Fresh",
    },
    {
        path: "music/Best Love Song.mp3",
        displayName: "Best Love Song",
        cover: "images/image86.jpg",
        artist: "T-Pain feat. Chris Brown",
    },
    {
        path: "music/Cruel Summer.mp3",
        displayName: "Cruel Summer",
        cover: "images/image87.jpg",
        artist: "Taylor Swift",
    },
    {
        path: "music/Lay All Your Love On Me.mp3",
        displayName: "Lay All Your Love On Me",
        cover: "images/image88.jpg",
        artist: "ABBA",
    },
    {
        path: "music/Lost Stars.mp3",
        displayName: "Lost Stars",
        cover: "images/image89.jpg",
        artist: "Maroon 5",
    },
    {
        path: "music/Style.mp3",
        displayName: "Style",
        cover: "images/image90.jpg",
        artist: "Taylor Swift",
    },
    {
        path: "music/Sign of the Times.mp3",
        displayName: "Sign of the Times",
        cover: "images/image91.jpg",
        artist: "Harry Styles",
    },
    {
        path: "music/Mamushi.mp3",
        displayName: "Mamushi",
        cover: "images/image92.jpg",
        artist: "Megan Thee Stallion feat. Yuki Chiba",
    },
    {
        path: "music/Industry Baby.mp3",
        displayName: "Industry Baby",
        cover: "images/image93.jpg",
        artist: "Lil Nas X",
    },
    {
        path: "music/Borrowed Time.mp3",
        displayName: "Borrowed Time",
        cover: "images/image94.jpg",
        artist: "Cueshé",
    },
    {
        path: "music/Vampire.mp3",
        displayName: "Vampire",
        cover: "images/image95.jpg",
        artist: "Olivia Rodrigo",
    },
    {
        path: "music/Old Town Road.mp3",
        displayName: "Old Town Road",
        cover: "images/image96.jpg",
        artist: "Lil Nas X feat. Billy Ray Cyrus",
    },
    {
        path: "music/Hall of Fame.mp3",
        displayName: "Hall of Fame",
        cover: "images/image97.jpg",
        artist: "The Script feat. will.i.am",
    },
    {
        path: "music/New Perspective.mp3",
        displayName: "New Perspective",
        cover: "images/image98.jpg",
        artist: "Panic! At The Disco",
    },
    {
        path: "music/Judas.mp3",
        displayName: "Judas",
        cover: "images/image99.jpg",
        artist: "Lady Gaga",
    },
    {
        path: "music/Bye Bye Bye.mp3",
        displayName: "Bye Bye Bye",
        cover: "images/image100.jpg",
        artist: "NSYNC",
    },
    {
        path: "music/Jet Lag.mp3",
        displayName: "Jet Lag",
        cover: "images/image101.jpg",
        artist: "Simple Plan feat. Natasha Bedingfield",
    },
    {
        path: "music/Versace on the Floor.mp3",
        displayName: "Versace on the Floor",
        cover: "images/image102.jpg",
        artist: "Bruno Mars",
    },
    {
        path: "music/If We Ever Meet Again.mp3",
        displayName: "If We Ever Meet Again",
        cover: "images/image103.jpg",
        artist: "Timbaland feat. Katy Perry",
    },
    {
        path: "music/Hot N Cold.mp3",
        displayName: "Hot N Cold",
        cover: "images/image104.jpg",
        artist: "Katy Perry",
    },
    {
        path: "music/Replay.mp3",
        displayName: "Replay",
        cover: "images/image105.jpg",
        artist: "Iyaz",
    },
    {
        path: "music/Uptown Girl.mp3",
        displayName: "Uptown Girl",
        cover: "images/image106.jpg",
        artist: "Westlife",
    },
    {
        path: "music/Last Friday Night (T.G.I.F.).mp3",
        displayName: "Last Friday Night (T.G.I.F.)",
        cover: "images/image107.jpg",
        artist: "Katy Perry",
    },
    {
        path: "music/I Want It That Way.mp3",
        displayName: "I Want It That Way",
        cover: "images/image108.jpg",
        artist: "Backstreet Boys",
    },
    {
        path: "music/Bohemian Rhapsody.mp3",
        displayName: "Bohemian Rhapsody",
        cover: "images/image109.jpg",
        artist: "Queen",
    },
    {
        path: "music/Rewrite The Stars.mp3",
        displayName: "Rewrite The Stars",
        cover: "images/image110.jpg",
        artist: "James Arthur & Anne-Marie",
    },
    {
        path: "music/Forever.mp3",
        displayName: "Forever",
        cover: "images/image111.jpg",
        artist: "Chris Brown",
    },
    {
        path: "music/Sunflower.mp3",
        displayName: "Sunflower",
        cover: "images/image112.jpg",
        artist: "Post Malone & Swae Lee",
    },
    {
        path: "music/Brick by Boring Brick.mp3",
        displayName: "Brick by Boring Brick",
        cover: "images/image113.jpg",
        artist: "Paramore",
    },
    {
        path: "music/Creep.mp3",
        displayName: "Creep",
        cover: "images/image114.jpg",
        artist: "Radiohead",
    },
    {
        path: "music/Swing, Swing.mp3",
        displayName: "Swing, Swing",
        cover: "images/image115.jpg",
        artist: "The All-American Rejects",
    },
    {
        path: "music/Chasing Cars.mp3",
        displayName: "Chasing Cars",
        cover: "images/image116.jpg",
        artist: "Snow Patrol",
    },
    {
        path: "music/Notion.mp3",
        displayName: "Notion",
        cover: "images/image117.jpg",
        artist: "The Rare Occasions",
    },
    {
        path: "music/Uptown Funk.mp3",
        displayName: "Uptown Funk",
        cover: "images/image118.jpg",
        artist: "Mark Ronson feat. Bruno Mars",
    },
    {
        path: "music/Still into You.mp3",
        displayName: "Still into You",
        cover: "images/image119.jpg",
        artist: "Paramore",
    },
    {
        path: "music/That's What I Like.mp3",
        displayName: "That's What I Like",
        cover: "images/image120.jpg",
        artist: "Bruno Mars",
    },
    {
        path: "music/You're Still The One.mp3",
        displayName: "You're Still The One",
        cover: "images/image121.jpg",
        artist: "Shania Twain",
    },
    {
        path: "music/Best Day Of My Life.mp3",
        displayName: "Best Day Of My Life",
        cover: "images/image122.jpg",
        artist: "American Authors",
    },
    {
        path: "music/Locked out of Heaven.mp3",
        displayName: "Locked out of Heaven",
        cover: "images/image123.jpg",
        artist: "Bruno Mars",
    },
    {
        path: "music/A Sky Full of Stars.mp3",
        displayName: "A Sky Full of Stars",
        cover: "images/image124.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Animals.mp3",
        displayName: "Animals",
        cover: "images/image125.jpg",
        artist: "Maroon 5",
    },
    {
        path: "music/My Songs Know What You Did In The Dark.mp3",
        displayName: "My Songs Know What You Did In The Dark",
        cover: "images/image126.jpg",
        artist: "Fall Out Boy",
    },
    {
        path: "music/Paradise.mp3",
        displayName: "Paradise",
        cover: "images/image127.jpg",
        artist: "Coldplay",
    },
    {
        path: "music/Paparazzi.mp3",
        displayName: "Paparazzi",
        cover: "images/image128.jpg",
        artist: "Lady Gaga",
    },
    {
        path: "music/Thnks fr th Mmrs.mp3",
        displayName: "Thnks fr th Mmrs",
        cover: "images/image129.jpg",
        artist: "Fall Out Boy",
    },
    {
        path: "music/She Will Be Loved.mp3",
        displayName: "She Will Be Loved",
        cover: "images/image130.jpg",
        artist: "Maroon 5",
    },
    {
        path: "music/LIKEY.mp3",
        displayName: "LIKEY",
        cover: "images/image131.jpg",
        artist: "TWICE",
    },
    {
        path: "music/What is Love.mp3",
        displayName: "What is Love?",
        cover: "images/image132.jpg",
        artist: "TWICE",
    },
    {
        path: "music/Salamin, Salamin.mp3",
        displayName: "Salamin, Salamin",
        cover: "images/image133.jpg",
        artist: "BINI",
    },
    {
        path: "music/I Really Like You.mp3",
        displayName: "I Really Like You",
        cover: "images/image134.jpg",
        artist: "Carly Rae Jepsen",
    },
    {
        path: "music/Symphony.mp3",
        displayName: "Symphony",
        cover: "images/image135.jpg",
        artist: "Clean Bandit feat. Zara Larson",
    },
    {
        path: "music/Savage Love.mp3",
        displayName: "Savage Love",
        cover: "images/image136.jpg",
        artist: "Jason Derulo & Jawsh 685",
    },
    {
        path: "music/ME!.mp3",
        displayName: "ME!",
        cover: "images/image137.jpg",
        artist: "Taylor Swift feat. Brendon Urie",
    },
    {
        path: "music/Pantropiko.mp3",
        displayName: "Pantropiko",
        cover: "images/image138.jpg",
        artist: "BINI",
    },
    {
        path: "music/2002.mp3",
        displayName: "2002",
        cover: "images/image139.jpg",
        artist: "Anna-Marie",
    },
    {
        path: "music/Seven.mp3",
        displayName: "Seven",
        cover: "images/image140.jpg",
        artist: "Jung Kook feat. Latto",
    },
    {
        path: "music/Perfect.mp3",
        displayName: "Perfect",
        cover: "images/image141.jpg",
        artist: "Ed Sheeran",
    },
    {
        path: "music/Too Sweet.mp3",
        displayName: "Too Sweet",
        cover: "images/image142.jpg",
        artist: "Hozier",
    },
    {
        path: "music/Blinding Lights.mp3",
        displayName: "Blinding Lights",
        cover: "images/image143.jpg",
        artist: "The Weekend",
    },
    {
        path: "music/Beggin.mp3",
        displayName: "Beggin",
        cover: "images/image144.jpg",
        artist: "Madcon",
    },
    {
        path: "music/Summer Paradise.mp3",
        displayName: "Summer Paradise",
        cover: "images/image145.jpg",
        artist: "Simple Plan feat. Sean Paul",
    },
    {
        path: "music/I Don't Care.mp3",
        displayName: "I Don't Care",
        cover: "images/image146.jpg",
        artist: "Ed Sheeran & Justin Bieber",
    },
    {
        path: "music/Say You Won't Let Go.mp3",
        displayName: "Say You Won't Let Go",
        cover: "images/image147.jpg",
        artist: "James Arthur",
    },
    {
        path: "music/Raise Your Glass.mp3",
        displayName: "Raise Your Glass",
        cover: "images/image148.jpg",
        artist: "P!NK",
    },
    {
        path: "music/I Miss You.mp3",
        displayName: "I Miss You",
        cover: "images/image149.jpg",
        artist: "blink-182",
    },
    {
        path: "music/The Only Exception.mp3",
        displayName: "The Only Exception",
        cover: "images/image150.jpg",
        artist: "Paramore",
    },


    
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

function setVolume() {
    music.volume = volumeControl.value;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);
volumeControl.addEventListener('input', setVolume);

loadMusic(songs[musicIndex]);

let currentIndex = 0; // Current song index
let isShuffle = false; // Shuffle mode flag

// Function to shuffle the songs array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffle');
    const nextBtn = document.getElementById('next');

    // Shuffle button event listener
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle; // Toggle shuffle mode
        shuffleBtn.style.color = isShuffle ? 'red' : ''; // Change color when active
        if (isShuffle) {
            shuffleArray(songs); // Shuffle songs
        }
        console.log("Shuffle mode:", isShuffle); // Debugging line
    });

    // Next button event listener
    nextBtn.addEventListener('click', () => {
        if (isShuffle) {
            currentIndex = Math.floor(Math.random() * songs.length); // Random index
        } else {
            currentIndex = (currentIndex + 1) % songs.length; // Increment index
        }
        loadSong(songs[currentIndex]); // Load the next song
        playMusic(); // Play the song
    });
});




