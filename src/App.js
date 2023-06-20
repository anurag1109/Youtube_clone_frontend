import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MiniSidebar from "./components/MiniSidebar";
import Live from "./components/Live";
import WatchLive from "./components/WatchLive";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    //childrens will go inside outlet written in body component
    children: [
      {
        path: "/",
        element: [<MiniSidebar />, <MainContainer />],
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "live",
        element: [<MiniSidebar />, <Live />],
      },
      {
        path: "watchlive",
        element: <WatchLive />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="relative">
        <Head />
        {/* all the router will be shown here accordingly */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
