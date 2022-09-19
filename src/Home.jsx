import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [atroidId, setAstrodId] = useState('');

  const serchAstroid = async (e) => {
    e.preventDefault();
    if (atroidId !== '') {

      // fetch(`https://api.nasa.gov/neo/rest/v1/neo/${atroidId}?api_key=${'zfPLH0CXQvBdg9TABnaRCU6KldGVHLNgCss6vVuj'}`)
      //   .then(respose => respose.json())
      //   .then(data => {
      //     navigate(`/${data.id}`, {astrodata: data} )
      //   })
      navigate(`/${atroidId}`)
    }
  }

  const serchRandomAstroid = async (e) => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${'zfPLH0CXQvBdg9TABnaRCU6KldGVHLNgCss6vVuj'}`)
      .then(respose => respose.json())
      .then(data =>  navigate(`/${data.id}`, {astrodata: data} ))
  }


  return (
    <div>
      <form onSubmit={serchAstroid}>
        <input type="text" value={atroidId} onChange={(e) => setAstrodId(e.target.value)} />
        <button disabled={atroidId === ''} type="submit">search</button>
      </form>
      <button onClick={serchRandomAstroid}>search random</button>
    </div>
  )
}