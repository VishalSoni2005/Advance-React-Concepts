import { Link } from 'react-router';

interface NabBarProps {
  className: string;
}

export default function NabBar({ className }: NabBarProps) {
  return (
    <div className={className}>
      <header className="p-4 bg-gray-800 dark:bg-gray-600 text-gray-100 dark:text-gray-200">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to={'/home'}>Home</Link>
          <Link to={'/Dashboard'}>Dashboard</Link>
          <Link to={'/love'}>Love</Link>
          <Link to={'/fun'}>Fun</Link>
          <Link to={'/gym'}>Gyn</Link>
          <Link to={'/history'}>History</Link>
          <Link to={'/civics'}>Civics</Link>
        </div>
      </header>
    </div>
  );
}
