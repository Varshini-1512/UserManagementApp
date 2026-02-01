const settings={
  theme:"light",
  notifications:true,
  autoSave:false,
  language:"en"
};

// Toggle theme between "light" and "dark"
settings.theme=settings.theme ==="light"?"dark":"light";
console.log(settings.theme);

// Turn autoSave to true
settings.autoSave=true;
console.log(settings.autoSave);

// Remove the notifications setting
delete settings.notifications;
console.log(settings);

// Freeze the settings object so it cannot be modified
Object.freeze(settings);

// Trying to modify after freeze (will not work)
settings.language="fr";
console.log(settings);
