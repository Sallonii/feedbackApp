// Write your React code here.
import {Component} from 'react'

import FeedbackItem from '../FeedbackItem'

import './index.css'

class Feedback extends Component {
  state = {cardContClassName: 'card-container'}

  onSubmitting = () => {
    this.setState({cardContClassName: 'submitted'})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {cardContClassName} = this.state

    return (
      <div className="bg-container">
        <div className={cardContClassName}>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(eachItem => (
              <FeedbackItem
                emojiDetail={eachItem}
                key={eachItem.id}
                onSubmitting={this.onSubmitting}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
