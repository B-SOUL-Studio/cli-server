'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/project/tpl', controller.project.getTemplate);
  // router.resources('components', '/api/v1/components', controller.v1.components);
  // router.resources('componentSite', '/api/v1/componentSite', controller.v1.componentSite);
};