"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const ProgressPage = () => {
  const [valueNew, setValueNew] = useState(40);
  const [valueNum, setValueNum] = useState(0);
  const increment = () => setValueNum((prev) => Math.min(prev + 10, 100));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(Math.max(Number(e.target.value), 0), 100);
    setValueNum(newValue);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-4 border border-gray-700 p-4 rounded-xl bg-gray-700 shadow-lg">
        {/* proggres bar start */}
        <div className="flex flex-wrap gap-4 p-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Default Progress Bar</h3>
            <Progress
              value={valueNew}
              size="md"
              color="primary"
              type="default"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Striped Progress Bar</h3>
            <Progress
              value={valueNew}
              size="md"
              color="secondary"
              type="striped"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Animated Progress Bar</h3>
            <Progress
              value={valueNew}
              size="lg"
              color="tertiary"
              type="animated"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Small Primary Progress Bar</h3>
            <Progress
              value={valueNew}
              size="sm"
              color="primary"
              type="default"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Large Striped Secondary Progress Bar
            </h3>
            <Progress
              value={valueNew}
              size="lg"
              color="secondary"
              type="striped"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">
              Medium Animated Tertiary Progress Bar
            </h3>
            <Progress
              value={valueNew}
              size="md"
              color="tertiary"
              type="animated"
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Basic Progress Bar</h3>
          <Progress value={50} className="bg-gray-200" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Loading Progress</h3>
          <Progress value={75} className="bg-gray-300" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Full Progress</h3>
          <Progress value={100} className="bg-gray-400" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Customized Progress Bar</h3>
          <Progress
            value={60}
            className="bg-blue-200"
            style={{ backgroundColor: "lightgray" }}
          >
            <div
              className="h-full flex-1 bg-green-500"
              style={{ transform: `translateX(-${100 - (60 || 0)}%)` }}
            />
          </Progress>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Dynamic Progress Bar</h3>
          <Progress value={valueNum} className="bg-gray-100" />
          <div className="mt-4">
            <button
              onClick={increment}
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Increase Progress
            </button>
            <input
              type="number"
              value={valueNum}
              onChange={handleChange}
              min="0"
              max="100"
              className="px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Progress with Label</h3>
          <div className="relative">
            <Progress value={40} className="bg-gray-200" />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-black">
              40%
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Default Progress Bar</h3>
          <Progress value={valueNew} size="md" color="primary" type="default" />
        </div>{" "}
        <div className="p-4">
          <h3 className="text-lg font-medium">Striped Progress Bar</h3>
          <Progress
            value={valueNew}
            size="md"
            color="secondary"
            type="striped"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Animated Progress Bar</h3>
          <Progress
            value={valueNew}
            size="lg"
            color="tertiary"
            type="animated"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">Small Primary Progress Bar</h3>
          <Progress value={valueNew} size="sm" color="primary" type="default" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">
            Large Striped Secondary Progress Bar
          </h3>
          <Progress
            value={valueNew}
            size="lg"
            color="secondary"
            type="striped"
          />
        </div>{" "}
        <div className="p-4">
          <h3 className="text-lg font-medium">
            Medium Animated Tertiary Progress Bar
          </h3>
          <Progress
            value={valueNew}
            size="md"
            color="tertiary"
            type="animated"
          />
        </div>
        {/* proggres bar end */}
      </div>
    </div>
  );
};

export default ProgressPage;
