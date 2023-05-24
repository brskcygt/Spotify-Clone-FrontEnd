import axios from 'axios';
import { useDispatch } from 'react-redux';
import MainContent from './components/MainSection/MainContent';
import Player from './components/Player/Player';
import Sidebar from './components/Sidebar/Sidebar';
import { getAllPlaylists, getRecentlyPlayed, getRecommended } from './redux/actions/playlists';

function App() {
  const dispatch = useDispatch();

  const getPlaylists = async () => {
    const data = await axios.get("https://proxy.cors.sh/http://mdpgroup.tech/intern-case/spotify.json", {
      withCredentials: false,
    })
      .then(response => response.data)
      .catch(err => console.log(err.message))
    dispatch(getAllPlaylists(data));
    dispatch(getRecommended(data));
    dispatch(getRecentlyPlayed(data));
  }

  getPlaylists();

  return (
    <>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </>
  )
}

export default App;