import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      <Link to="/">Home / </Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          {index > 0 && ' / '}
          <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{name}</Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
