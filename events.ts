export enum EventName {
  NEW_LINE = 'newLine',
  MATCH_STARTED = 'matchStarted',
  MATCH_ENDED = 'matchEnded',
  PLAYER_KILLED = 'playerKilled'
}

export type NewLineData = {
  line: string;
};

export type GameEventData = {
  gameId: string;
  details: any;
};

export type Events = 
  | { name: EventName.NEW_LINE; data: NewLineData }
  | { name: EventName.MATCH_STARTED | EventName.MATCH_ENDED; data: GameEventData };