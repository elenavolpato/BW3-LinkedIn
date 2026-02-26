import "../assets/css/NewsSidebarDx.css"

const NewsSidebarDx = ({ title, text }) => {
  return (
    <div className="background-news">
      <div className="news-item">
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default NewsSidebarDx
