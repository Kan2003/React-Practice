import React from 'react'

const Images = ({albums , albumId}) => {
  return (
    <div>
        <h2>Album Images for {albums.find((a) => a.id === albumId)?.name}</h2>
          <ul className="album-image-list">
            {albums
              .find((album) => album.id === albumId)
              ?.photos.map((photo) => (
                <li key={photo.id} className="album-image-item">
                  <img src={photo.url} alt={photo.title} className="album-image" />
                </li>
              ))}
          </ul>
    </div>
  )
}

export default Images