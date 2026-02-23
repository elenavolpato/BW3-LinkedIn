import PostCard from "../components/PostCard";
import "./feed.css";
import RightSideBar from "../components/RightSideBar";
import LeftSidebar from "../components/LeftSideBar";

const Feed = () => {
  return (
    <>
      <div className="feed d-flex">
        <h1>Feed</h1>
        <PostCard
          id={1}
          name="Mario Rossi"
          position="Software Engineer"
          date="1 Gennaio 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <RightSideBar />
      <LeftSidebar />
    </>
  );
};
export default Feed;
