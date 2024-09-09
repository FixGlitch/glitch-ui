"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const tabData = [
  {
    id: "description",
    label: "Description",
    content: "This is the description content.",
  },
  {
    id: "features",
    label: "Features",
    content: "This is the features content.",
  },
  { id: "pricing", label: "Pricing", content: "This is the pricing content." },
];

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-4 border border-gray-700 p-4 rounded-xl bg-gray-700 shadow-lg">
        {/* tabs start */}
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p>This is the content of Tab 1.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p>This is the content of Tab 2.</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p>This is the content of Tab 3.</p>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="overview" className="max-w-md mx-auto">
          <TabsList className="mb-4 border-b border-gray-200">
            <TabsTrigger value="overview" className="text-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="text-blue-600">
              Details
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-blue-600">
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p>This is the overview content.</p>
          </TabsContent>
          <TabsContent value="details" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Details</h3>
            <p>This is the details content.</p>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <p>This is the reviews content.</p>
          </TabsContent>
        </Tabs>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            {tabData.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <p>{tab.content}</p>
            </TabsContent>
          ))}
        </Tabs>
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-4">
              <img src="/photo1.jpg" alt="Photo 1" />
              <img src="/photo2.jpg" alt="Photo 2" />
              <img src="/photo3.jpg" alt="Photo 3" />
            </div>
          </TabsContent>
          <TabsContent value="videos">
            <div className="space-y-4">
              <video controls src="/video1.mp4"></video>
              <video controls src="/video2.mp4"></video>
            </div>
          </TabsContent>
          <TabsContent value="documents">
            <ul className="list-disc pl-4">
              <li>
                <a href="/doc1.pdf" download>
                  Document 1
                </a>
              </li>
              <li>
                <a href="/doc2.pdf" download>
                  Document 2
                </a>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="login" className="max-w-md mx-auto">
          <TabsList className="mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Login
              </button>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input type="text" id="name" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md"
              >
                Register
              </button>
            </form>
          </TabsContent>
        </Tabs>
        {/* tabs start */}
      </div>
    </div>
  );
};
export default TabsPage;
