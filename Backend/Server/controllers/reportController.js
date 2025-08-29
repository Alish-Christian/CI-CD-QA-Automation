const Report = require("../models/Reports");

// Save a new report
async function saveReport(req, res) {
  try {
    const reportData = req.body;

    const report = new Report(reportData);
    const savedReport = await report.save();

    return res.status(201).json({
      success: true,
      message: "Report saved successfully",
      data: savedReport
    });
  } catch (err) {
    console.error("Error saving report:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to save report",
      error: err.message
    });
  }
}

// Get reports by username
async function getReportsByUsername(req, res) {
  try {
    const { username } = req.params;

    const reports = await Report.find({ username });

    if (reports.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No reports found for username: ${username}`
      });
    }

    return res.status(200).json({
      success: true,
      data: reports
    });
  } catch (err) {
    console.error("Error fetching reports:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
      error: err.message
    });
  }
}

module.exports = { saveReport, getReportsByUsername };
