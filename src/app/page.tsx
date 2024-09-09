"use client";
import HomePage from "@/components/HomePage";

const Home = () => {
  const renderContent = () => {
    return (
      <div>
        <HomePage />
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default Home;
