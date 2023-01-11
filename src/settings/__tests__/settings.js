import Settings from '../settings';

test('Test default settings', () => {
  expect(new Settings().settings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});

test.each([
  ['theme: light', { theme: 'light' }, new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ])],
  ['theme: gray', { theme: 'gray' }, new Map([
    ['theme', 'gray'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ])],
  ['wrong theme: yellow', { theme: 'yellow' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ])],
  ['music: pop', { music: 'pop' }, new Map([
    ['theme', 'dark'],
    ['music', 'pop'],
    ['difficulty', 'easy'],
  ])],
  ['music: rock', { music: 'rock' }, new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ])],
  ['music: chillout', { music: 'chillout' }, new Map([
    ['theme', 'dark'],
    ['music', 'chillout'],
    ['difficulty', 'easy'],
  ])],
  ['music: off', { music: 'off' }, new Map([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'easy'],
  ])],
  ['wrong music: classic', { music: 'classic' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ])],
  ['difficulty: normal', { difficulty: 'normal' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'normal'],
  ])],
  ['difficulty: hard', { difficulty: 'hard' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ])],
  ['difficulty: nightmare', { difficulty: 'nightmare' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'nightmare'],
  ])],
  ['wrong difficulty: very easy', { difficulty: 'very easy' }, new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ])],
  ['change all settings', {
    music: 'pop',
    theme: 'light',
    difficulty: 'normal',
  }, new Map([
    ['theme', 'light'],
    ['music', 'pop'],
    ['difficulty', 'normal'],
  ])],
])(
  'test settings with %s',
  (_, userSettings, expected) => {
    expect(new Settings(userSettings).settings).toEqual(expected);
  },
);
