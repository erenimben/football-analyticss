export type FormToken = 'G' | 'B' | 'M';

export type Match = {
  id: number;
  league: string;
  country: string;
  kickoff: string;
  home: string;
  away: string;
  status: string;
  live: boolean;
  minute?: number;
  score?: string;
  last5Home: FormToken[];
  last5Away: FormToken[];
  h2h: string[];
  odds: { home: number; draw: number; away: number; over25: number; bttsYes: number };
  historicalByOdds: { home: number; draw: number; away: number; sample: number };
  venueTrend: { homeWin: number; draw: number; awayWin: number };
  prediction: {
    matchResult: string;
    over25: string;
    btts: string;
    firstHalfGoal: string;
    nextGoal?: string;
    confidence: number;
    commentary: string;
    anomaly: string;
  };
  liveStats?: {
    xg: string;
    shots: string;
    possession: string;
    danger: string;
  };
};

export type DashboardData = {
  date: string;
  leagues: string[];
  selectedLeague: string;
  refreshedAt: string;
  matches: Match[];
  alertFeed: string[];
  topInsights: { label: string; value: string }[];
};
