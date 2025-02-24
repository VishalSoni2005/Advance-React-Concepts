import Particle from '../Components/Particle'
import image from '../../public/Planet.svg'
export default function Dashboard() {
  return (
    <div>
      <Particle />
      <img className="h-44 " src={image} alt="" />
    </div>
  );
}
