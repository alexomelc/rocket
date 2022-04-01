export const prepareData = ({ year, customerName }) => {
  const uniqueMissionNames = new Set();
  const apiLaunchYear = "launch_year";

  return function (data) {
    const missions = data.reduce((accumulator, key) => {
      const count = key.rocket.second_stage.payloads.length;
      
      key.rocket.second_stage.payloads.forEach((element) => {
        element.customers.find((customer) => {
          if (key[apiLaunchYear] === year.toString() && customer.includes(customerName)) {
            if (uniqueMissionNames.has(key.mission_name)) {
              return accumulator;
            }

            uniqueMissionNames.add(key.mission_name);

            accumulator.push({
              flight_number: key.flight_number,
              mission_name: key.mission_name,
              payloads_count: count,
            });
          }
          return null;
        });
      });

      return accumulator;
    }, []);

    return missions.sort(function (x, y) {
      return (
        y.payloads_count - x.payloads_count || y.flight_number - x.flight_number
      );
    });
  };
};
