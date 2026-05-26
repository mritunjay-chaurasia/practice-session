import { useState, useRef } from "react";

function InfiniteScroller() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );

  const scrollRef = useRef(null);

  const handleScroll = () => {
    const container = scrollRef.current;

    const bottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 20;

    if (bottom) {
      loadMoreItems();
    }
  };

  const loadMoreItems = () => {
    const newItems = Array.from(
      { length: 10 },
      (_, i) => `Item ${items.length + i + 1}`
    );

    setItems((prev) => [...prev, ...newItems]);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        height: "600px",
        overflowY: "auto",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroller;