import './Clip.scss'

// interface ClipProps {
//   PostedBy: string;
//   Rating: number;
//   Clip: string;
// }

const Clip = () => {

  return (
    <div className="clip-container">
      <video
        className="clip"
        autoPlay
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Clip