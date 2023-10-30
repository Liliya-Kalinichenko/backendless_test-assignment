import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import tabsData from './tabs.json';
import TabPage from './Components/TabPage';
import NavBar from './Components/NavBar/NavBar';
import PageNotFound from './Components/PageNotFound';

const App = () => {
  const tabs = [...tabsData].sort((tabA, tabB) => tabA.order - tabB.order);

  return (
    <Router>
      <div className="App">
        <NavBar tabs={tabs}/>

        <div className="App__content">
          <Routes>
            {tabs.map((tab) => (
              <Route key={tab.id} path={`/${tab.id}`} element={<TabPage tab={tab} />} />
            ))}

            <Route path="/" element={<Navigate to={`/${tabs[0].id}`} />} />
            
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
