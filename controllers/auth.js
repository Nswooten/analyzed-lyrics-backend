import SpotifyWebApi from 'spotify-web-api-node'


async function login (req, res){
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  })

  await spotifyApi.authorizationCodeGrant(code)
  .then(data =>{
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
  .catch((err)=> {
    console.log(err)
    res.sendStatus(400)
  })
}

async function refresh(req, res){
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken, 
  })
  spotifyApi
    .refreshAccessToken()
    .then((data)=> {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      })
      console.log(data.body)
    })
    .catch((err)=>{
      console.log(err)
      res.sendStatus(400)
    }
  )
}



export { login, refresh }