import './StatsList.scss'

export default function StatsList({players}) {

    const items = players === "" 
                    ? [] 
                    : players.map((player, index) => (
                        <li className={`d-flex justify-content-between list-group-item ${ index === 0 ? 'top-score' : ''}`} key={`player_${index}`}>
                            <div>
                                <img src={`${player.profile_image}`} alt="" />
                                <span>{player.nickname}</span>
                            </div>
                            <div className={`d-flex align-items-center ${ index === 0 ? 'top-score' : ''}`}>
                                { index === 0 && <img src="fire.svg" alt="" /> }
                                <span>{player.score}</span>
                            </div>
                        </li>
                    ))

    return (
        <div className='mt-5'>
            <ul className='list-group'>
                {items.length === 0 ? <div className="text-center">Loading...</div> : items}
            </ul>
        </div>
    )
}