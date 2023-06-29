import { Search } from "@/components/search";
import { Card } from "@/components/ui/card";
import { UserNav } from "@/components/user-nav";
import { ButtonIcon } from "@/components/ui/button-icon";
import { Bell, Moon, SquareSlash } from "lucide-react";
import { DateAndTime } from "@/components/ui/date-time";

export const TopNavbar = () => {
  return (
    <Card className="flex h-16 items-center px-4 container mt-4">
      <Search />
      <div className="ml-auto flex items-center space-x-2">
        <DateAndTime className="mr-1" />

        <div className="space-x-1">
          <ButtonIcon>
            <Moon className="h-6 w-6" />
          </ButtonIcon>
          <ButtonIcon>
            <Bell className="h-6 w-6" />
          </ButtonIcon>
          <ButtonIcon>
            <SquareSlash className="h-6 w-6" />
          </ButtonIcon>
        </div>

        <UserNav />
      </div>
    </Card>
  );
};
