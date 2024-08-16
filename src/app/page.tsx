"use client";
import HomePage from "@/components/HomePage";

const Home = () => {
  const renderContent = () => {
    return <HomePage />;
  };

  return <>{renderContent()}</>;
};

export default Home;
