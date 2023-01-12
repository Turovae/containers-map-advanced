export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  changeSetting(settings) {
    const validUserTheme = ['light', 'gray'];
    const validUserMusic = ['pop', 'rock', 'chillout', 'off'];
    const validUserDifficulty = ['normal', 'hard', 'nightmare'];

    if (settings && validUserTheme.includes(settings.theme)) {
      this.userSettings.set('theme', settings.theme);
    }
    if (settings && validUserMusic.includes(settings.music)) {
      this.userSettings.set('music', settings.music);
    }
    if (settings && validUserDifficulty.includes(settings.difficulty)) {
      this.userSettings.set('difficulty', settings.difficulty);
    }
  }

  get settings() {
    return new Map([
      ...this.default.entries(),
      ...this.userSettings.entries(),
    ]);
  }
}
