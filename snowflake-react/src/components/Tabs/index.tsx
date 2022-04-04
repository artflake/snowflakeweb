import React, { ReactChild, ReactChildren, useState } from "react";
import "./Tabs.css";

interface IProps {
  children: ReactChild[] | ReactChildren[];
}
interface ITab {
  label: string;
  children: string;
}

const Tabs: React.FC<IProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="my-5 tabs">
      <div>
        {children.map((child, key) => {
          const { label } = child.props as ITab;

          return (
            <strong
              key={key}
              className={`tab ${activeTab === key + 1 ? "active" : ""}`}
              onClick={() => setActiveTab(key + 1)}
            >
              {label}
            </strong>
          );
        })}
      </div>
      <div className="py-5">
        {children.map((child, key) => {
            if(key === activeTab) return null;
            return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;