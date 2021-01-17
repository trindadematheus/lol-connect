export default function getRankedBadge(rank: string) {
  switch (rank) {
    case 'IRON':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/0/03/Season_2019_-_Iron_1.png';

    case 'BRONZE':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/f/f4/Season_2019_-_Bronze_1.png';

    case 'SILVER':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/7/70/Season_2019_-_Silver_1.png';

    case 'GOLD':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/9/96/Season_2019_-_Gold_1.png';

    case 'PLATINUM':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Season_2019_-_Platinum_1.png';

    case 'DIAMOND':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/9/91/Season_2019_-_Diamond_1.png';

    case 'MASTER':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/1/11/Season_2019_-_Master_1.png';

    case 'GRANDMASTER':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/7/76/Season_2019_-_Grandmaster_1.png';

    case 'CHALLENGER':
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/5/5f/Season_2019_-_Challenger_1.png';

    default:
      return 'https://static.wikia.nocookie.net/leagueoflegends/images/3/38/Season_2019_-_Unranked.png'
  }
}