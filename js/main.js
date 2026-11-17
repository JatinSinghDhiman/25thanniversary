// ===================================================================
// PANKAJ & POOJA - 25TH ANNIVERSARY MAIN SCRIPT
// ===================================================================

// Wedding Date: 1 December 2001 (00:00:00)
const WEDDING_DATE = new Date('2001-12-01T00:00:00');

// Gallery Albums Configuration
const galleryData = {
  'ring-ceremony': {
    title: '💍 Ring Ceremony • 24th August 2001',
    subtitle: 'Where Two Hearts Promised Forever • Pankaj & Dolly (Pooja)',
    description: 'On 24th August 2001, Pankaj and Pooja (Dolly) officially exchanged rings surrounded by loving elders and family blessings on the velvet thrones — the historic beginning of their 25-year fairytale!',
    items: [
      {
        src: 'images/ring-ceremony/01-official-invite.jpg',
        title: 'The Official Ring Ceremony Announcement',
        caption: 'The treasured vintage poster: "Ring Ceremony on 24/8/2001 - Pankaj With Dolly" captured by Bhasin Movies.'
      },
      {
        src: 'images/ring-ceremony/04-ring-exchange-pankaj.jpg',
        title: 'The Golden Promise • Pankaj to Pooja',
        caption: 'Pankaj gently placing the engagement ring on Pooja’s finger on the royal golden throne chair as family looks on with pride.'
      },
      {
        src: 'images/ring-ceremony/05-ring-exchange-pooja.jpg',
        title: 'Sealing The Sacred Bond • Pooja to Pankaj',
        caption: 'Pooja slipping the ring onto Pankaj’s hand, sealing 25 years of love, companionship, and respect.'
      },
      {
        src: 'images/ring-ceremony/02-groom-pankaj.jpg',
        title: 'The Handsome Groom • Young Pankaj',
        caption: 'Dashing young Pankaj with his bright smile and soulful eyes, on the day he took his first step towards forever.'
      },
      {
        src: 'images/ring-ceremony/03-bride-pooja.jpg',
        title: 'The Radiant Bride • Young Pooja (Dolly)',
        caption: 'Pooja looking graceful and serene in her traditional dupatta, glowing with charm as the future queen of the house.'
      },
      {
        src: 'images/ring-ceremony/06-mithai-celebration.jpg',
        title: 'Shagun Ki Mithai • Sweet Beginnings',
        caption: 'Sharing the sweetness of life! Pooja feeding Pankaj the ceremonial shagun sweet as loved ones cheer.'
      },
      {
        src: 'images/ring-ceremony/07-cake-celebration.jpg',
        title: 'Celebratory Cake Cutting & Joy',
        caption: 'Pooja lovingly feeding celebration cake to Pankaj, surrounded by festive warmth and smiling family members.'
      }
    ]
  },
  'wedding-day': {
    title: '👰🤵 Wedding Day • 1st December 2001',
    subtitle: 'Saat Phere, Sacred Mantras & Eternal Vows',
    description: '1st December 2001 — The historic day Pankaj and Pooja became one. From the decorated Maruti 800 doli car to the sacred Saat Phere under the mandap, relive the royal 15-photo wedding journey!',
    items: [
      {
        src: 'images/wedding-day/01-wedding-album-cover.jpg',
        title: 'Happy Wedding Cover • 1st Dec 2001',
        caption: 'The original vintage album cover: "Pankaj Weds Pooja" with Lord Ganesha\'s blessings, captured by Bhasin Movies.'
      },
      {
        src: 'images/wedding-day/02-groom-pankaj.jpg',
        title: 'The Dashing Groom • Pankaj',
        caption: 'Handsome groom Pankaj adorned in his ceremonial tilak and currency garland, ready to bring home his bride.'
      },
      {
        src: 'images/wedding-day/03-bride-pooja-full.jpg',
        title: 'The Royal Bride • Pooja in Red & Silver',
        caption: 'Pooja looking breathtaking in her traditional bridal lehenga, adorned with royal jewelry and delicate embroidery.'
      },
      {
        src: 'images/wedding-day/04-bride-pooja-portrait.jpg',
        title: 'Radiant Bridal Elegance • Pooja',
        caption: 'A timeless bridal portrait capturing Pooja\'s serene beauty, traditional nath, maang tikka, and gentle smile.'
      },
      {
        src: 'images/wedding-day/05-bride-pooja-mirror.jpg',
        title: 'Reflection of a Queen • Mirror Frame',
        caption: 'Pooja glowing in the ornate mirror frame, ready to begin the greatest chapter of her life.'
      },
      {
        src: 'images/wedding-day/06-bride-pooja-red-chunni.jpg',
        title: 'Shahi Dulhan • Floral Varmala Portrait',
        caption: 'Close-up bridal grace of Pooja adorned with the fragrant varmala and sacred red chunni.'
      },
      {
        src: 'images/wedding-day/07-bride-pooja-gota-patti.jpg',
        title: 'Traditional Gota Patti Bridal Splendor',
        caption: 'Pooja shining in the timeless elegance of traditional Indian bridal embroidery and golden ornaments.'
      },
      {
        src: 'images/wedding-day/08-jaimala-collage.jpg',
        title: 'Jai Mala Memories • Exchanging Vows',
        caption: 'The historic Jai Mala album page capturing the joyful moment Pankaj and Pooja exchanged fragrant garlands.'
      },
      {
        src: 'images/wedding-day/09-royal-couple-stage.jpg',
        title: 'The Royal Couple on Stage',
        caption: 'Pankaj and Pooja standing proud and radiant as newly married husband and wife on the grand stage.'
      },
      {
        src: 'images/wedding-day/10-royal-couple-portrait.jpg',
        title: 'Side-by-Side in Eternal Love',
        caption: 'A regal portrait of Pankaj and Pooja smiling together in their wedding finery, ready to face the world as one.'
      },
      {
        src: 'images/wedding-day/11-mandap-rituals.jpg',
        title: 'In The Sacred Mandap • Saat Phere',
        caption: 'Sitting together by the holy fire, taking the seven sacred vows of lifelong love, trust, and companionship.'
      },
      {
        src: 'images/wedding-day/12-sindoor-daan.jpg',
        title: 'Sindoor Daan • The Sacred Union',
        caption: 'Pankaj applying the auspicious sindoor with elder blessings, making their divine bond eternal.'
      },
      {
        src: 'images/wedding-day/13-sweet-feast-sharing.jpg',
        title: 'First Meal Together • The Royal Feast',
        caption: 'Pankaj feeding Pooja the ceremonial wedding meal — the beginning of 25 years of sharing every meal and dream together.'
      },
      {
        src: 'images/wedding-day/14-family-stage-blessings.jpg',
        title: 'Family Blessings on Stage',
        caption: 'Surrounded by loving parents and elders on stage, enveloped in prayers, warmth, and blessings for the future.'
      },
      {
        src: 'images/wedding-day/15-wedding-car-doli.jpg',
        title: 'The Iconic Doli Car • Maruti 800 "Pankaj Dolly"',
        caption: 'The unforgettable Maruti 800 (DL4C L0553) decorated with fresh marigold malas and "Pankaj Dolly" yellow cards for the bidaai!'
      }
    ]
  },
  'cute-moments': {
    title: '🥰 Some Cute Moments • 25 Years of Magic',
    subtitle: 'Vacations, Hill Stations, Laughter & Unconditional Friendship',
    description: 'Beyond the formal stages and milestones lie the truest treasures: winter boat rides in Uttarakhand, snowy hill station strolls, goofy hammock giggles, Karwa Chauth on the terrace, and welcoming their little angel.',
    items: [
      {
        src: 'images/cute-moments/01-lake-nainital-boat.jpg',
        title: 'Romantic Boat Ride • Naini Lake, Uttarakhand',
        caption: 'Snuggled in warm winter jackets and beanies, floating peacefully on the emerald waters of Uttarakhand.'
      },
      {
        src: 'images/cute-moments/02-hillstation-viewpoint.jpg',
        title: 'High in the Pines • Scenic Mountain Getaway',
        caption: 'Pankaj in his sunny yellow pullover and Pooja embracing the pine-scented mountain air together.'
      },
      {
        src: 'images/cute-moments/03-winter-cozy-date.jpg',
        title: 'Winter Cozy Date & Glamorous Smiles',
        caption: 'Pooja in her stylish black & white faux fur coat alongside dashing Pankaj on their chilly winter holiday.'
      },
      {
        src: 'images/cute-moments/04-mountain-breeze.jpg',
        title: 'Casual Strolls • Mountain Mist & Smiles',
        caption: 'Pankaj with his cool cap and arm around Pooja, soaking in the misty Himalayan hills.'
      },
      {
        src: 'images/cute-moments/05-himalayan-backdrop.jpg',
        title: 'On Top of the World • Mountain Valley Vista',
        caption: 'Clear blue skies, lush slopes, and two happy souls standing together against the majestic mountain horizon.'
      },
      {
        src: 'images/cute-moments/06-habana-smiles.jpg',
        title: 'Warm Hugs & Carefree Mountain Days',
        caption: 'Every holiday with Pankaj and Pooja was filled with cheerful laughter, arm-in-arm strolls, and candid warmth.'
      },
      {
        src: 'images/cute-moments/07-sweet-chuckle.jpg',
        title: 'Goofy Laughs & Evergreen Romance',
        caption: 'The true secret of their 25 years: they never stopped being each other’s favorite person to laugh with.'
      },
      {
        src: 'images/cute-moments/08-hammock-chill.jpg',
        title: 'Hammock Days & Carefree Summer Vibes',
        caption: 'Relaxing back in the rope hammock, sharing sweet banter and enjoying peaceful sunshine.'
      },
      {
        src: 'images/cute-moments/09-laughing-together.jpg',
        title: 'Best Friends First, Soulmates Forever',
        caption: 'Inside jokes, silly giggles, and shared secrets that only the two of them understand!'
      },
      {
        src: 'images/cute-moments/10-traditional-elegance.jpg',
        title: 'Festive Prayers & Temple Blessings',
        caption: 'Pankaj in his royal pink kurta with auspicious tilak and Pooja looking divine in designer white anarkali.'
      },
      {
        src: 'images/cute-moments/11-pink-harmony.jpg',
        title: 'Matching in Pink • Ultimate Couple Goals',
        caption: 'Radiating pure joy in harmonized pink outfits — twenty-five years of graceful partnership.'
      },
      {
        src: 'images/cute-moments/12-pergola-date.jpg',
        title: 'Under the Temple Bell • Serene Moments',
        caption: 'Posing side by side under the wooden pergola bell during a peaceful afternoon outing.'
      },
      {
        src: 'images/cute-moments/13-post-wedding-grace.jpg',
        title: 'Early Days of Marital Bliss',
        caption: 'Pooja radiating new-bride charm in red saree and traditional chooda, filling their new home with grace.'
      },
      {
        src: 'images/cute-moments/14-karwa-chauth-terrace.jpg',
        title: 'Karwa Chauth Moon Prayers on the Terrace',
        caption: 'Sacred devotion: Pooja holding her puja thali and channi under the night sky, praying for Pankaj’s long life.'
      },
      {
        src: 'images/cute-moments/15-baby-havan-blessings.jpg',
        title: 'Welcoming Our Little Angel • Havan Blessings',
        caption: 'The sweetest milestone of all: Pankaj and Pooja holding their precious newborn baby during the sacred family havan!'
      }
    ]
  },
  'choti-laxmi': {
    title: '🌸 Chhoti Laxmi (Ghar Ki Laxmi)',
    subtitle: 'The Princess Who Brightened Our World',
    description: 'The moment Chhoti Laxmi entered their lives, she filled the entire house with tinkling anklets, sweet giggles, and boundless luck and prosperity.',
    items: [
      {
        src: 'images/choti-laxmi/01-temple-blessing-baby.jpg',
        title: 'Divine Blessings • At The Holy Shrine',
        caption: 'Pankaj and Pooja presenting their newborn little Laxmi before Mata Rani, praying for lifelong health, prosperity, and joy.'
      },
      {
        src: 'images/choti-laxmi/02-baby-tummy-cute.jpg',
        title: 'Our Little Angel’s Gentle Gaze',
        caption: 'Tiny hands, soft sweet smiles, and eyes full of wonder — Chhoti Laxmi stealing everyone’s hearts from day one.'
      },
      {
        src: 'images/choti-laxmi/03-toddler-chair-sixers.jpg',
        title: 'The Cutest Little Boss',
        caption: 'Full of personality and innocent charm, rocking her cute little outfit and ruling the entire household.'
      },
      {
        src: 'images/choti-laxmi/04-toddler-snack-bowl.jpg',
        title: 'Little Foodie Adventures',
        caption: 'Caught in the sweetest moment enjoying her snacks straight from the katori with that adorable curious face.'
      },
      {
        src: 'images/choti-laxmi/05-mumma-cotton-candy.jpg',
        title: 'Sweet Mountain Days • Cotton Candy with Mumma',
        caption: 'Moments of pure joy on the hillside promenade, sharing giant pink cotton candy and endless cuddles with Mumma Pooja.'
      },
      {
        src: 'images/choti-laxmi/06-festive-little-girl.jpg',
        title: 'Traditional Elegance • Mumma’s Grace',
        caption: 'Dressed up in vibrant festive colors, reflecting her mother’s poise and carrying sunshine wherever she walks.'
      },
      {
        src: 'images/choti-laxmi/07-sister-brother-hug.jpg',
        title: 'Eternal Sibling Bond • Didi & Her Little Brother',
        caption: 'The most touching hug between sister and brother — a lifelong friendship of care, secrets, protection, and boundless love.'
      }
    ]
  },
  'ghar-ka-chirag': {
    title: '🌟 Ghar Ka Chirag',
    subtitle: 'The Strength & Pride of Our Family',
    description: 'The son who brought vibrant laughter, boundless energy, and radiant pride — truly the shining torchbearer of our loving home.',
    items: [
      {
        src: 'images/ghar-ka-chirag/01-born-in-mummas-arms-2007.jpg',
        title: '12th June 2007 • Born into Mumma’s Loving Arms',
        caption: 'The unforgettable day our prince arrived! Mumma Pooja holding newborn Ghar Ka Chirag wrapped in pure love and blessings.'
      },
      {
        src: 'images/ghar-ka-chirag/02-baby-chirag-cradle.jpg',
        title: 'Sweet Slumber & Innocent Wonder',
        caption: 'Looking up with adorable curious eyes and a peaceful smile, filling every corner of our home with warmth.'
      },
      {
        src: 'images/ghar-ka-chirag/03-mundan-dadaji-blessing.jpg',
        title: 'Mundan Ceremony • Grandfather’s Sacred Blessings',
        caption: 'A sacred milestone: standing proudly with Dadaji for the holy mundan ceremony, adorned with tilak and elder blessings.'
      },
      {
        src: 'images/ghar-ka-chirag/04-toddler-orange-cap-giggles.jpg',
        title: 'Bundle of Energy & Pure Joy',
        caption: 'Spreading cheerful vibes in his cute orange woolen cap and teddy sweater — always ready with open arms and infectious giggles.'
      },
      {
        src: 'images/ghar-ka-chirag/05-biker-boy-dad-helmet.jpg',
        title: 'Dad’s Little Hero • Steelhead Biker Boy',
        caption: 'Rocking Dad’s motorcycle helmet with effortless cool style — already dreaming of long road trips and big adventures!'
      },
      {
        src: 'images/ghar-ka-chirag/06-father-son-twinning-suits.jpg',
        title: 'Like Father, Like Son • Twinning in Royal Blue',
        caption: 'A truly magnificent portrait: Dad Pankaj and his young gentleman Chirag twinning in handsome matching blazers, united in pride and love.'
      }
    ]
  },
  'happy-family': {
    title: '👨‍👩‍👧‍👦 Happy Perfect Family',
    subtitle: 'Our Complete Universe of Love & Togetherness',
    description: 'Pankaj, Pooja, Chhoti Laxmi, and Ghar Ka Chirag — four hearts beating as one tight-knit, cheerful, and eternally blessed family through 25 golden years.',
    items: [
      // 7 PRETTY VIDEO REELS (FEATURED IN SLIDESHOW)
      {
        src: 'videos/01-family-celebration-dance.mp4',
        type: 'video',
        title: '✨ Celebration Magic • Family Dance Reel',
        caption: 'Joyous music, spontaneous dancing, and infectious happiness — our family celebrating love in pure motion!'
      },
      {
        src: 'videos/02-happy-togetherness-reel.mp4',
        type: 'video',
        title: '💖 Sweet Smiles & Tender Hugs',
        caption: 'Gentle moments and sweet laughter that melt hearts, showing 25 years of devotion and warm embrace.'
      },
      {
        src: 'videos/03-cherished-moments-reel.mp4',
        type: 'video',
        title: '🌸 25 Years of Sparkling Glimpses',
        caption: 'Radiant smiles and joyful banter — surrounded by the warmth, affection, and love of family.'
      },
      {
        src: 'videos/04-celebration-spark-reel.mp4',
        type: 'video',
        title: '🎉 Festive Beats & Sibling Fun',
        caption: 'Unfiltered family joy: festive vibes, teasing smiles, and irreplaceable memories recorded forever.'
      },
      {
        src: 'videos/05-sweet-family-laughter.mp4',
        type: 'video',
        title: '🥰 Heartwarming Giggles in Motion',
        caption: 'A candid glimpse of Pankaj and Pooja sharing tender laughs with their beloved daughter and son.'
      },
      {
        src: 'videos/06-precious-little-memories.mp4',
        type: 'video',
        title: '🌟 Priceless Little Glances',
        caption: 'The everyday joy and playful energy that makes our home the happiest sanctuary on earth.'
      },
      {
        src: 'videos/07-family-legacy-celebration.mp4',
        type: 'video',
        title: '👑 25 Years of Royal Love & Legacy',
        caption: 'A magnificent tribute to 25 unforgettable years: a marriage rooted in trust, friendship, and boundless family blessings.'
      },
      // 15 ICONIC HIGH-DEFINITION PHOTOS
      {
        src: 'images/happy-family/01-complete-family-boat-nainital.jpg',
        type: 'image',
        title: 'Our Complete World • Nainital Lake Boat Ride',
        caption: 'The ultimate four-member family portrait! Pankaj, Pooja, Didi Chhoti Laxmi, and baby Ghar Ka Chirag in arms amidst the majestic hill station peaks.'
      },
      {
        src: 'images/happy-family/02-kids-walker-cousins-laughter.jpg',
        type: 'image',
        title: 'Childhood Shenanigans • Sibling & Cousin Love',
        caption: 'Baby Chirag in his blue walker surrounded by loving big sister Laxmi and brothers — pure childhood warmth, laughter, and care.'
      },
      {
        src: 'images/happy-family/03-cafe-date-warm-smiles.jpg',
        type: 'image',
        title: 'Cafe Date Moments • Evergreen Spark',
        caption: 'Casual cafe afternoon filled with cozy chatter, beaming smiles, and a lifetime of shared tea and sweet memories.'
      },
      {
        src: 'images/happy-family/04-courtyard-playful-couple.jpg',
        type: 'image',
        title: 'Courtyard Fun • Youthful Spirits',
        caption: 'Playful moments in the sunlit brick courtyard — proving that keeping the childlike spark alive is the secret to 25 years of love.'
      },
      {
        src: 'images/happy-family/05-royal-reception-sofa-portrait.jpg',
        type: 'image',
        title: 'Royal Elegance • Floral Throne Celebration',
        caption: 'Looking truly regal on the velvet royal blue couch beneath an arched canopy of blossoms, radiating majesty and grace.'
      },
      {
        src: 'images/happy-family/06-grand-evening-canopy-glamour.jpg',
        type: 'image',
        title: 'Under Crimson Canopies • Royal Gala',
        caption: 'Pankaj in a dashing white tuxedo blazer and Pooja in vibrant traditional attire, sharing an unspoken gaze of deep adoration.'
      },
      {
        src: 'images/happy-family/07-red-roses-bouquet-proposal.jpg',
        type: 'image',
        title: 'A Thousand Red Roses • 25 Years of Romance',
        caption: 'Pankaj surprising his queen with a lavish bouquet of crimson roses under twinkling fairy lights — romance never fades!'
      },
      {
        src: 'images/happy-family/08-playful-reception-cheeky-pose.jpg',
        type: 'image',
        title: 'Laughter on Stage • Cheeky Smiles',
        caption: 'Pooja looking breathtaking in her pastel floral lehenga while Pankaj brings out the laughs with his playful charm.'
      },
      {
        src: 'images/happy-family/09-red-saree-eternal-embrace.jpg',
        type: 'image',
        title: 'Heart to Heart • Eternal Warmth',
        caption: 'Wrapped in each other’s arms, sharing private jokes and endless happiness. Pooja glowing in red and Pankaj in sharp black.'
      },
      {
        src: 'images/happy-family/10-single-red-rose-romance.jpg',
        type: 'image',
        title: 'One Rose, One Love • The Timeless Promise',
        caption: 'Pankaj offering a single perfect red rose to his lady love — reaffirming vows made a quarter of a century ago.'
      },
      {
        src: 'images/happy-family/11-mountain-mist-clouds-hug.jpg',
        type: 'image',
        title: 'Above The Clouds • Mountain Mist Hugs',
        caption: 'High on the misty mountain terrace surrounded by floating clouds, holding each other tight in the cool mountain breeze.'
      },
      {
        src: 'images/happy-family/12-panoramic-valley-window-love.jpg',
        type: 'image',
        title: 'Window to Heaven • Valley View Serenade',
        caption: 'Gazing out at the panoramic Himalayan slopes together, matching in striped style and lost in peaceful conversation.'
      },
      {
        src: 'images/happy-family/13-sunlit-terrace-giggles.jpg',
        type: 'image',
        title: 'Sunlit Courtyard Teasing • Endless Laughter',
        caption: 'Playful moments under the open sky — teasing, giggling, and enjoying every tiny precious second of life together.'
      },
      {
        src: 'images/happy-family/14-carefree-mountain-laughter.jpg',
        type: 'image',
        title: 'Carefree Smiles • Leaning on Each Other',
        caption: 'The most candid burst of laughter! Pooja leaning back comfortably on Pankaj’s shoulders on the breezy terrace.'
      },
      {
        src: 'images/happy-family/15-evening-dinner-togetherness.jpg',
        type: 'image',
        title: 'Classy Dinner Date • Side by Side Forever',
        caption: 'Arm in arm on an evening out, celebrating the blessing of a complete home, two wonderful children, and 25 magical years.'
      }
    ]
  }
};

let currentAlbum = 'ring-ceremony';
let currentSlideIndex = 0;
let slideshowInterval = null;
let isSlideshowPlaying = true;

// ===================================================================
// 1. LIVE TOGETHERNESS COUNTER
// ===================================================================
function updateTogethernessCounter() {
  const now = new Date();
  const diffMs = now - WEDDING_DATE;

  if (diffMs < 0) return;

  // Approximate breakdown
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Exact calendar difference
  let years = now.getFullYear() - WEDDING_DATE.getFullYear();
  let months = now.getMonth() - WEDDING_DATE.getMonth();
  let days = now.getDate() - WEDDING_DATE.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const elYears = document.getElementById('cnt-years');
  const elMonths = document.getElementById('cnt-months');
  const elDays = document.getElementById('cnt-days');
  const elHours = document.getElementById('cnt-hours');
  const elMins = document.getElementById('cnt-mins');
  const elSecs = document.getElementById('cnt-secs');

  if (elYears) elYears.innerText = years;
  if (elMonths) elMonths.innerText = months;
  if (elDays) elDays.innerText = days;
  if (elHours) elHours.innerText = hours;
  if (elMins) elMins.innerText = minutes;
  if (elSecs) elSecs.innerText = seconds;

  // Header dynamic years badge
  const elHeaderBadge = document.getElementById('header-years-badge');
  if (elHeaderBadge) elHeaderBadge.innerText = years;

  // Highlights
  const totalDaysEl = document.getElementById('total-days-count');
  if (totalDaysEl) totalDaysEl.innerText = totalDays.toLocaleString();

  const totalHoursEl = document.getElementById('total-hours-count');
  if (totalHoursEl) totalHoursEl.innerText = totalHours.toLocaleString();

  const totalChaiEl = document.getElementById('total-chai-count');
  if (totalChaiEl) totalChaiEl.innerText = (totalDays * 3).toLocaleString() + '+';
}

// ===================================================================
// 2. ROMANTIC AUDIO SYNTHESIZER & AUDIO PLAYER
// ===================================================================
let audioContext = null;
let isMusicPlaying = false;
let synthInterval = null;
let bgMusicAudio = null;

function initAudioEngine() {
  const musicToggle = document.getElementById('music-toggle-btn');
  const musicLabel = document.getElementById('music-status-text');
  const waveBars = document.getElementById('sound-waves');
  const localAudio = document.getElementById('bg-audio');
  bgMusicAudio = localAudio;

  if (!musicToggle) return;

  musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      playMusic();
    }
  });

  function playMusic() {
    isMusicPlaying = true;
    if (waveBars) waveBars.classList.remove('paused');
    if (musicLabel) musicLabel.innerText = 'Tainu Sang Rakhna 🎶';
    musicToggle.classList.add('bg-rose-100', 'border-rose-400');

    // Attempt HTML5 audio first if user placed an mp3 in audio/
    if (localAudio && localAudio.src && !localAudio.error) {
      localAudio.volume = 0.55;
      localAudio.play().then(() => {
        // successfully played mp3
      }).catch((e) => {
        console.log('Audio autoplay prevented or error, falling back to synth:', e);
        // Fallback to custom gentle Web Audio ambient chimes
        startGentleSynthMusic();
      });
    } else {
      startGentleSynthMusic();
    }
  }

  function stopMusic() {
    isMusicPlaying = false;
    if (waveBars) waveBars.classList.add('paused');
    if (musicLabel) musicLabel.innerText = 'Play Song 🎵';
    musicToggle.classList.remove('bg-rose-100', 'border-rose-400');

    if (localAudio) {
      try { localAudio.pause(); } catch (e) {}
    }
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }
  }

  // Smart Audio Ducking: Pause background music when Main Master Movie plays
  const mainVideo = document.getElementById('main-anniversary-video');
  let wasMusicPlayingBeforeMainVideo = false;

  if (mainVideo) {
    mainVideo.addEventListener('play', () => {
      if (isMusicPlaying) {
        wasMusicPlayingBeforeMainVideo = true;
        stopMusic();
      }
    });

    mainVideo.addEventListener('pause', () => {
      if (wasMusicPlayingBeforeMainVideo && !mainVideo.seeking && !mainVideo.ended) {
        playMusic();
        wasMusicPlayingBeforeMainVideo = false;
      }
    });

    mainVideo.addEventListener('ended', () => {
      if (wasMusicPlayingBeforeMainVideo) {
        playMusic();
        wasMusicPlayingBeforeMainVideo = false;
      }
    });
  }
}

// Gentle ambient chord arpeggios using Web Audio API
function startGentleSynthMusic() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) audioContext = new AudioCtx();
    if (audioContext.state === 'suspended') audioContext.resume();

    // Romantic chord notes in Hz (C major / G major / Am / F gentle harp)
    const melodyChords = [
      [261.63, 329.63, 392.00, 523.25], // C - E - G - C
      [220.00, 261.63, 329.63, 440.00], // A - C - E - A
      [174.61, 220.00, 261.63, 349.23], // F - A - C - F
      [196.00, 246.94, 293.66, 392.00]  // G - B - D - G
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    function playNextNote() {
      if (!isMusicPlaying || !audioContext) return;

      const chord = melodyChords[chordIdx];
      const freq = chord[noteIdx];

      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);

      gain.gain.setValueAtTime(0.001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, audioContext.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start();
      osc.stop(audioContext.currentTime + 1.3);

      noteIdx++;
      if (noteIdx >= chord.length) {
        noteIdx = 0;
        chordIdx = (chordIdx + 1) % melodyChords.length;
      }
    }

    if (synthInterval) clearInterval(synthInterval);
    synthInterval = setInterval(playNextNote, 500);
  } catch (err) {
    console.log("Audio synth not available", err);
  }
}

// Game / Click Chime Sound
function playChimeSound(freq = 587.33) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) audioContext = new AudioCtx();
    if (audioContext.state === 'suspended') audioContext.resume();

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioContext.currentTime + 0.2);

    gain.gain.setValueAtTime(0.08, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start();
    osc.stop(audioContext.currentTime + 0.45);
  } catch (e) {}
}
window.playChimeSound = playChimeSound;


// ===================================================================
// 3. SLIDESHOW & GALLERY ENGINE
// ===================================================================
function initGalleryEngine() {
  loadAlbum(currentAlbum);
  startSlideshowAutoPlay();

  // Tab switcher click handlers
  document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const albumKey = btn.dataset.album;
      if (!albumKey || albumKey === currentAlbum) return;

      document.querySelectorAll('.gallery-tab-btn').forEach(b => {
        b.classList.remove('bg-rose-600', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-gray-700', 'border');
      });

      btn.classList.add('bg-rose-600', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-gray-700', 'border');

      loadAlbum(albumKey);
    });
  });

  // Next / Prev slide buttons
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');

  if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

  // Autoplay toggle button
  const autoPlayBtn = document.getElementById('autoplay-toggle-btn');
  if (autoPlayBtn) {
    autoPlayBtn.addEventListener('click', () => {
      isSlideshowPlaying = !isSlideshowPlaying;
      if (isSlideshowPlaying) {
        startSlideshowAutoPlay();
        autoPlayBtn.innerHTML = `<span>⏸️</span> Pause Slideshow`;
      } else {
        clearInterval(slideshowInterval);
        autoPlayBtn.innerHTML = `<span>▶️</span> Play Slideshow`;
      }
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') changeLightboxSlide(1);
    if (e.key === 'ArrowLeft') changeLightboxSlide(-1);
  });
}

function loadAlbum(albumKey, targetIndexOrMode) {
  currentAlbum = albumKey;
  if (targetIndexOrMode === 'videos') {
    currentSlideIndex = 0;
  } else if (targetIndexOrMode === 'photos' && albumKey === 'happy-family') {
    currentSlideIndex = 7;
  } else if (typeof targetIndexOrMode === 'number') {
    currentSlideIndex = targetIndexOrMode;
  } else {
    currentSlideIndex = 0;
  }

  const album = galleryData[albumKey];
  if (!album) return;

  // Highlight active tab
  document.querySelectorAll('.gallery-tab-btn').forEach(b => {
    if (b.dataset.album === albumKey) {
      b.classList.add('bg-rose-600', 'text-white', 'shadow-md');
      b.classList.remove('bg-white', 'text-gray-700', 'border');
    } else {
      b.classList.remove('bg-rose-600', 'text-white', 'shadow-md');
      b.classList.add('bg-white', 'text-gray-700', 'border');
    }
  });

  // Smooth scroll into gallery if requested from spotlight or banner
  if (targetIndexOrMode !== undefined) {
    const galSec = document.getElementById('gallery-section');
    if (galSec) galSec.scrollIntoView({ behavior: 'smooth' });
  }

  // Update Section Headers
  const titleEl = document.getElementById('gallery-active-title');
  const subEl = document.getElementById('gallery-active-subtitle');
  const descEl = document.getElementById('gallery-active-desc');

  if (titleEl) titleEl.innerText = album.title;
  if (subEl) subEl.innerText = album.subtitle;
  if (descEl) descEl.innerText = album.description;

  // Build Slides
  const slideContainer = document.getElementById('slides-wrapper');
  if (slideContainer) {
    slideContainer.innerHTML = album.items.map((item, idx) => {
      const isVideo = item.type === 'video' || (item.src && item.src.endsWith('.mp4'));
      if (isVideo) {
        return `
          <div class="slide-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-type="video">
            <div class="relative w-full aspect-[4/3] md:aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden group flex items-center justify-center">
              <!-- Ambient soft blurred video glow -->
              <video src="${item.src}#t=0.5" muted loop playsinline class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 select-none pointer-events-none"></video>
              
              <!-- Foreground crisp video player -->
              <video id="slide-video-${idx}" src="${item.src}" playsinline loop muted preload="metadata" class="main-slide-video relative max-h-full max-w-full object-contain z-10 drop-shadow-2xl rounded-xl cursor-pointer" onclick="toggleSlideVideoPlay(${idx})"></video>
              
              <!-- Floating cute badges & audio toggle -->
              <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20">
                  <span class="animate-pulse">✨</span> 🎬 Video Memory Reel
                </span>
                <button type="button" onclick="event.stopPropagation(); toggleSlideVideoMute(${idx})" id="slide-sound-btn-${idx}" class="bg-black/60 hover:bg-black/80 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md shadow-md transition-all flex items-center gap-1 cursor-pointer border border-white/10">
                  <span id="sound-icon-${idx}">🔇</span> <span id="sound-text-${idx}">Sound Off</span>
                </button>
              </div>

              <!-- Center Play/Pause Overlay Button -->
              <button type="button" onclick="event.stopPropagation(); toggleSlideVideoPlay(${idx})" id="slide-play-btn-${idx}" class="absolute center z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-600/85 hover:bg-rose-600 text-white flex items-center justify-center text-xl sm:text-2xl shadow-2xl transition-all scale-100 hover:scale-110 opacity-80 group-hover:opacity-100 cursor-pointer">
                ▶️
              </button>
              
              <!-- Gradient caption overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white z-20 pointer-events-none">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="inline-block bg-rose-600/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                    ${album.title}
                  </span>
                  <span class="text-[10px] sm:text-xs text-amber-300 font-semibold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                    Reel ${idx + 1} of ${album.items.length}
                  </span>
                </div>
                <h4 class="text-base sm:text-2xl md:text-3xl font-bold font-serif-luxury text-white mb-1 drop-shadow-md">
                  ${item.title}
                </h4>
                <p class="text-[11px] sm:text-sm md:text-base text-gray-200 line-clamp-2 max-w-2xl font-light drop-shadow">
                  ${item.caption}
                </p>
              </div>

              <!-- Fullscreen Lightbox Button -->
              <div onclick="openLightbox(${idx})" class="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-md hover:bg-black/75 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg transition-all z-20 flex items-center gap-1 cursor-pointer">
                <span>🔍</span> <span>Full HD Reel</span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="slide-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-type="image">
          <div class="relative w-full aspect-[4/3] md:aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center" onclick="openLightbox(${idx})">
            <!-- Ambient blurred background for gorgeous presentation -->
            <img src="${item.src}" alt="" class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-35 scale-110 select-none pointer-events-none">
            <!-- Foreground crisp photo -->
            <img src="${item.src}" alt="${item.title}" class="relative max-h-full max-w-full object-contain z-10 drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white z-20 pointer-events-none">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="inline-block bg-rose-600/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                  ${album.title}
                </span>
                <span class="text-[10px] sm:text-xs text-amber-300 font-semibold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  Photo ${idx + 1} of ${album.items.length}
                </span>
              </div>
              <h4 class="text-base sm:text-2xl md:text-3xl font-bold font-serif-luxury text-white mb-1 drop-shadow-md">
                ${item.title}
              </h4>
              <p class="text-[11px] sm:text-sm md:text-base text-gray-200 line-clamp-2 max-w-2xl font-light drop-shadow">
                ${item.caption}
              </p>
            </div>
            <div class="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-md hover:bg-black/75 text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg transition-all z-20 flex items-center gap-1">
              <span>🔍</span> <span>HD Fullscreen</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Build Slide Indicators & Thumbnails
  renderSlideIndicators();
  renderThumbnailsGrid();
  handleSlideMediaPlayback();
}

function toggleSlideVideoPlay(idx) {
  const vid = document.getElementById(`slide-video-${idx}`);
  const btn = document.getElementById(`slide-play-btn-${idx}`);
  if (!vid) return;

  if (vid.paused) {
    vid.play().catch(e => console.log('Play err:', e));
    if (btn) {
      btn.innerText = '⏸️';
      btn.classList.add('opacity-0');
    }
  } else {
    vid.pause();
    if (btn) {
      btn.innerText = '▶️';
      btn.classList.remove('opacity-0');
    }
  }
}

function toggleSlideVideoMute(idx) {
  const vid = document.getElementById(`slide-video-${idx}`);
  const icon = document.getElementById(`sound-icon-${idx}`);
  const text = document.getElementById(`sound-text-${idx}`);
  if (!vid) return;

  vid.muted = !vid.muted;
  if (vid.muted) {
    if (icon) icon.innerText = '🔇';
    if (text) text.innerText = 'Sound Off';
  } else {
    if (icon) icon.innerText = '🔊';
    if (text) text.innerText = 'Sound On';
    if (bgMusicAudio) bgMusicAudio.volume = 0.15;
  }
}

function renderSlideIndicators() {
  const container = document.getElementById('slide-indicators');
  if (!container) return;
  const album = galleryData[currentAlbum];
  if (!album) return;

  container.innerHTML = album.items.map((_, idx) => `
    <button onclick="goToSlide(${idx})" class="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'bg-rose-600 w-6 sm:w-8' : 'bg-gray-300 hover:bg-rose-300'}"></button>
  `).join('');

  const counterEl = document.getElementById('slide-counter-badge');
  if (counterEl) {
    counterEl.innerText = `${currentSlideIndex + 1} / ${album.items.length}`;
  }
}

function renderThumbnailsGrid() {
  const grid = document.getElementById('album-thumbnails-grid');
  if (!grid) return;
  const album = galleryData[currentAlbum];
  if (!album) return;

  grid.innerHTML = album.items.map((item, idx) => {
    const isVideo = item.type === 'video' || (item.src && item.src.endsWith('.mp4'));
    return `
      <div onclick="goToSlide(${idx})" class="relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all group ${idx === currentSlideIndex ? 'border-rose-500 shadow-md scale-[1.03] ring-2 ring-rose-200' : 'border-slate-200 hover:border-rose-300 opacity-80 hover:opacity-100'}">
        <div class="aspect-[4/3] bg-slate-900 overflow-hidden flex items-center justify-center relative">
          ${isVideo ? `
            <video src="${item.src}#t=0.5" preload="metadata" muted playsinline class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 pointer-events-none"></video>
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span class="w-7 h-7 rounded-full bg-rose-600/90 text-white text-[11px] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">▶️</span>
            </div>
            <span class="absolute top-1 right-1 bg-black/75 text-amber-300 text-[8px] font-bold px-1.5 py-0.5 rounded backdrop-blur-xs">🎬 Reel</span>
          ` : `
            <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300">
          `}
        </div>
        <div class="p-1.5 sm:p-2 bg-white text-center">
          <p class="text-[10px] sm:text-xs font-bold text-gray-800 truncate">${item.title}</p>
        </div>
      </div>
    `;
  }).join('');
}

function changeSlide(direction) {
  const album = galleryData[currentAlbum];
  if (!album) return;
  currentSlideIndex = (currentSlideIndex + direction + album.items.length) % album.items.length;
  updateSlideDisplay();
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateSlideDisplay();
}

function updateSlideDisplay() {
  const slides = document.querySelectorAll('.slide-item');
  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  renderSlideIndicators();
  renderThumbnailsGrid();
  handleSlideMediaPlayback();
}

function handleSlideMediaPlayback() {
  // Pause all slide videos first
  document.querySelectorAll('#slides-wrapper video.main-slide-video').forEach(v => {
    v.pause();
    const btn = v.parentElement.querySelector('button[id^="slide-play-btn-"]');
    if (btn) {
      btn.innerText = '▶️';
      btn.classList.remove('opacity-0');
    }
  });

  // If current slide is video, play it smoothly
  const activeSlide = document.querySelector(`.slide-item[data-index="${currentSlideIndex}"]`);
  if (activeSlide) {
    const vid = activeSlide.querySelector('video.main-slide-video');
    const btn = activeSlide.querySelector('button[id^="slide-play-btn-"]');
    if (vid) {
      vid.currentTime = 0;
      vid.play().then(() => {
        if (btn) {
          btn.innerText = '⏸️';
          btn.classList.add('opacity-0');
        }
      }).catch(e => console.log('Autoplay handled:', e));

      // Advance slide on video end if slideshow is playing
      vid.onended = () => {
        if (isSlideshowPlaying) {
          changeSlide(1);
        }
      };
    }
  }
}

function startSlideshowAutoPlay() {
  if (slideshowInterval) clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    if (isSlideshowPlaying) {
      // Don't interrupt playing video before it finishes
      const activeSlide = document.querySelector(`.slide-item[data-index="${currentSlideIndex}"]`);
      const vid = activeSlide ? activeSlide.querySelector('video.main-slide-video') : null;
      if (vid && !vid.paused && !vid.ended) {
        return; // Let video play through
      }
      changeSlide(1);
    }
  }, 4500);
}


// ===================================================================
// 4. FULLSCREEN LIGHTBOX MODAL
// ===================================================================
let lightboxIndex = 0;

function openLightbox(index) {
  lightboxIndex = index;
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;
  const vidEl = document.getElementById('lightbox-video');
  if (vidEl) {
    vidEl.pause();
    vidEl.src = '';
  }
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
  if (bgMusicAudio) bgMusicAudio.volume = 0.4;
}

function changeLightboxSlide(dir) {
  const album = galleryData[currentAlbum];
  if (!album) return;
  lightboxIndex = (lightboxIndex + dir + album.items.length) % album.items.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const album = galleryData[currentAlbum];
  if (!album || !album.items[lightboxIndex]) return;

  const item = album.items[lightboxIndex];
  const imgEl = document.getElementById('lightbox-img');
  const vidEl = document.getElementById('lightbox-video');
  const titleEl = document.getElementById('lightbox-title');
  const capEl = document.getElementById('lightbox-caption');
  const countEl = document.getElementById('lightbox-count');

  const isVideo = item.type === 'video' || (item.src && item.src.endsWith('.mp4'));

  if (isVideo) {
    if (imgEl) imgEl.classList.add('hidden');
    if (vidEl) {
      vidEl.classList.remove('hidden');
      vidEl.src = item.src;
      vidEl.play().catch(e => console.log('Lightbox video play:', e));
    }
  } else {
    if (vidEl) {
      vidEl.pause();
      vidEl.classList.add('hidden');
      vidEl.src = '';
    }
    if (imgEl) {
      imgEl.classList.remove('hidden');
      imgEl.src = item.src;
    }
  }

  if (titleEl) titleEl.innerText = item.title;
  if (capEl) capEl.innerText = item.caption;
  if (countEl) countEl.innerText = `${lightboxIndex + 1} of ${album.items.length}`;
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeLightboxSlide = changeLightboxSlide;
window.goToSlide = goToSlide;
window.toggleSlideVideoPlay = toggleSlideVideoPlay;
window.toggleSlideVideoMute = toggleSlideVideoMute;
window.loadAlbum = loadAlbum;


// ===================================================================
// 5. LIVE PHOTO UPLOADER & LOCAL PREVIEWER
// ===================================================================
function initPhotoManager() {
  const managerBtn = document.getElementById('photo-manager-btn');
  const managerModal = document.getElementById('photo-manager-modal');
  const fileInput = document.getElementById('custom-photo-input');
  const albumSelect = document.getElementById('custom-album-select');
  const previewContainer = document.getElementById('upload-preview-area');

  if (!managerBtn || !managerModal) return;

  managerBtn.addEventListener('click', () => {
    managerModal.classList.remove('hidden');
    managerModal.classList.add('flex');
  });

  const closeBtn = document.getElementById('close-manager-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      managerModal.classList.add('hidden');
      managerModal.classList.remove('flex');
    });
  }

  // Handle local file preview
  if (fileInput && albumSelect) {
    fileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const targetAlbum = albumSelect.value;
      if (!galleryData[targetAlbum]) return;

      Array.from(files).forEach((file, i) => {
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          const dataUrl = loadEvent.target.result;
          // Add to current gallery data array
          galleryData[targetAlbum].items.unshift({
            src: dataUrl,
            title: `Custom Photo (${file.name})`,
            caption: 'Newly added memory celebrating Pankaj & Pooja!'
          });

          // Refresh if active
          if (currentAlbum === targetAlbum) {
            loadAlbum(targetAlbum);
          }

          alert(`🎉 Yay! "${file.name}" has been loaded into the "${galleryData[targetAlbum].title}" album!`);
        };
        reader.readAsDataURL(file);
      });
    });
  }
}


// ===================================================================
// 6. 25 REASONS WHY WE LOVE PANKAJ & POOJA
// ===================================================================
const reasonsList = [
  { num: 1, title: "Unshakable Bond", text: "25 years of standing together through every thick and thin with a smile." },
  { num: 2, title: "The Best Chai Dates", text: "Every day starts with the aroma of ginger chai and quiet conversations." },
  { num: 3, title: "Chhoti Laxmi's Joy", text: "Raising a daughter who shines like a bright star and loves you endlessly." },
  { num: 4, title: "Ghar Ka Chirag's Pride", text: "Guiding a son who stands tall, proud of his family values." },
  { num: 5, title: "Laughter in Chaos", text: "Finding humor even when things go completely off plan during road trips!" },
  { num: 6, title: "Mom's Magic Cooking", text: "Pooja's dishes that make everyone rush straight to the dinner table." },
  { num: 7, title: "Dad's Gentle Wisdom", text: "Pankaj's calm demeanor that can solve any problem without raising his voice." },
  { num: 8, title: "Saat Phere Ke Vade", text: "Living out the sacred 7 vows taken on 1st December 2001 every single day." },
  { num: 9, title: "Festival Magic", text: "Making every Diwali, Holi, and birthday filled with laughter, sweets, and diyas." },
  { num: 10, title: "Teamwork Supreme", text: "Running a harmonious household like a world-class championship team." },
  { num: 11, title: "Unconditional Support", text: "Always being each other's greatest cheerleader and loudest applause." },
  { num: 12, title: "Endless Forgiveness", text: "Never letting anger last beyond a hot cup of tea or a goofy joke." },
  { num: 13, title: "The Best Road Trips", text: "Singing old Hindi songs together in the car on mountain roads." },
  { num: 14, title: "Sacrifices for Kids", text: "Putting Chhoti Laxmi and Ghar Ka Chirag's happiness above your own always." },
  { num: 15, title: "Evergreen Romance", text: "Still looking at each other like it's 1st December 2001 all over again." },
  { num: 16, title: "Family Anchor", text: "The warm glue that keeps the extended family connected and respected." },
  { num: 17, title: "Dad's Goofy Jokes", text: "Pankaj's signature humor that always gets Pooja rolling her eyes and laughing." },
  { num: 18, title: "Mom's Warm Hugs", text: "A hug from Pooja that can cure any bad day or headache instantly." },
  { num: 19, title: "Patience of Gold", text: "Handling everything from teenage tantrums to life surprises with grace." },
  { num: 20, title: "Generous Hearts", text: "Always ready to welcome guests with wide smiles and full thalis." },
  { num: 21, title: "Respect for Roots", text: "Passing down beautiful traditions, prayers, and cultural values to the kids." },
  { num: 22, title: "Ageless Smiles", text: "25 years later, your smiles still shine brighter than silver!" },
  { num: 23, title: "Our Safe Haven", text: "Knowing home is wherever Mom and Dad are waiting with open arms." },
  { num: 24, title: "Inspiring Everyone", text: "Showing the entire world what true commitment and devotion look like." },
  { num: 25, title: "Fifty More to Go!", text: "Here's to celebrating 25 wonderful years today, and 50 more years of love tomorrow!" }
];

function initReasonsDeck() {
  const grid = document.getElementById('reasons-grid');
  if (!grid) return;

  grid.innerHTML = reasonsList.map(item => `
    <div class="reason-card" onclick="flipReasonCard(this)">
      <div class="reason-card-inner">
        <div class="reason-front">
          <span class="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">Reason #${item.num}</span>
          <h5 class="text-base font-bold font-serif-luxury text-gray-800 text-center">${item.title}</h5>
          <span class="text-xs text-rose-400 mt-2 font-medium">Click to reveal ✨</span>
        </div>
        <div class="reason-back">
          <span class="text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">💖 Reason #${item.num}</span>
          <p class="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">${item.text}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function flipReasonCard(card) {
  card.classList.toggle('is-flipped');
  if (typeof playChimeSound === 'function') playChimeSound(680);
}
window.flipReasonCard = flipReasonCard;


// ===================================================================
// 7. WISHES WALL & VIRTUAL GUESTBOOK (MANUAL NOTES ONLY)
// ===================================================================
const wishColors = [
  { color: "from-rose-50 to-pink-100", border: "border-rose-300", text: "text-rose-700" },
  { color: "from-amber-50 to-yellow-100", border: "border-amber-300", text: "text-amber-700" },
  { color: "from-blue-50 to-indigo-100", border: "border-blue-300", text: "text-blue-700" },
  { color: "from-purple-50 to-fuchsia-100", border: "border-purple-300", text: "text-purple-700" },
  { color: "from-emerald-50 to-teal-100", border: "border-emerald-300", text: "text-emerald-700" }
];

function initWishesWall() {
  const form = document.getElementById('wish-form');
  renderWishes();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('wish-name');
      const relationInput = document.getElementById('wish-relation');
      const messageInput = document.getElementById('wish-message');

      if (!nameInput.value.trim() || !messageInput.value.trim()) return;

      const stored = JSON.parse(localStorage.getItem('pankaj_pooja_wishes') || '[]');
      const colorScheme = wishColors[stored.length % wishColors.length];

      const newWish = {
        name: nameInput.value.trim(),
        relation: relationInput.value.trim() || "Well-wisher",
        msg: messageInput.value.trim(),
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        color: colorScheme.color,
        border: colorScheme.border,
        badgeText: colorScheme.text
      };

      stored.unshift(newWish);
      localStorage.setItem('pankaj_pooja_wishes', JSON.stringify(stored));

      form.reset();
      renderWishes();
      triggerConfetti();
      alert("💖 Your note has been posted to the Wishes Wall!");
    });
  }
}

function renderWishes() {
  const container = document.getElementById('wishes-container');
  if (!container) return;

  const stored = JSON.parse(localStorage.getItem('pankaj_pooja_wishes') || '[]');

  if (stored.length === 0) {
    container.innerHTML = `
      <div class="col-span-1 sm:col-span-2 text-center py-16 px-6 glass-panel rounded-3xl border-2 border-dashed border-rose-200">
        <div class="text-5xl mb-3">💌</div>
        <h4 class="font-serif-luxury text-xl font-bold text-slate-800 mb-2">Be The First to Wish!</h4>
        <p class="text-sm text-slate-500 max-w-md mx-auto">
          Share your warm blessings and love for Pankaj &amp; Pooja on their 25th Wedding Anniversary celebration.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = stored.map((w, index) => `
    <div class="wish-sticker bg-gradient-to-br ${w.color || 'from-rose-50 to-pink-100'} p-6 rounded-2xl border ${w.border || 'border-rose-200'} shadow-sm flex flex-col justify-between relative group">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider ${w.badgeText || 'text-rose-700'} bg-white/80 px-2.5 py-1 rounded-full shadow-xs">
            ${w.relation}
          </span>
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-500">${w.date}</span>
            <button onclick="deleteWish(${index})" title="Remove note" class="opacity-0 group-hover:opacity-100 text-xs text-rose-400 hover:text-rose-700 transition-opacity p-1">
              🗑️
            </button>
          </div>
        </div>
        <p class="text-gray-800 text-sm md:text-base font-serif italic mb-4 leading-relaxed">
          "${w.msg}"
        </p>
      </div>
      <div class="flex items-center justify-between pt-2 border-t border-rose-200/50">
        <span class="font-bold text-gray-900 font-serif-luxury text-sm">— ${w.name}</span>
        <span class="text-rose-500">❤️</span>
      </div>
    </div>
  `).join('');
}

function deleteWish(index) {
  if (!confirm("Are you sure you want to remove this note?")) return;
  const stored = JSON.parse(localStorage.getItem('pankaj_pooja_wishes') || '[]');
  stored.splice(index, 1);
  localStorage.setItem('pankaj_pooja_wishes', JSON.stringify(stored));
  renderWishes();
}
window.deleteWish = deleteWish;


// ===================================================================
// 8. CELEBRATION EFFECTS: FLOATING HEARTS & CONFETTI
// ===================================================================
function initFloatingHearts() {
  const container = document.getElementById('floating-hearts-container');
  if (!container) return;

  const heartSymbols = ['❤️', '💖', '💍', '✨', '🌹', '🤍', '🌸'];

  function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'floating-heart';
    el.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    el.style.left = `${Math.random() * 95}%`;
    el.style.fontSize = `${16 + Math.random() * 22}px`;
    el.style.animationDuration = `${7 + Math.random() * 8}s`;
    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 15000);
  }

  setInterval(spawnHeart, 1200);
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#e11d48', '#f43f5e', '#d4af37', '#fef08a', '#ffffff', '#c084fc']
    });
  }
}
window.triggerConfetti = triggerConfetti;


// ===================================================================
// 9. CERTIFICATE / KEEPSAKE GENERATOR
// ===================================================================
function openCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    triggerConfetti();
  }
}

function closeCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;


// ===================================================================
// INITIALIZATION ON DOM LOAD
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Live counter
  updateTogethernessCounter();
  setInterval(updateTogethernessCounter, 1000);

  // 2. Audio Engine
  initAudioEngine();

  // 3. Slideshow & Galleries
  initGalleryEngine();

  // 4. Photo Manager Modal
  initPhotoManager();

  // 5. 25 Reasons
  initReasonsDeck();

  // 6. Wishes Wall
  initWishesWall();

  // 7. Floating Hearts
  initFloatingHearts();

  // 8. Games Initialization
  if (typeof initQuiz === 'function') initQuiz();
  if (typeof initMemoryGame === 'function') initMemoryGame();
  if (typeof drawWheel === 'function') drawWheel();

  // Spin Wheel button
  const spinBtn = document.getElementById('spin-btn');
  if (spinBtn && typeof spinWheel === 'function') {
    spinBtn.addEventListener('click', spinWheel);
  }

  // Catcher Game button
  const catcherBtn = document.getElementById('catcher-start-btn');
  if (catcherBtn && typeof initHeartCatcher === 'function') {
    catcherBtn.addEventListener('click', initHeartCatcher);
  }

  // 9. Mobile Navigation Menu
  initMobileMenu();

  // 10. Mobile Touch Swipe Gestures
  initTouchGestures();
});

// ===================================================================
// 10. MOBILE SPECIFIC HELPERS (MENU & TOUCH SWIPE)
// ===================================================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-nav-menu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuBtn.innerText = '✕';
    } else {
      mobileMenu.classList.add('hidden');
      menuBtn.innerText = '☰';
    }
  });

  // Close when tapping any navigation link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.innerText = '☰';
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
      mobileMenu.classList.add('hidden');
      menuBtn.innerText = '☰';
    }
  });
}

function initTouchGestures() {
  // Swipe for main slideshow carousel
  const carousel = document.getElementById('slides-wrapper');
  if (carousel) {
    let touchStartX = 0;
    let touchStartY = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - touchStartX;
      const diffY = e.changedTouches[0].clientY - touchStartY;

      // Ensure horizontal swipe is dominant and significant (> 45px)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          changeSlide(1); // Swipe left -> Next photo
        } else {
          changeSlide(-1); // Swipe right -> Prev photo
        }
      }
    }, { passive: true });
  }

  // Swipe for Fullscreen Lightbox
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    let lbTouchStartX = 0;

    lightbox.addEventListener('touchstart', (e) => {
      lbTouchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - lbTouchStartX;
      if (Math.abs(diffX) > 50) {
        if (diffX < 0) {
          changeLightboxSlide(1);
        } else {
          changeLightboxSlide(-1);
        }
      }
    }, { passive: true });
  }
}
