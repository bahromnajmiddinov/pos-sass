import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-xl w-full p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404 — Page not found</h1>
          <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
