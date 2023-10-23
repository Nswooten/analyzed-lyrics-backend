import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

async function search(req, res) {
  const search = req.params.search
  const token = req.headers.authorization.replace('Bearer ', '')
  spotifyApi.setAccessToken(token)
  try {
    const data = await spotifyApi.searchTracks(search)
    const organizedData = data.body.tracks.items.map((track) => {
      const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
        if (image.height && smallest.height) {
          if (image.height < smallest.height) return image
        }
        return smallest
      }, track.album.images[0])
      return {
        artist: track.artists[0].name,
        title: track.name,
        uri: track.uri,
        albumUrl: smallestAlbumImage.url,
      }
    })
    res.json(organizedData)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}

export { search }

