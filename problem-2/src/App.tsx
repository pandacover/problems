import './Styles/globals.css';
import Api from './components/api'
import Loader from './components/loader';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://swapi.dev/api/people/';

  const callApi = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Api(url, setIsLoading).then((res) => setData([...data, res]));
  };

  const deleteData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any
  ) => {
    e.preventDefault();
    setData(data.filter((item) => item.name !== e.target.value));
  };

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <button onClick={(e) => callApi(e)}>Add Record</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <td>
                {item.name}
                <button
                  onClick={(e) => deleteData(e)}
                  value={item.name}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
