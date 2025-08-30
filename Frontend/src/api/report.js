import axios from "axios";

async function fetchReports() {
  try {
    const response = await axios.get("http://localhost:3000/api/reports/Alish");
    console.log("Response Data:", response.data.data);
    
    return response.data.data;
  } catch (err) {
    console.error("Error fetching reports:", err.message);
  }
}
export default fetchReports;
