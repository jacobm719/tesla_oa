import "./App.css";

function App() {
  let sales_data = [
    {
      region: "US",
      model: "A",
      sales: 150,
    },
    {
      region: "US",
      model: "B",
      sales: 120,
    },
    {
      region: "US",
      model: "C",
      sales: 350,
    },
    {
      region: "EU",
      model: "A",
      sales: 200,
    },
    {
      region: "EU",
      model: "B",
      sales: 100,
    },
    {
      region: "EU",
      model: "C",
      sales: 250,
    },
    {
      region: "CA",
      model: "A",
      sales: 200,
    },
    {
      region: "CA",
      model: "B",
      sales: 100,
    },
    {
      region: "CA",
      model: "C",
      sales: 230,
    },
    {
      region: "CA",
      model: "D",
      sales: 400,
    },
  ];

  // let region_sum = {};
  // for (let i = 0; i < sales_data.length; i++) {
  //   if (!(sales_data[i].region in region_sum)) {
  //     region_sum[sales_data[i].region] = 0;
  //   }
  //   region_sum[sales_data[i].region] += sales_data[i].sales;
  // }
  let sales_total = [];
  let region_index = {};
  for (let i = 0; i < sales_data.length; i++) {
    if (!(sales_data[i].region in region_index)) {
      sales_total.push({
        region: sales_data[i].region,
        model: "sum",
        sales: sales_data[i].sales,
      });
      region_index[sales_data[i].region] = sales_total.length - 1;
      sales_total.push(sales_data[i]);
    } else {
      sales_total.push(sales_data[i]);
      sales_total[region_index[sales_data[i].region]].sales +=
        sales_data[i].sales;
    }
  }

  return (
    <div className="App">
      <table className="sales_table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Model</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {sales_total.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.region}</td>
                <td>{data.model}</td>
                <td>{data.sales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
