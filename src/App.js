import React, {useState, useEffect} from 'react';
import CardList from './components/CardList'
import dummyData from "./data";
import SkeletonCard from "./components/SkeletonCard";


const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  /*
  return (
    <div className="App">
      {
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
  */

 return (
  <div className="App">
    {loading && <SkeletonCard />}
    {!loading &&
      videos.map((list, index) => {
        return (
          <section key={index}>
            <h2 className="section-title">{list.section}</h2>
            <CardList list={list} />
            <hr />
          </section>
        );
      })}
  </div>
);

};
export default App;
