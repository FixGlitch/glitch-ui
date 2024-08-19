"use client";

import {
  Root as Collapsible,
  Trigger as CollapsibleTrigger,
  Content as CollapsibleContent,
} from "@radix-ui/react-collapsible";

const CollapsibleHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="collapsible-header px-4 py-2 bg-gray-200">{children}</div>
);

const CollapsibleTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="collapsible-title font-bold text-lg">{children}</h3>
);

const CollapsibleSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="collapsible-subtitle text-sm text-gray-600">{children}</p>
);

const CollapsibleSeparator = () => (
  <hr className="collapsible-separator my-2 border-t border-gray-300" />
);

const CollapsibleFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="collapsible-footer px-4 py-2 bg-gray-200">{children}</div>
);

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleSubtitle,
  CollapsibleSeparator,
  CollapsibleFooter,
};
