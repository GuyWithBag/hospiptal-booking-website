import HomePageDropDown from "@/components/home-page-dropdown";
import { Box } from "@radix-ui/themes";

// TODO: FUCK ISAJDIOSJODISAIHDUAISHDISADIHIUH LEARN GRID!!!

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Box className=" h-[100%] w-[100%]">
        <Box className=" rounded-full bg-[var(--accent-9)] h-[120%] w-[1000px] ml-[60%] z-[-1]" />
        <img src="female_doctor.png" className="top-20 ml-[60%] object-scale-down h-[100%]" />
      </Box>
      <Box className="absolute">
        <HomePageDropDown />
      </Box>
    </main>
  );
}
