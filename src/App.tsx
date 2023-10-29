import './App.scss';
import Layout from './components/Layout/Layout';
import GalleryList from './components/Gallery/GalleryList';
import GalleryListItem from './components/Gallery/GalleryListItem';
import useUiTextStore from './stores/ui-text-store';
import { useEffect } from 'react';

function App() {
  const { json, load } = useUiTextStore();

  useEffect(() => {
    load();
  }, [load]);

  const galleryListItem = json?.['works']?.map((data, index) => {
    return (
      <GalleryListItem
        key={index}
        title={data.title}
        description={data.description}
        image={data.image}
      />
    );
  });

  return (
    <Layout>
      <GalleryList>
        {galleryListItem}
      </GalleryList>
    </Layout>
  );
}

export default App;