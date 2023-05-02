import MaterialIcon from 'material-icons-react';
function MdiQuickLinkBadge () {
    return (
        <a href="/" className='mdiContainerMainTitle'>
             <h1 class="text-white pt-3 mt-n5 me-2" style="display: inline-block; background-color: rgba(3, 3, 3, 0.2); padding: 2px;"> </h1>
            <h1 className="mdiQuickMainTitleText"> Wellington Road <p></p> C Of E Middle School </h1>
        </a>
    )
}

export default function App() {
    return <MdiQuickLinkBadge />;
}