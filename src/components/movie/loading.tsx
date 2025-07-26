const Loading = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TRENDING <span className="text-slate-400">MOVIES</span>
          </h2>
          <p className="text-xl text-slate-300 mb-6">
            Discover Today's Most Popular Films
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          <p className="text-slate-300 mt-4">Loading trending movies...</p>
        </div>
      </div>
    </section>
  );
};

export default Loading;
