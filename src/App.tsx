import React, { useState, useEffect } from "react";
import Greeting from "./Greetings";
import Header from "./Header";
import ItemList from "./ItemList";
import UserForm from "./UserFrom";

interface Post {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  // Task 2: Greeting Toggle
  const [name, setName] = useState("Alice");
  const toggleName = () => setName((prev) => (prev === "Alice" ? "Bob" : "Alice"));

  // Task 3 & 4: News Feed Toggle + API Fetch
  const [showNews, setShowNews] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [start, setStart] = useState(0);
  const limit = 5;

  const fetchPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );
    const data = await res.json();
    setPosts((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchPosts();
  }, [start]);

  const loadMore = () => {
    setStart((prev) => prev + limit);
  };

  return (
    <div>
      <Header />

      {/* Greeting Toggle */}
      <div style={{ padding: "1rem" }}>
        <Greeting name={name} />
        <button onClick={toggleName} style={{ marginBottom: "1rem" }}>
          Toggle Name
        </button>
      </div>
       <UserForm/>
      {/* News Feed Toggle */}
      <div style={{ padding: "1rem" }}>
        <button onClick={() => setShowNews(!showNews)}>
          {showNews ? "Hide News" : "Show News"}
        </button>
      </div>

      {/* News Feed */}
      {showNews && (
        <div style={{ padding: "1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem"
            }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  background: "#f4f4f4",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
                }}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
          <button
            onClick={loadMore}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
