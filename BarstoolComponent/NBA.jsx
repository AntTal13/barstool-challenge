import React, { useEffect } from 'react';

export default function NBA({ stats }) {
  // Take in NBA JSON data and display it
  console.log('stats', stats)
  let league = stats.league
  let homeTeam = stats.home_team.abbreviation
  let awayTeam = stats.away_team.abbreviation
  let homePeriodScores = stats.home_period_scores
  let awayPeriodScores = stats.away_period_scores
  let homeFinalScore = stats.home_period_scores.reduce((a, b) => a + b, 0)
  let awayFinalScore = stats.away_period_scores.reduce((a, b) => a + b, 0)
  let periods = homePeriodScores.length
  // let periods = {0:0, 1:0, 2:0, 3:0}

  // console.log('league', league, 'homeTeam', homeTeam, 'awayTeam', awayTeam, 'homePeriodScores', homePeriodScores, 'awayPeriodScores', awayPeriodScores, 'periods', periods, 'records', records)

  return (
    <main>
      <div>BOX SCORE GOES HERE</div>
      <table>
        <thead>
          <tr>
            <th></th>
            {/* { periods ? periods.map((period, idx) =>
              <th key={idx}>{idx+1}</th>
              )
              : null
            } */}
            { periods ? [...Array(periods)].map((period, idx) =>
              <th key={idx}>{idx+1}</th>
              )
              : null
            }
            <th>Totals</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{homeTeam}</td>
              { homePeriodScores ? homePeriodScores.map((score, idx) =>
                <td key={idx}>{score}</td>
                )
                : 0
              }
              <td>{homeFinalScore}</td>
            </tr>
            <tr>
              <td>{awayTeam}</td>
              { awayPeriodScores ? awayPeriodScores.map((score, idx) =>
                <td key={idx}>{score}</td>
                )
                : 0
              }
              <td>{awayFinalScore}</td>
            </tr>
          </tbody>
            
      </table>
    </main>
    )
}