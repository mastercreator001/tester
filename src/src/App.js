import MainTitle from './Components/MainTitle/MainTitle';
import Flipper from './Components/Flipper';
import HCCContainer from './Components/HCCContainer';
import MdiQuickLink1 from './Components/MdiQuickLink1';
import MdiQuickLink2 from './Components/MdiQuickLink2';
import MdiQuickLink3 from './Components/MdiQuickLink3';
import MdiQuickLink4 from './Components/MdiQuickLink4';
function FullPage () {
    return (
        <div className='App'>
            <MainTitle />
            <Flipper />
            <HCCContainer />
            <MdiQuickLink1 />
            <MdiQuickLink2 />
            <MdiQuickLink3 />
            <MdiQuickLink4 />
        </div>
    )
}

export default function App() {
    return <FullPage />;
}