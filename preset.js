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
  "6,1": { clip: "clips/Front_Left.wav",    farbe: "weiss",  name: "Tom Low" },
  "0,1": { clip: "clips/airhorn.mp3",    farbe: "pink",  name: "airhorn" },

  // TBS song clips
  "7,0": { clip: "clips/Lachen_short.wav",    farbe: "lila",  name: "lachen" },
  "7,1": { clip: "clips/Lachen_short2.wav",    farbe: "lila",  name: "lachen2" },
  "7,2": { clip: "clips/dokter1.wav",    farbe: "lila",  name: "dokter" },
  "7,3": { clip: "clips/kein_bock.wav",    farbe: "lila",  name: "kb" },
  "7,4": { clip: "clips/wieso.wav",    farbe: "lila",  name: "wieso" },
  "7,5": { clip: "clips/arbeit.wav",    farbe: "lila",  name: "arbeit" },
  "7,6": { clip: "clips/cool.wav",    farbe: "lila",  name: "cool" },

  // "0,1": { clip: "clips/bass.wav",    farbe: "rot-dunkel", name: "Bass" },
};

// Farbnamen in Hex umwandeln (nicht ändern)
const PRESET = Object.fromEntries(
  Object.entries(PRESET_RAW).map(([key, cfg]) => [
    key,
    { ...cfg, color: FARBEN[cfg.farbe] || FARBEN["grau"] }
  ])
);
