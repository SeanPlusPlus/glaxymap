import { useEffect } from "react"
import "zoomist/css"
import Zoomist from "zoomist"

export default function Main() {
  useEffect(() => {
    new Zoomist(".zoomist-container", {
      // Optional parameters
      maxScale: 4,
      bounds: true,
      // if you need slider
      slider: true,
      // if you need zoomer
      zoomer: true,
    })
  }, [])
  return (
    <>
      <main>
        <div className="zoomist-container">
          <div className="zoomist-wrapper">
            <div className="zoomist-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Milky_way_map.png" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
