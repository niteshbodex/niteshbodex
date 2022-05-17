const app = require("./src/app");
const _CONFIG_ = require("./src/config/config.json");

app.listen(_CONFIG_.PORT, () => {
  console.log(`✅ 💃Server listening on port ${_CONFIG_.PORT}`);
});
