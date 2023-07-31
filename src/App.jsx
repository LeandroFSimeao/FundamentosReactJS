import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leandro Simeão"
            content="Lorem Ipsum dolor sit amet consectur adispiscing elit."
          />
          <Post
            author="Paulo Muzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
     </div>
  )
}
