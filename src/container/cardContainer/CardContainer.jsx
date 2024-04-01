import { Cards } from '../../components';

const CardContainer = () => {

    var cardTemp = {
        "contents": [
            {
                "video": {
                    "channelId": "UCuHzBCaKmtaLcRAOoazhCPA",
                    "channelName": "Beyoncé",
                    "lengthText": "3:19",
                    "publishedTimeText": "3 days ago",
                    "thumbnails": [
                        {
                            "height": 118,
                            "url": "https://i.ytimg.com/vi/x9XHMK3nWr4/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAy7lFyZMewda6C309ifv_YxffxzQ",
                            "width": 210
                        },
                        {
                            "height": 138,
                            "url": "https://i.ytimg.com/vi/x9XHMK3nWr4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBSEJAvwnv45u0etFEjXxlyO6NGkg",
                            "width": 246
                        },
                        {
                            "height": 188,
                            "url": "https://i.ytimg.com/vi/x9XHMK3nWr4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD3OCRiuLeEc19IBf2XPFOVrSpnsA",
                            "width": 336
                        }
                    ],
                    "title": "Beyoncé - JOLENE (Official Lyric Video)",
                    "videoId": "x9XHMK3nWr4",
                    "viewCountText": "4,182,995 views"
                }
            }
            , {
                "video": {
                    "channelId": "UC1NZP8d-VFjV-kKSo6lDBig",
                    "channelName": "BossMan Dlow",
                    "lengthText": "3:12",
                    "publishedTimeText": "6 days ago",
                    "thumbnails": [
                        {
                            "height": 118,
                            "url": "https://i.ytimg.com/vi/NwfVDKGkZfo/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLC2u_klQekaYNyBBib7-lBv3G7oRg",
                            "width": 210
                        },
                        {
                            "height": 138,
                            "url": "https://i.ytimg.com/vi/NwfVDKGkZfo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzi8ddMtI0vCuNnUyGwZBo3wn_Ng",
                            "width": 246
                        },
                        {
                            "height": 188,
                            "url": "https://i.ytimg.com/vi/NwfVDKGkZfo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDqZADdqkfzqqF3bqealb7PnBEjfA",
                            "width": 336
                        }
                    ],
                    "title": "BossMan Dlow - Finesse Ft. GloRilla (Official Video)",
                    "videoId": "NwfVDKGkZfo",
                    "viewCountText": "2,624,105 views"
                }
            }
        ]
    }

    return (
        <>
            {
                Object.keys(cardTemp["contents"]).map((ele) => {
                    return <Cards key={ele} cardDetails={cardTemp["contents"][ele]} ind={ele} />
                })
            }
        </>
    )
}

export default CardContainer;


