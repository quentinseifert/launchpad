// ============================================
//  LAUNCHPAD PRESET KONFIGURATION
//  Format: "x,y": { clip: "pfad", color: "#hex", name: "anzeigename" }
//  x = 0-7 (links nach rechts)
//  y = 0-7 (oben nach unten)
// ============================================

const PRESET = {
  "0,0": { clip: "clips/kick.wav",       color: "#ff2d55", name: "Kick"    },
  "1,0": { clip: "clips/snare.wav",      color: "#ff9500", name: "Snare"   },
  "2,0": { clip: "clips/hihat.wav",      color: "#ffcc00", name: "HiHat"   },
  "3,0": { clip: "clips/hihat-open.wav", color: "#34c759", name: "HH Open" },
  "4,0": { clip: "clips/clap.wav",       color: "#00c7be", name: "Clap"    },
  "5,0": { clip: "clips/crash.wav",      color: "#0a84ff", name: "Crash"   },
  "6,0": { clip: "clips/tom-hi.wav",     color: "#5e5ce6", name: "Tom Hi"  },
  "7,0": { clip: "clips/tom-low.wav",    color: "#bf5af2", name: "Tom Low" },

  // Zweite Reihe – einfach auskommentieren oder anpassen
  // "0,1": { clip: "clips/bass.wav",    color: "#ff375f", name: "Bass"    },
};
