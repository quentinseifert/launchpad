// ============================================
//  LAUNCHPAD PRESET KONFIGURATION
// ============================================
//
//  VERFÜGBARE FARBEN (Launchpad S):
//
//  "rot"          #ff2d55
//  "rot-dunkel"   #7a0020
//  "orange"       #ff6a00
//  "gelb"         #ffcc00
//  "gelb-dunkel"  #997a00
//  "gruen"        #00ff88
//  "gruen-dunkel" #007a40
//  "gruen-olive"  #6aff00
//  "blau"         #0a84ff
//  "blau-dunkel"  #003d7a
//  "lila"         #bf5af2
//  "lila-dunkel"  #5a007a
//  "pink"         #ff375f
//  "weiss"        #e8e8f0
//  "grau"         #44445a
//  "aus"          #1e1e24  (kein Licht)
//
// ============================================

const FARBEN = {
  "rot":          "#ff2d55",
  "rot-dunkel":   "#7a0020",
  "orange":       "#ff6a00",
  "gelb":         "#ffcc00",
  "gelb-dunkel":  "#997a00",
  "gruen":        "#00ff88",
  "gruen-dunkel": "#007a40",
  "gruen-olive":  "#6aff00",
  "blau":         "#0a84ff",
  "blau-dunkel":  "#003d7a",
  "lila":         "#bf5af2",
  "lila-dunkel":  "#5a007a",
  "pink":         "#ff375f",
  "weiss":        "#e8e8f0",
  "grau":         "#44445a",
  "aus":          "#1e1e24",
};

// ============================================
//  PADS KONFIGURIEREN
//  Format: "x,y": { clip: "clips/datei.wav", farbe: "farbname", name: "Anzeigename" }
//  x = 0-7 (links → rechts)
//  y = 0-7 (oben → unten)
// ============================================

const PRESET_RAW = {
  "0,0": { clip: "clips/Side_Right.wav",       farbe: "rot",    name: "Kick"    },
  "1,0": { clip: "clips/Side_Left.wav",      farbe: "orange", name: "Snare"   },
  "2,0": { clip: "clips/Rear_Right.wav",      farbe: "gelb",   name: "HiHat"   },
  "3,0": { clip: "clips/Rear_Left.wav", farbe: "gruen",  name: "HH Open" },
  "4,0": { clip: "clips/Rear_Center.wav",       farbe: "blau",   name: "Clap"    },
  "5,0": { clip: "clips/Noise.wav",      farbe: "lila",   name: "Crash"   },
  "6,0": { clip: "clips/Front_Right.wav",     farbe: "pink",   name: "Tom Hi"  },
  "7,0": { clip: "clips/Front_Left.wav",    farbe: "weiss",  name: "Tom Low" },
  "0,1": { clip: "clips/airhorn.mp3",    farbe: "pink",  name: "airhorn" },

  // "0,1": { clip: "clips/bass.wav",    farbe: "rot-dunkel", name: "Bass" },
};

// Farbnamen in Hex umwandeln (nicht ändern)
const PRESET = Object.fromEntries(
  Object.entries(PRESET_RAW).map(([key, cfg]) => [
    key,
    { ...cfg, color: FARBEN[cfg.farbe] || FARBEN["grau"] }
  ])
);
