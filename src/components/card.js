const Card = ({name, email, id}) => {
    return (
        <div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw1 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}test`}/>
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;