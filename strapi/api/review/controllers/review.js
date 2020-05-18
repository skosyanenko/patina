const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async comment(ctx) {
    ctx.request.body.authorInfo = {
      username: ctx.state.user.username,
      avatar: ctx.state.user.avatar,
      userId: ctx.state.user.id
    };
    ctx.request.body.review = ctx.params.id;
    const entity = await strapi.services.comment.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
  async like(ctx) {
    ctx.request.body.user = ctx.state.user.id;
    ctx.request.body.review = ctx.params.id;
    const entity = await strapi.services.like.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.like });
  },
};
