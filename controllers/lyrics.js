


async function show(req, res){
  const search = req.params.search
  const url = `https://spotify-lyric-api-984e7b4face0.herokuapp.com/?url=https://open.spotify.com/track/${search}?autoplay=true{}`
  try {
    const lyricsData = await fetch(url)
    const lyrics = await lyricsData.json()
    return res.json(lyrics)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }

}


export { show }



