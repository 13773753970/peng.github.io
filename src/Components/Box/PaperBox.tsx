import './PaperBox.css'

type Props = {
    title: string
    type: string
    date: string
    authors: {portrait?: string, name: string}[]
    abstract: string,
    link: string
}

function PaperBox(props: Props) {
    const {title, type, date, authors, abstract, link} = props
    return (
        <div className="paper-container">
            <a className="title" href={link}>{title}</a>
            <div className="line">
                <div className="study-type">{type}</div>
                <span className="publish-date">{date}</span>
            </div>
            <ul className='line'>
                {authors.slice(0, 3).map(x => (
                    <li key={x.name} className='author-container'>
                        <img alt={x.name} className='author-portrait' src={x.portrait === undefined ? require('../../Images/profile_default.jpeg') : x.portrait}/>
                        <span className='author-name'>{x.name}</span>
                    </li>
                ))}
                {authors.length > 4 && (
                    <li className='author-container'>
                        <span>[...]</span>
                    </li>
                )}
                {authors.length > 3 && authors.slice(authors.length - 1).map(x => (
                    <li key={x.name} className='author-container'>
                        <img alt={x.name} className='author-portrait' src={x.portrait === undefined ? require('../../Images/profile_default.jpeg') : x.portrait}/>
                        <span className='author-name'>{x.name}</span>
                    </li>
                ))}
            </ul>
            <p className='line abstract'>{abstract}</p>
        </div>
    )
}

export default PaperBox