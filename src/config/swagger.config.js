const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
function swaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "login For Project",
        description: "project and login for GitHub",
        version: "1,0,0",
      },
    },
    apis: [process.cwd + "/src/modules/**/*.swagger.js"],
  });
  const swagger = swaggerUI.setup(swaggerDocument, {});
  app.use("/swagger", swaggerUI.serve, swagger);
}

module.exports = swaggerConfig;
