const config = {
    append_env_to_name: true,
    exec_mode: "fork",
    instances: "1",
    log_date_format: "YYYY-MM-DD HH:mm Z",
  };
  
  module.exports = {
    apps: [{
      ...config,
      name: "lunchbox-nivo-api",
      script: "./src/app.js",
    }],
  };
  