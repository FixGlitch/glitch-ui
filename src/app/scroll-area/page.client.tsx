"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ScrollAreaPage = () => {
  const items = Array.from({ length: 10 }, (_, index) => index);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-4 border border-gray-700 p-4 rounded-xl bg-gray-700 shadow-lg">
        {/* scrooll area start */}
        <div className="h-60 w-60">
          <ScrollArea>
            <div className="h-[200%] w-full bg-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quisquam cum assumenda praesentium minima quidem laudantium
              corrupti, reiciendis ex distinctio architecto eveniet, odit neque
              nulla ad tempora facere. Ipsa, vitae!
            </div>
          </ScrollArea>
        </div>
        <div className="h-60 w-60">
          <ScrollArea>
            <div className="h-[150%] w-[150%] bg-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              dolorum dicta tempora est enim commodi eos optio eveniet. Ipsam
              culpa officiis animi doloremque magni eligendi saepe nobis nemo
              ullam ab! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id et aperiam doloribus repellat excepturi ex? Dolore
              excepturi veritatis nemo cupiditate porro enim maxime tempora,
              facilis dolorum ullam natus magni aliquid!
            </div>
          </ScrollArea>
        </div>
        <div className="h-60 w-60">
          <ScrollArea className="bg-gray-100 p-4">
            <ScrollBar orientation="vertical" className="bg-blue-500" />
            <ScrollBar orientation="horizontal" className="bg-blue-500" />
            <div className="h-[200%] w-[200%] bg-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              dolorum dicta tempora est enim commodi eos optio eveniet. Ipsam
              culpa officiis animi doloremque magni eligendi saepe nobis nemo
              ullam ab! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Id et aperiam doloribus repellat excepturi ex? Dolore
              excepturi veritatis nemo cupiditate porro enim maxime tempora,
              facilis dolorum ullam natus magni aliquid!
            </div>
          </ScrollArea>
        </div>
        <div className="h-auto w-64 bg-gray-800 text-white">
          <ScrollArea className="h-full">
            <div className="p-4">
              <ul>
                {items.map((item) => (
                  <li key={item} className="py-2">
                    Item {item + 1}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>
        <div className="flex space-x-4">
          <div className="h-60 w-60 bg-gray-100">
            <ScrollArea>
              <div className="h-[150%] w-full bg-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dolorum dicta tempora est enim commodi eos optio
                eveniet. Ipsam culpa officiis animi doloremque magni eligendi
                saepe nobis nemo ullam ab! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Id et aperiam doloribus repellat
                excepturi ex? Dolore excepturi veritatis nemo cupiditate porro
                enim maxime tempora, facilis dolorum ullam natus magni aliquid!
              </div>
            </ScrollArea>
          </div>
          <div className="h-60 w-60 bg-gray-100">
            <ScrollArea>
              <div className="w-[150%] h-full bg-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dolorum dicta tempora est enim commodi eos optio
                eveniet. Ipsam culpa officiis animi doloremque magni eligendi
                saepe nobis nemo ullam ab! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Id et aperiam doloribus repellat
                excepturi ex? Dolore excepturi veritatis nemo cupiditate porro
                enim maxime tempora, facilis dolorum ullam natus magni aliquid!
              </div>
            </ScrollArea>
          </div>
        </div>
        {/* scrooll area end */}
      </div>
    </div>
  );
};

export default ScrollAreaPage;
