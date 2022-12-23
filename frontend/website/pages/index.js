import { MetaData } from '../components/MetaData';
import { PageContent } from '../components/pagecontent';
import { PageFooter } from '../components/Footer';
import { Menubar } from '../components/Menubar';

function HomePage() {
    return (
        <>
            <MetaData page='Home' />
            <Menubar />
            <PageContent />
            <PageFooter />
        </>
    );
}

export default HomePage;
