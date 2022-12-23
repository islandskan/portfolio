import { MetaData } from '../components/MetaData';
import { PageContent } from '../components/pagecontent';
function HomePage() {
    return (
        <>
            <MetaData page='Home' />
            <PageContent />
        </>
    );
}

export default HomePage;
