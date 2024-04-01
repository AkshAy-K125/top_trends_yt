import './cards.css'

const Cards = ({ cardDetails, ind }) => {
    console.log(cardDetails)
    return (
        <div className="card">
            <div>
                <img src={cardDetails["video"]["thumbnails"][0]["url"]} />
            </div>
            <div>
                <div>
                    <a href={"https://www.youtube.com/watch?v=" + cardDetails["video"]["videoId"]}>{cardDetails["video"]["title"]}</a>
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
            <div>
                {
                    "#" + ind + 1
                }
            </div>
        </div>
    )
}

export default Cards