import { Cards, Footer } from '../../components';
import { Zoom } from "react-awesome-reveal";

const CardContainer = ({ cardTemp }) => {
    return (
        <>
            {
                cardTemp.length === 0 ?
                    <p className='initialPageWarn'>Choose other country</p>
                    :
                    cardTemp.map((ele, ind) => {
                        return (
                            <Zoom key={"c" + ind} triggerOnce='true'>
                                <Cards key={ind} cardDetails={ele} ind={ind} />
                            </Zoom>)
                    })
            }
            {
                cardTemp.length && <Footer />
            }
        </>
    )
}

export default CardContainer;