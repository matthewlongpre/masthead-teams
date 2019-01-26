
const theme = {};

let base = "22, 35, 58,";

theme.light = {
  "name": "light",
  "fg-01": `rgba(${base} 1)`,
  "fg-02": `#29384F`,
  "gray-02": `rgba(${base} .74)`,
  "gray-03": `rgba(${base} .64)`,
  "gray-04": `rgba(${base} .52)`,
  "gray-06": `rgba(${base} .36)`,
  "gray-08": `rgba(${base} .14)`,
  "gray-10": `#eef1f5`,
  "gray-12": `rgba(${base} .5)`,
  "gray-24": `rgba(${base} .25)`,
  "gray-48": `rgba(${base} .12)`,
  "gray-96": `rgba(${base} .06)`,
  "bg-01": `#fff`,
  "bg-02": `#f3f2f1`,
  "bg-03": `#EEF1F5`,
  "tile-bg": `#fff`,
  "tile-border": `#fff`,
  "input-bg": `#edebe9`,
  "input-fg": `#484644`,
  "input-border": `#edebe9`,
  "input-placeholder": `rgba(${base} .64)`,
  "menu-title-bg": `#fff`
}

base = "255, 255, 255,";

theme.dark = {
  "name": "dark",
  "fg-01": `rgba(${base} 1)`,
  "fg-02": `#29384F`,
  "gray-02": `rgba(${base} .74)`,
  "gray-03": `rgba(${base} .64)`,
  "gray-04": `rgba(${base} .52)`,
  "gray-06": `rgba(${base} .36)`,
  "gray-08": `rgba(${base} .14)`,
  "gray-10": `#404045`,
  "gray-12": `rgba(${base} .5)`,
  "gray-24": `rgba(${base} .25)`,
  "gray-48": `rgba(${base} .12)`,
  "gray-96": `rgba(${base} .06)`,
  "bg-01": `#000`,
  "bg-02": `#201f1f`,
  "bg-03": `#3b3a3a`,
  "tile-bg": `#2d2c2c`,
  "tile-border": `#2d2c2c`,
  "input-bg": `#292828`,
  "input-fg": `#fcfcfc`,
  "input-border": `#292828`,
  "input-placeholder": `rgba(${base} .64)`,
  "menu-title-bg": `#2d2c2c`
}

base = "255, 255, 255,";

theme.contrast = {
  "name": "contrast",
  "fg-01": `#fff`,
  "fg-02": `#fff`,
  "gray-02": `rgba(${base} 1)`,
  "gray-03": `rgba(${base} 1)`,
  "gray-04": `rgba(${base} 1)`,
  "gray-06": `rgba(${base} 1)`,
  "gray-08": `rgba(${base} 1)`,
  "gray-10": `rgba(${base} 1)`,
  "gray-12": `#000`,
  "gray-24": `#000`,
  "gray-48": `#000`,
  "gray-96": `#000`,
  "bg-01": `#000`,
  "bg-02": `#000`,
  "bg-03": `#000`,
  "tile-bg": `#000`,
  "tile-border": `#fff`,
  "input-bg": `#000`,
  "input-fg": `#fff`,
  "input-placeholder": `#fff`,
  "menu-title-bg": `#000`
}

export default theme;
