// Please implement your solution in this file
import useFetch from "./useFetch";

export const RocketsList = ({ filterParams }) => {
  const { filteredData, status } = useFetch(filterParams);

  return (
    <>
      {status === "fetching" && <div className="loading">Loading...</div>}
      <div>🚀 React & Rockets 🚀</div>
      {status === "fetched" && (
        <>
          {filteredData.length === 0 ? (
            <div>No data</div>
          ) : (
            filteredData.map((value, index) => (
              <div key={value.mission_name + index}>
                {`#${value.flight_number} ${value.mission_name} (${value.payloads_count})`}
              </div>
            ))
          )}
        </>
      )}
    </>
  );
};
