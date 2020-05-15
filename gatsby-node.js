const fetch = require("node-fetch");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}, {
  id
}) => {
  const {
    createNode
  } = actions; // * Posts

  const postsQuery = await fetch(`https://api.dropinblog.com/v1/json/?b=${id}&includecontent=1`);
  const postData = await postsQuery.json();
  postData.data.posts.forEach(post => {
    const nodeMetadata = {
      id: createNodeId(`post-${post.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "DIB_POSTS",
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post)
      }
    };
    const node = Object.assign({}, post, nodeMetadata);
    createNode(node);
  });
  const authorsQuery = await fetch(`https://api.dropinblog.com/v1/json/authors/?b=${id}`);
  const authorsData = await authorsQuery.json();
  authorsData.data.forEach(author => {
    const nodeMetadata = {
      id: createNodeId(`author-${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "DIB_AUTHORS",
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author)
      }
    };
    const node = Object.assign({}, author, nodeMetadata);
    createNode(node);
  });
  const categoriesQuery = await fetch(`https://api.dropinblog.com/v1/json/categories/?b=${id}`);
  const categoriesData = await categoriesQuery.json();
  categoriesData.data.forEach(category => {
    const nodeMetadata = {
      id: createNodeId(`category-${category.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "DIB_CATEGORIES",
        content: JSON.stringify(category),
        contentDigest: createContentDigest(category)
      }
    };
    const node = Object.assign({}, category, nodeMetadata);
    createNode(node);
  });
  return;
};