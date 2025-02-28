import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabButton = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="app-container">
      <SideBar
        selectedTab={selectedTab}
        handleTabButton={handleTabButton}
      ></SideBar>
      <div className="content">
        <Header></Header>
        {selectedTab === "home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
