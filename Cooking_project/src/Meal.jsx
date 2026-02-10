import React, { useEffect, useState } from "react";
import "./meal.css";

function Meal() {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      setMealData(data.meals || []);
    };

    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();

    setMealData(data.meals || []);
    setInputData("");
  };

  return (
    <>
      <div className="area-container">
        <button onClick={() => setArea("Indian")} className="area-btn">
          Indian
        </button>

        <button onClick={() => setArea("Canadian")} className="area-btn">
          Canadian
        </button>

        <button onClick={() => setArea("American")} className="area-btn">
          American
        </button>

        <button onClick={() => setArea("Thai")} className="area-btn">
          Thai
        </button>

        <button onClick={() => setArea("British")} className="area-btn">
          British
        </button>

        <button onClick={() => setArea("Russian")} className="area-btn">
          Russian
        </button>
      </div>

      <form onSubmit={submitHandler} className="search-container">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Search for a delicious meal..."
        />
      </form>

      <div className="meal-grid">
        {mealData.map((data) => (
          <div key={data.idMeal} className="meal-card">
            <div className="img-container">
              <img
                src={data.strMealThumb}
                alt={data.strMeal}
              />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default Meal;
