// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, addSchemaTypes, schema, getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // Add Tag schema
    addSchemaTypes([
      schema.createObjectType({
        name: 'Tag',
        interfaces: ['Node'],
        fields: {
          id: 'ID!',
          title: 'String'
        }
      })
    ])

    // from Post.tags to build Collection Tag
    const posts = getCollection('Post')
    const set = new Set()
    posts.data().flatMap(x => x.tags).forEach(tag => set.add(tag))

    const tags = addCollection('Tag')
    set.forEach(tag => tags.addNode({ title: tag }))
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allTag {
        edges{
          node{
            id,
            title
          }
        }
      }
    }`)

    data.allTag.edges.forEach(({ node }) => {
      createPage({
        path: `/tags/${node.title}`,
        component: './src/pages/Tag.vue',
        context: {
          id: node.id,
          title: node.title
        }
      })
    })
  })
}
