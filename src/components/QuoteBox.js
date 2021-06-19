import Text from './Text'
import Author from './Author'
import NewQuote from './NewQuote'
import Tweet from './Tweet'

const QuoteBox = ({quote, author, onClick}) => {

    return (
        <div id="quote-box">
            <div id="textauth-wrap">
                <Text quote={quote}/>
                <Author author={author}/>
            </div>
            <div id="btns">
                <NewQuote onClick={onClick}/>
                <Tweet />
            </div>
        </div>

    )
}

export default QuoteBox