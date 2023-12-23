import './index.css'

const FeedbackItem = props => {
  const {emojiDetail, onSubmitting} = props
  const {imageUrl, name} = emojiDetail

  const onClicking = () => {
    onSubmitting()
  }

  return (
    <li className="list-item" onClick={onClicking}>
      <img src={imageUrl} alt={name} className="emoji-img" />
      <p>{name}</p>
    </li>
  )
}

export default FeedbackItem
