const Error = () => {
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
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-400 font-semibold">Failed to load movies</p>
            <p className="text-slate-300 text-sm mt-2">
              Please check your API configuration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
