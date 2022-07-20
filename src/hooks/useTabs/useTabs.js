import { useState } from "react";

export const useTabs = (labels = []) => {
  const [defaultTab] = labels;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const getTabs = () =>
    labels.map((label) => ({ label, onClick: () => setActiveTab(label) }));
  return { activeTab, tabs: getTabs() };
};
