import { Sidebar } from "./sidebar";
import { TopNavbar } from "./top-navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 bg-primary-foreground">
      <div className="col-span-2 shadow h-screen bg-white shadow-slate-200">
        <Sidebar />
      </div>
      <div className="col-span-10 px-6">
        <div>
          <TopNavbar />
        </div>

        {children}
      </div>
    </div>
  );
};
