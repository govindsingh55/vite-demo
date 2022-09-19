import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Astroid() {
  const [data, setData] = useState(null);
  const { astroidId } = useParams();

  useEffect(() => {
    if (astroidId && !data) {
      fetch(`https://api.nasa.gov/neo/rest/v1/neo/${astroidId}?api_key=${'zfPLH0CXQvBdg9TABnaRCU6KldGVHLNgCss6vVuj'}`)
        .then(respose => respose.json())
        .then(data => {
          setData(data)
        })
    }
    console.log('astroid id : ',astroidId)
  }, [])

  return (
    <div>
      {!data && <div>loading...</div>}
      {data && (
        <div>
          <div>
            <p>name:</p> <p>{data.name}</p>
          </div>
          <div>
            <p>nasa_jpl_url:</p> <p>{data.nasa_jpl_url}</p>

          </div>
          <div>
            <p>is_potentially_hazardous_asteroid:</p> <p>{JSON.stringify(data.is_potentially_hazardous_asteroid)}</p>
          </div>
        </div>
      )}
    </div>
  )
}