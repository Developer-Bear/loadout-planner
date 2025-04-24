import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/loadout-planner/", // 👈 Add this line
	plugins: [react()],
});
