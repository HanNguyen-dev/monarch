import { PropsWithChildren } from "react";
import SideNav from "../ui/market/sidenav";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto p-8">{children}</div>
    </div>
  );
}
