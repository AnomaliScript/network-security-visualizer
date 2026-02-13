import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const pages = [
  { path: "", label: "Sandbox" },
  { path: "about", label: "About" },
  { path: "how-to-use", label: "How to Use" },
  { path: "settings", label: "Settings" },
];

function Links({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <ul className="list-group">
      {pages.map((page) => (
        <NavLink
          key={page.path}
          to={`/${page.path}`}
          className="list-group-item list-group-item-action"
          onClick={() => onNavigate?.(`/${page.path}`)}
        >
          {page.label}
        </NavLink>
      ))}
    </ul>
  );
}

const Sidebar = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <div className="sidebar">
      <span className="sidebar-arrow">&#9654;</span>
      <div className="sidebar-content">
        <h1>NetworKitchen</h1>
        <Links onNavigate={onNavigate} />
      </div>
    </div>
  )
}

export default Sidebar;