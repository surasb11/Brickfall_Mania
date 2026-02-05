export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER'
}

export enum Difficulty {
  STANDARD = 'STANDARD',
  SPEEDY = 'SPEEDY'
}

export enum ThemeType {
  MIDNIGHT = 'MIDNIGHT',
  SUNSET = 'SUNSET',
  GLACIER = 'GLACIER'
}

export interface GameConfig {
  difficulty: Difficulty;
  theme: ThemeType;
}

export interface ScoreData {
  current: number;
  best: number;
  isNewRecord: boolean;
}