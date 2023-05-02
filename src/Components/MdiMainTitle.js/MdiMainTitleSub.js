import MaterialIcon from 'material-icons-react';
function MdiQuickLinkBadge () {
    return (
        <a href="/" className='mdiMainTitleSubContainer'>
            className ="color=text-white px-5 mt-3" style="font-weight: 700; background-color: rgba(3, 3, 3, 0.2); padding: 2px;"
            <h1 className="mdiMainTitleSub">"Welly Road", And School Is Now In, so welcome back...</h1>
         </a>
    )
}

export default function App() {
    return <MdiQuickLinkBadge />;
}