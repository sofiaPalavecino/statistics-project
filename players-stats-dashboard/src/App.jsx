import { useState, useEffect } from 'react'
import StatsList from './components/StatsList/StatsList'
import './App.scss'

function App() {
  const [playersStats, setPlayersStats] = useState("")
  const [lastUpdatedTime, setLastUpdatedTime] = useState()

  function generateDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }

  function updateLastUpdatedTime() {
    const currentDate = new Date();
    setLastUpdatedTime(generateDate(currentDate));
  }

  async function fetchPlayersStats() {
    let rawData = await fetch('http://localhost:3000/api/playersstats/top')
    let playersStats = await rawData.json()
    setPlayersStats(playersStats)
  }

  useEffect(() => {
    fetchPlayersStats();
    updateLastUpdatedTime();
    let timerId = setInterval(async () => {
      await fetchPlayersStats()
      updateLastUpdatedTime();
    }, 10000)

    return() => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <main>
      <section>
        <div className="wrap">
          <div className='text-center'>
            <h1 className="fw-bold">PSh-Game Statistics</h1>
            <span>Last updated: {lastUpdatedTime}</span>
          </div>

          <StatsList players={playersStats}></StatsList>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="text-center">
            <h2>Download the report</h2>

            <button type="button" class="btn btn-warning">Warning</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
