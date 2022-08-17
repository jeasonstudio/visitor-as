const assemblyscriptPath = require.resolve(
  "assemblyscript/dist/assemblyscript"
);
const ascPath = require.resolve("assemblyscript/dist/asc");
const transformerPath = require.resolve("assemblyscript/dist/transform");

const assemblyscript = require(assemblyscriptPath);

module.exports = {
  ...require(ascPath),
  Transform: require(transformerPath).Transform,
  ...assemblyscript,
  ...assemblyscript.util,
};
