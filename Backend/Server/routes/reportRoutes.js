const express = require("express");
const router = express.Router();
const { saveReport, getReportsByUsername } = require("../controllers/reportController");

// POST /api/reports → save a new report
router.post("/reports", saveReport);

// GET /api/reports/:username → get reports by username
router.get("/reports/:username", getReportsByUsername);

module.exports = router;
