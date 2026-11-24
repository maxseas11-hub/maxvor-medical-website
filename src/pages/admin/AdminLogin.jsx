import React, { useState } from 'react';
import { ShieldCheck, Lock, User, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { setAdminAuth } from '../../data/adminInitialData';

export default function AdminLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('admin@maxvor.com');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      // Default credentials: admin@maxvor.com / maxvor2026 or admin
      if (password === 'maxvor2026' || password === 'admin' || password === 'maxvor') {
        setAdminAuth(true, remember);
        onLoginSuccess();
      } else {
        setError('Invalid password. Please enter the authorized administrator key (e.g., maxvor2026).');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0A2540] to-slate-950 flex items-center justify-center p-4 sm:p-6 text-slate-100 font-sans">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-6">
          {/* Brand & Title */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/40 text-secondary shadow-inner">
              <ShieldCheck className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                MAXVOR <span className="text-secondary font-light">Admin</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Global Operations & Inquiry Management Portal
              </p>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Admin Account
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="admin@maxvor.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Access Key / Password
                </label>
                <span className="text-[11px] text-slate-400">Default: <code className="text-secondary font-mono">maxvor2026</code></span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="Enter administrator password..."
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
                <input 
                  type="checkbox" 
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded bg-slate-800 border-slate-700 text-secondary focus:ring-secondary"
                />
                <span>Remember session</span>
              </label>
              <a 
                href="/" 
                className="text-secondary hover:underline flex items-center gap-1"
              >
                Return to Website
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 px-4 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-sm shadow-lg shadow-secondary/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Security footnote */}
          <div className="pt-4 border-t border-white/10 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
            <span>Protected Enterprise Session • SSL Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}
