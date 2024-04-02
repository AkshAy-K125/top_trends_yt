import { Cards } from '../../components';
import { Zoom } from "react-awesome-reveal";

const CardContainer = ({ cardTemp }) => {
    console.log(cardTemp.length)
    return (
        <>
            {
                cardTemp.length === 0 ?
                    <p className='initialPageWarn'>choose other country</p>
                    :
                    cardTemp.map((ele, ind) => {
                        return (
                            <Zoom key={"c" + ind} triggerOnce='false'>
                                <Cards key={ind} cardDetails={ele} ind={ind} />
                            </Zoom>)
                    })
            }
        </>
    )
}

export default CardContainer;