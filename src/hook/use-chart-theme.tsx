import { ChartTheme } from "@/store/chart";

const useChartTheme = (theme: ChartTheme) => {
  const themeColorsMap: Record<ChartTheme, Record<number, string>> = {
    default: {
      1: "173 58% 39%",
      2: "12 76% 61%",
      3: "197 37% 24%",
      4: "43 74% 66%",
      5: "27 87% 67%",
    },
    palette: {
      1: "12 76% 61%",
      2: "173 58% 39%",
      3: "197 37% 24%",
      4: "43 74% 66%",
      5: "27 87% 67%",
    },
    shappire: {
      1: "221.2 83.2% 53.3%",
      2: "212 95% 68%",
      3: "216 92% 60%",
      4: "210 98% 78%",
      5: "212 97% 87%",
    },
    ruby: {
      1: "347 77% 50%",
      2: "352 83% 91%",
      3: "350 80% 72%",
      4: "351 83% 82%",
      5: "349 77% 62%",
    },
    emerald: {
      1: "139 65% 20%",
      2: "140 74% 44%",
      3: "142 88% 28%",
      4: "137 55% 15%",
      5: "141 40% 9%",
    },
    daylight: {
      1: "25 34% 28%",
      2: "26 36% 34%",
      3: "28 40% 40%",
      4: "31 41% 48%",
      5: "35 43% 53%",
    },
  };

  const themeBackgroundColorsMap: Record<ChartTheme, string> = {
    default: "hsl(0 0% 100%)",
    palette: "hsl(0 0% 100%)",
    shappire: "hsl(0 0% 100%)",
    ruby: "hsl(0 0% 100%)",
    emerald: "hsl(0 0% 100%)",
    daylight: "hsl(36 46% 82%)",
  };

  return {
    colors: themeColorsMap[theme],
    backgroundColor: themeBackgroundColorsMap[theme],
  };
};

export default useChartTheme;
