const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  commit_id: {
    type: String,
    required: true,
  },
  repo_url: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  passed: {
    type: Number,
    required: true,
    default: 0,
  },
  failed: {
    type: Number,
    required: true,
    default: 0,
  },
  stack_trace: {
    type: String, // Could be long, so string is fine
    default: null,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  report_md: {
    type: String, // Markdown content
    default: null,
  },
  report_json: {
    type: mongoose.Schema.Types.Mixed, // Can store JSON object directly
    default: {},
  },
}, { timestamps: true });

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
