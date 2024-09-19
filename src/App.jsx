import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Images from './Images'
import Check from './Check'
import Timer from './Timer'
import Employee from './Employee'
import CountDown from './components/CountDown'
import Overlay from './components/overlay/Overlay'
import Undoable from './components/undoable_counter/Undoable'
import Shoping from './components/Shoping/Shoping'


function App() {
  const [albums , setAlbums] = useState([])
  const [albumId , setAlbumId] = useState()

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();

        // Group photos by album ID efficiently
        const groupedAlbums = data.reduce((acc, photo) => {
          const albumId = photo.albumId;
          acc[albumId] = acc[albumId] || [];
          acc[albumId].push(photo);
          return acc;
        }, {});

        setAlbums(Object.entries(groupedAlbums).map(([albumId, photos]) => ({
          id: albumId,
          name: `Album ${albumId}`, // You can customize the album name here
          photos,
        })));
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleClick = (albumId) => {
    setAlbumId(albumId);
  }

  console.log(albums)
  return (
   <>
   {/* <div>
   <h2>Albums</h2>
        <div  style={{display: "flex" , flexWrap: "wrap" , alignItems: "center" , justifyContent: "space-around" , gap: "20px"}}>
        {albums.map((album) => (
          // <li key={album.id} onClick={() => handleClick(album.id)}>
          //   {album.name}
          // </li>
          <div style={{ width : "200px" , height: "200px" , display: "flex" , alignItems:"center" , justifyContent:"center" , backgroundColor: "red" }} onClick={() => handleClick(album.id)}>
            {album.name}
          </div>
        ))}
        </div>



      {albumId && (
        <div className="album-details">
          <Images albums={albums} albumId={albumId} />
        </div>
      )}
   </div> */}
   {/* <Timer/>  */}

   {/* <Employee/> */}
   {/* <CountDown/> */}
   {/* <Check/> */}
   {/* <Overlay/> */}
    {/* <Undoable/> */}
    <Shoping/>
   </>
  )
}

export default App
