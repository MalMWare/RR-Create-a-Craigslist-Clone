import Posting from "./Posting"

function Gallery(props) {
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            {props.postings.map(post => {
                return <Posting key={post.title} {...post}/>
            })}
        </div>
    )
}

export default Gallery