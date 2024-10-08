import './cards.css'
import { Zoom } from "react-awesome-reveal";

const Cards = ({ cardDetails, ind }) => {
    return (
        <Zoom key={"t" + ind} triggerOnce='false'>
            <div className="card">
                <div className='thumContainer'>
                    <img alt={cardDetails["video"]["videoId"]} src={cardDetails["video"]["thumbnails"][0]["url"]} />
                </div>
                <div className='detailsContainer'>
                    <div>
                        <a target="blank" href={"https://www.youtube.com/watch?v=" + cardDetails["video"]["videoId"]}>
                            {
                                (cardDetails["video"]["title"]).length > 50
                                    ?
                                    (cardDetails["video"]["title"]).substring(0, 50) + "..."
                                    :
                                    cardDetails["video"]["title"]
                            }
                        </a>
                    </div>
                    <div>
                        <p>
                            {
                                cardDetails["video"]["viewCountText"]
                            }
                        </p>
                    </div>
                    <div>
                        <p>
                            {
                                cardDetails["video"]["publishedTimeText"]
                            }
                        </p>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Cards