interface StatItem {
  icon: string;
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    icon: "🎬",
    value: "200+",
    label: "Movie Nights",
  },
  {
    icon: "🍿",
    value: "100%",
    label: "Fun Guaranteed",
  },
  {
    icon: "⭐",
    value: "5.0",
    label: "Rating",
  },
];

const Stats = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {statsData.map((stat, key) => (
        <div
          key={key}
          className="bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/20"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-white/70">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
