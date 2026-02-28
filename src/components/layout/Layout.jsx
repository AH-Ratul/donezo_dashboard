import Sidebar from "./Sidebar";
import Header from "./Header";
import SessionWarning from "../auth/SessionWarning";

function Layout({ children }) {
  return (
    <div className="flex gap-1 h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 ml-66.25 flex flex-col h-scree overflow-y-auto">
        <SessionWarning />
        <Header />
        <main className="flex-1 p-6  bg-gray-50 rounded-3xl m-2">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
