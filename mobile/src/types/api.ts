export interface Summoner {
  displayName: string; // linda e doce
  profileIconId: number; // 3150
  percentCompleteForNextLevel: number; // 94
  summonerId: number; //6586175
  summonerLevel: number; // 190
  masteries: Mastery[];
  rank: Rank;
  honor: Honor;
}

interface Honor {
  // https://cdn.communitydragon.org/10.18.1/honor/5
  honorLevel: number;
}

interface Rank {
  highestRankedEntry: {
    division: string; // IV
    tier: string; // GOLD
    queueType: string; // RANKED_SOLO_5x5
  }
}

interface Mastery {
  // https://cdn.communitydragon.org/11.1.1/champion/40/splash-art/centered
  // https://cdn.communitydragon.org/11.1.1/champion/50/square

  championId: number; // 21 114 55
  championLevel: number; // 7
  chestGranted: boolean; // true
  formattedChampionPoints: string; // 517.473
  highestGrade: string; // S-
}