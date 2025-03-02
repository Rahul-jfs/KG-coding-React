import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
