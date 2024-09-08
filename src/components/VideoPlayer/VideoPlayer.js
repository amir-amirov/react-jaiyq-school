import './VideoPlayer.css'
import video from '../../assets/school-video.mp4'

const VideoPlayer = ({st, setSt}) => {

    const hideVideo = () => {
        setSt(false)
    }

  return (
    <div className={`video-player ${st ? "" : "hide"}`} onClick={hideVideo}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
