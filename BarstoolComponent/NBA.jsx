import React, { useEffect, useState, useRef } from 'react';
import NBA from '../../components/Barstool/NBA'
import { set } from 'mongoose';

export default function Barstool() {
  const MLBLink = 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json'
  // const getMLB = async () => {
  //   const response = await fetch(MLB)
  //   return await response.json()
  // }

  const [stats, setStats] = useState(null)
  const [leagueType, setLeagueType] = useState(null)
  const [periodLength, setPeriodLength] = useState(null)
  const [time, setTime] = useState(new Date())

  const previous = useRef(stats)

  const NBALink = 'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json'

  const getScores = async (url) => {
    const response = await fetch(url)
      .then(response => response.json())
      // This is where we can define the type of league and set state to display that component
      .then(data => {
        setLeagueType(data.league)
        setStats(data)
      })
    return response
  }

  const checkDataChange = (previous) => {
    console.log('previous', previous)
    // Check if data has changed
    // If data has changed, update the data
    // If data has not changed, do nothing
  }

  // let previous = JSON.stringify(stats)
  // console.log('previous', previous)

  useEffect(() => {
    getScores(MLBLink)
    // let previous = JSON.stringify(stats)
    // console.log('previous', previous)
    // previous = stats
    // Run a function to check previous and current
    // let current = null;
    checkDataChange(stats)
    const interval = setInterval(() => {
      setTime(new Date())
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  // Need league => league will return layout of boxscore
  // Layout has home team, away team, home_period_scores, away_period_scores, periods, records
  // Need home team, away team
  // Need home_period_scores, away_period_scores
  // Need Periods
  // Need Records


  // console.log('MLB', getMLB())

  // Read type of sport
  // Return layout based on JSON league: i.e. "MLB", "NBA"

  // Check if game data has changed every 0-15 seconds and cache the data
  // If game data has changed, update the data
  // Look up how to cache data, timestamp, comapre to timestamp, and update if needed


  return (
    <main>
      { stats ? 
      <NBA stats={stats} relative date={Date} autoUpdate/>
      : null  
      }
    {/* <div>
      <div class="boxscore">
        <div class="boxscore__team boxscore__team--header">
          <label></label>
          <div class="boxscore__team__units">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
          <div class="boxscore__team__results">
            <span>R</span>
            <span>H</span>
            <span>E</span>
          </div>
        </div>
        <div class="boxscore__team boxscore__team--away">
          <label>CHC</label>
          <div class="boxscore__team__units">
            <span>1</span>
            <span>0</span>
            <span>2</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>1</span>
            <span>1</span>
          </div>
          <div class="boxscore__team__results">
            <span>5</span>
            <span>12</span>
            <span>0</span>
          </div>
        </div>
        <div class="boxscore__team boxscore__team--home">
          <label>STL</label>
          <div class="boxscore__team__units">
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>3</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
            <span>1</span>
          </div>
          <div class="boxscore__team__results">
            <span>4</span>
            <span>8</span>
            <span>1</span>
          </div>
        </div>
        <div class="boxscore__details">
          <div class="boxscore__details__team boxscore__details__team--away">
            <p>
              <strong>Cubs</strong><small>CHC</small>
            </p>
            <span>56-38</span>
          </div>
          <div class="boxscore__details__info">
            <strong>Btm<br/>9th</strong>
          </div>
          <div class="boxscore__details__team boxscore__details__team--home">
            <p>
              <strong>Cardinals</strong><small>STL</small>
            </p>
            <span>56-38</span>
          </div>
        </div>
      </div>
      
      <div>NBA</div>
      
      <div class="boxscore">
        <div class="boxscore__team boxscore__team--header">
          <label></label>
          <div class="boxscore__team__units">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          <div class="boxscore__team__results">
            <span>TOTAL</span>
          </div>
        </div>
        <div class="boxscore__team boxscore__team--away">
          <label>NYJ</label>
          <div class="boxscore__team__units">
            <span>0</span>
            <span>3</span>
            <span>0</span>
            <span>7</span>
          </div>
          <div class="boxscore__team__results">
            <span>10</span>
          </div>
        </div>
        <div class="boxscore__team boxscore__team--home">
          <label>NE</label>
          <div class="boxscore__team__units">
            <span>14</span>
            <span>3</span>
            <span>7</span>
            <span>10</span>
          </div>
          <div class="boxscore__team__results">
            <span>33</span>
          </div>
        </div>
        <div class="boxscore__details">
          <div class="boxscore__details__team boxscore__details__team--away">
            <p>
              <strong>JETS</strong><small>NYJ</small>
            </p>
            <span>56-38</span>
          </div>
          <div class="boxscore__details__info">
            <strong>Final</strong>
          </div>
          <div class="boxscore__details__team boxscore__details__team--home">
            <p>
              <strong>PATRIOTS</strong><small>NE</small>
            </p>
            <span>56-38</span>
          </div>
        </div>
      </div>
    </div> */}
    </main>
  )
}
