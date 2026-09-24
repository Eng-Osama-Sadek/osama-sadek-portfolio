import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{base:"#05050A",surface:"#0D0D14",line:"#1E1E2E",cyan:"#00F5FF",ok:"#00FF94"},
fontFamily:{sans:["Inter","system-ui","sans-serif"],mono:["JetBrains Mono","monospace"]}}},plugins:[]} satisfies Config;
