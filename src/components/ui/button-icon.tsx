import { Button } from "@/components/ui/button";

export function ButtonIcon({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      {children}
    </Button>
  );
}
