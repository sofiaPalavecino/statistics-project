import './StatsList.scss'

export default function StatsList({players}) {

    const items = players === "" 
                    ? [] 
                    : players.map((player, index) => (
                        <li className='d-flex justify-content-between list-group-item' key={`player_${index}`}>
                            <div>
                                <img src={`${player.profile_image}`} alt="" />
                                <span>{player.nickname}</span>
                            </div>
                            <div>
                                <span>{player.score}</span>
                            </div>
                        </li>
                    ))

    return (
        <div className='mt-5'>
            <ul className='list-group'>
                {items}
            </ul>
        </div>
    )
}