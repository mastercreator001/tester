import MaterialIcon from 'material-icons-react';
function MdiQuickLinkBadge () {
    return (
        <a href="/" className='mdiQuickLinkBadgeContainer'>
             <MaterialIcon icon="domain" color='#7bb92f'/>
            <h5 className="mdiQuickLinkBadgeTitle">The demolition of the school</h5>
            <p className="mdiQuickLinkBadgeText"> Regardless of how you felt about the school the eventual demolition is a sad moment here we take a look into the destruction process.</p>
         </a>
    )
}

export default function App() {
    return <MdiQuickLinkBadge />;
}