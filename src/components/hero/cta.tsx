import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        size="lg"
        className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-500 hover:to-blue-600 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 dark:from-purple-500 dark:to-blue-600"
      >
        🎬 Plan Your Party
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="text-lg px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 dark:border-white/40"
      >
        View Our Setups
      </Button>
    </div>
  );
};

export default Cta;
