import { useState } from 'react'
import './VideoBackground.scss'

const VideoBackground = () => {
  const [muted, setMuted] = useState(true)

  return (
    <div className="video-container"         onClick={() => setMuted(prev => !prev)}>
      <video
        className="video-background"
        autoPlay
        muted={muted}
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <button
        className="mute-toggle"
        onClick={() => setMuted(prev => !prev)}
      >
        {muted ? '🔇 Unmute' : '🔊 Mute'}
      </button>
    </div>
  )
}

export default VideoBackground