import React, { useState, useEffect } from 'react';
import './App.css';
import { houseData, typeRepairs } from './Data';
import Points from './Components/Points/Points';
import Building from './Components/Building/Building';
import { func } from 'prop-types';

function App() {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [hasError, setErrors] = useState(false);
  const [types, setTypes] = useState([]);
  const [objectCount, setObjectCount] = useState(0);
  const [currentId, setCurrentId] = useState(1);

  // let types = [];

  async function fetchData() {
    const res = await fetch('https://sr-practice.herokuapp.com/api');
    res
      .json()
      .then((res) => {
        setData(res);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setObjectCount(data.length);
  });

  const titleGroupButtons = data.map((data, index) => {
    return (
      <button
        className={
          currentId === index
            ? 'border bg-gray-800 text-white px-5 py-2 hover:border-blue-700 mt-2'
            : 'border bg-gray-300 text-gray-900 px-5 py-2 hover:border-blue-700 mt-2'
        }
        onClick={() => {
          setCurrentId(index);
          setIsActive(!isActive);
        }}
      >
        {data.title}
      </button>
    );
  });

  const buildingData = data.map((data, index) => {
    if (index === currentId) {
      return <Building building={data} key={currentId} index={currentId} />;
    }
  });

  return (
    <div>
      {console.log(types)}
      <div className="container mx-auto px-2 ">
        <div className="flex flex-wrap">
          <div className="xl:w-1/4">
            <h1 className=" text-5xl font-bold text-blue-900">
              Галерия проектов
            </h1>
            <p className="py-6 text-gray-700">
              Сумма экономии рассчитана в сравнении с суммой цен этого же
              перечня товаров по отдельности
            </p>
            <button className=" w-full xl:w-64 bg-transparent text-red-700 font-semibold py-2 px-4 border-2 border-red-700 hover:border-transparent hover:bg-red-700 hover:text-white">
              Выбрать дизайн
            </button>
          </div>
          <div className="xl:w-3/4 ">
            <div className="mx-auto">
              <div
                style={{ width: '405px' }}
                className=" text-justify mx-auto mt-40"
              >
                <div className="absolute invisible xl:visible lg:visible">
                  <Points />
                </div>
                <h2 className="text-2xl xl:pl-16 lg:pl-16 text-blue-900 xl:pt-12 lg:pt-12">
                  Мы успешно завершили уже{' '}
                  <span className="text-red-600">более 450 ремонтов </span>
                  ремонтов
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pt-24">
          <div className="xl:w-1/4">
            <div className="inline-block relative w-full">
              <label
                className="pt-10 font-bold text-blue-900"
                htmlFor="typeRepairs"
              >
                Тип ремонта
              </label>
              <select
                className="w-full border border-gray-400 block appearance-none  text-gray-700 py-3 px-4 pr-8 mt-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="typeRepairs"
                ame="typeRepairs"
              >
                <option>Smart Comfort</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-10 text-red-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-500 py-8">
                Найдено {objectCount} объекта:
              </p>
              {titleGroupButtons}
            </div>
          </div>

          <div className="xl:w-3/4 xl:pl-8 lg:pl-8 ">{buildingData}</div>
        </div>
      </div>
      <div
        className="invisible xl:visible fixed bottom-0 right-0 w-64"
        style={{ height: '25rem', backgroundColor: '#dfeffe', zIndex: -99 }}
      />
    </div>
  );
}

export default App;
