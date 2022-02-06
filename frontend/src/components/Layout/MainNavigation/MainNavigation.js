import classes from './MainNavigation.module.css';

import navigation from '../../../constants/navigation';

const MainNavigation = () => {
  const linkNavigations = navigation.map((item, index) => (
    <li key={`${item}-${index}`}>{item}</li>
  ));

  return (
    <header className={classes.header}>
      <nav>
        <ul>{linkNavigations}</ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
