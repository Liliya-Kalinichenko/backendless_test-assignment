import classNames from 'classnames';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
}

const NavBar: React.FC<Props> = ({ tabs }) => {
  const getTabClassName = ({ isActive }: { isActive: boolean }) => {
    return classNames('NavBar__item', {
      'is-active': isActive,
    });
  };

  return (
    <nav className="NavBar">
      <div className="NavBar__container">
        {tabs.map(tab => (
          <NavLink 
            to={`${tab.id}`} 
            className={getTabClassName} 
            key={tab.id}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
