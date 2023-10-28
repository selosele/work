import './App.scss';
import Layout from './components/Layout/Layout';
import GalleryList from './components/Gallery/GalleryList';
import GalleryListItem from './components/Gallery/GalleryListItem';

function App() {
  return (
    <Layout>
      <GalleryList>
        <GalleryListItem />
      </GalleryList>
    </Layout>
  );
}

export default App;