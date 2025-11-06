import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="reciepe-radar-logo" className="w-20" />
      <p className="text-4xl font-semibold text-white drop-shadow-lg">Recipe Radar</p>
    </div>
  );
}
