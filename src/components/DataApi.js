import React from 'react';

const Datas = ({ datas, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul >
      {datas.map(post => (
        <li key={datas.id} >
          {datas.title}
        </li>
      ))}
    </ul>
  );
};

export default Datas;