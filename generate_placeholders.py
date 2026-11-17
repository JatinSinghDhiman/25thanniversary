import os

placeholders = {
    "images/ring-ceremony": [
        ("ring-1.svg", "💍 The Sacred Promise", "Exchange of Rings & Forever Commitment", "#4a154b", "#7b1fa2", "💍"),
        ("ring-2.svg", "✨ The Sparkle of Love", "Where our beautiful journey officially began", "#311b92", "#512da8", "✨"),
        ("ring-3.svg", "🥂 Cheers to Togetherness", "Celebrations with beloved family & friends", "#880e4f", "#c2185b", "🥂")
    ],
    "images/wedding-day": [
        ("wedding-1.svg", "👑 Saat Phere • 1 Dec 2001", "The sacred vows of love, honor & trust", "#800020", "#b71c1c", "🔥"),
        ("wedding-2.svg", "🌹 Two Souls, One Heart", "Pankaj weds Pooja - A match made in heaven", "#880e4f", "#ad1457", "🌹"),
        ("wedding-3.svg", "🎊 The Grand Celebration", "Beginning of a 25-year fairytale", "#4a148c", "#6a1b9a", "🎊")
    ],
    "images/cute-moments": [
        ("moment-1.svg", "☕ Chai, Talks & Laughter", "Cherishing the simple, sweet daily joys", "#e65100", "#f57c00", "☕"),
        ("moment-2.svg", "🏖️ Vacations & Wanderlust", "Exploring the world holding each other's hands", "#006064", "#00838f", "✈️"),
        ("moment-3.svg", "🥰 Unconditional Friendship", "25 years of being best friends first", "#d81b60", "#e91e63", "💖")
    ],
    "images/choti-laxmi": [
        ("laxmi-1.svg", "🌸 Our Chhoti Laxmi", "The angel who brought endless prosperity & joy", "#c2185b", "#ec407a", "🌸"),
        ("laxmi-2.svg", "✨ Sunshine of the House", "Daddy's pride and Mumma's sweet confidante", "#ad1457", "#d81b60", "👑"),
        ("laxmi-3.svg", "💖 A Heart Full of Smiles", "Watching you grow has been our greatest joy", "#880e4f", "#c2185b", "🎀")
    ],
    "images/ghar-ka-chirag": [
        ("chirag-1.svg", "🌟 Ghar Ka Chirag", "The light, strength and pride of our home", "#0d47a1", "#1976d2", "🌟"),
        ("chirag-2.svg", "🚀 Boundless Energy & Dreams", "Our boy making every single day brighter", "#1565c0", "#2196f3", "🛡️"),
        ("chirag-3.svg", "🏆 The Pillar of Tomorrow", "Carrying our family values with honor & smile", "#01579b", "#0288d1", "✨")
    ],
    "images/happy-family": [
        ("family-1.svg", "👨‍👩‍👧‍👦 Our Complete World", "Pankaj, Pooja, Chhoti Laxmi & Ghar Ka Chirag", "#3e2723", "#5d4037", "🏡"),
        ("family-2.svg", "🎉 Festivals & Feasts", "Diwali, birthdays, and every day full of warmth", "#b71c1c", "#c62828", "🪔"),
        ("family-3.svg", "🤍 25 Years of Family Blessings", "The greatest legacy is a home filled with love", "#4a148c", "#6a1b9a", "✨")
    ]
}

def create_svg(title, subtitle, color1, color2, icon):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color1}" />
      <stop offset="100%" stop-color="{color2}" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff8e1" />
      <stop offset="50%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#aa771c" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)" />

  <!-- Subtle Pattern Overlays -->
  <circle cx="100" cy="100" r="180" fill="white" opacity="0.05" />
  <circle cx="700" cy="500" r="220" fill="white" opacity="0.05" />
  <circle cx="400" cy="300" r="280" fill="none" stroke="white" stroke-width="1" opacity="0.1" stroke-dasharray="8 6"/>

  <!-- Ornate Decorative Border -->
  <rect x="25" y="25" width="750" height="550" rx="20" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.85"/>
  <rect x="35" y="35" width="730" height="530" rx="16" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" />

  <!-- Corner Flourishes -->
  <path d="M 45 65 Q 45 45 65 45" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <path d="M 755 65 Q 755 45 735 45" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <path d="M 45 535 Q 45 555 65 555" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <path d="M 755 535 Q 755 555 735 555" fill="none" stroke="url(#gold)" stroke-width="3"/>

  <!-- Center Card Area -->
  <rect x="100" y="80" width="600" height="440" rx="24" fill="rgba(0,0,0,0.3)" filter="url(#shadow)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />

  <!-- Icon Circle -->
  <circle cx="400" cy="190" r="65" fill="rgba(255,255,255,0.1)" stroke="url(#gold)" stroke-width="2" />
  <text x="400" y="210" font-family="'Segoe UI Emoji', 'Apple Color Emoji', sans-serif" font-size="56" text-anchor="middle">{icon}</text>

  <!-- Titles -->
  <text x="400" y="295" font-family="'Playfair Display', Georgia, serif" font-weight="bold" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="1">
    {title}
  </text>
  <text x="400" y="340" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" fill="#f8fafc" text-anchor="middle" opacity="0.9" font-weight="300">
    {subtitle}
  </text>

  <!-- Photo Placeholder Tag -->
  <g transform="translate(400, 420)">
    <rect x="-180" y="-20" width="360" height="42" rx="21" fill="rgba(255, 255, 255, 0.15)" stroke="url(#gold)" stroke-width="1.5"/>
    <text x="0" y="7" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" fill="#fef08a" font-weight="600" text-anchor="middle" letter-spacing="0.5">
      📷 Drop / Replace with your photo here
    </text>
  </g>

  <!-- Footer Tagline -->
  <text x="400" y="490" font-family="'Dancing Script', cursive, serif" font-size="20" fill="#fbcfe8" text-anchor="middle">
    Pankaj &amp; Pooja • 25th Silver Jubilee
  </text>
</svg>"""

for folder, files in placeholders.items():
    os.makedirs(folder, exist_ok=True)
    for filename, title, subtitle, c1, c2, icon in files:
        filepath = os.path.join(folder, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(create_svg(title, subtitle, c1, c2, icon))

print("All SVG placeholders generated successfully!")
