import MainTitleSub from "./MainTitleSub"

function MainTitle () {
    return (
        <div  className='mdiContainerMainTitle'>
            <a href="/">
                <h1 className="mainTitle"> Wellington Road <p></p> C Of E Middle School </h1>
            </a>
            <MainTitleSub />
        </div>
    )
}

export default MainTitle;