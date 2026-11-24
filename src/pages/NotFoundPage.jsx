import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <p className="section-label">404</p>
        <h1 className="font-serif text-display-lg text-navy-700 mb-4">Page Not Found</h1>
        <p className="text-charcoal/60 max-w-sm mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
