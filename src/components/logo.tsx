import { Icons } from "./icons";

export default function Logo() {
  return (
    <a href="/" className="flex justify-start items-center">
      <Icons.logo className="w-[30px] mr-2" />{" "}
      <span className="comfortaa font-bold text-primary-foreground text-2xl mt-1">
        {import.meta.env.VITE_BRAND_NAME}
      </span>
    </a>
  );
}
