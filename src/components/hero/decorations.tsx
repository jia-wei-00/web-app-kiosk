const Decorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-16 right-1/4 text-4xl animate-pulse">⭐</div>
      <div
        className="absolute bottom-20 left-20 text-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        🌙
      </div>
      <div
        className="absolute top-1/3 right-16 text-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        ✨
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-purple-700 dark:bg-purple-600 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-blue-700 dark:bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-indigo-700 dark:bg-indigo-500 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Decorations;
