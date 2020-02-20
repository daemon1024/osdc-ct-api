const { Query } = require('./Query')
const { post } = require('./Mutation/post')
const { Subscription } = require('./Subscription')
const { Post } = require('./Post')

module.exports = {
  Query,
  Mutation: {
    ...post,
  },
  Subscription,
  Post,
}