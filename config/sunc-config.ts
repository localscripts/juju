export const suncConfig = {
  // Widget settings
  widget: {
    scrapId: "WGHMg2g0Eemw56r2",
    key: "8TJfLcbRVBRFIvMy9xBHnFLPrWpsfRbd",
  },

  // Default data (shown before widget loads)
  defaults: {
    passed: 85,
    total: 85,
    executor: "Potassium",
    version: "v1.8.7",
    timeTaken: 35.99,
  },

  // Text content
  content: {
    title: {
      percentage: true, // Show percentage from data
      suffix: "sUNC",
      subtitle: "Compatibility",
    },
    description:
      "Juju passes all {total} sUNC tests with flying colors. Our executor is built to handle any script you throw at it.",
    stats: {
      testsPassed: "{passed}/{total} Tests Passed",
      fastExecution: "Fast Execution",
      undetected: "Undetected",
      testTime: "~{timeTaken}s Test Time",
    },
    poweredBy: "Powered by {executor} {version}",
  },

  // Widget theme colors
  theme: {
    dark: "#1c1c22",
    light: "#242429",
    lighter: "#2e2e35",
    sunc: "#00d4d4",
    suncLighter: "#33e0e0",
    grey: "#71717a",
    lightText: "#e4e4e7",
    success: "#00d4d4",
    failure: "#ef4444",
  },
}
