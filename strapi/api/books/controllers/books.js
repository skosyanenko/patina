const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async comment(ctx) {
    ctx.request.body.authorInfo = {
      username: ctx.state.user.username,
      avatar: ctx.state.user.avatar,
      userId: ctx.state.user.id
    };
    ctx.request.body.book = ctx.params.id;
    const entity = await strapi.services.comment.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
  async bookmark(ctx) {
    ctx.request.body.user = ctx.state.user.id;
    ctx.request.body.book = ctx.params.id;
    const entity = await strapi.services.bookmark.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.bookmark });
  },
};
