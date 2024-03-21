import MediaCard from './components/media-card/MediaCard';
import Popular from './components/popular/Popular';
import styles  from './page.module.scss';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.main}>
       <Popular />
       <MediaCard id={10} />
      </div>
    </main>
  );
}
