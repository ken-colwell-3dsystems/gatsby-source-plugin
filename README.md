## gatsby-source-dropinblog

A ridiculously simple source plugin for the [DropInBlog](https://dropinblog.com/) CMS.

![DropInBlog Logo](https://raw.githubusercontent.com/DropInBlog/gatsby-source-plugin/master/dropInBlog-logo.png)

### Install

```
yarn add gatsby-source-dropinblog
```

## Add your ID

In your `gatsby-config.js` file all you need to do is add the plugin with the id option set to your account's id.

```js
{
    plugins: [
    {
        resolve: "gatsby-source-dropinblog",
        options: {
          id: "<YOUR_UNIQUE_ID>",
          limit: "10",
        }
    },
  ],
},
```

If you don't know your id log into your account at [DropInBlog](https://dropinblog.com/login/), go to the **Code & Layout** page, and grab the id from the first snippet.

![DropInBlog Snippet](https://raw.githubusercontent.com/DropInBlog/gatsby-source-plugin/master/dropInBlog-snippet.png)

## Why Bother?

The benefits of using this plugin over just using our JSON api with [gatsby-source-custom-api](https://www.gatsbyjs.org/packages/gatsby-source-custom-api/?=source) is that we need to fetch data from three endpoints; our posts, authors, and categories.

Even when you get those endpoint there's a strange scope problem, `gatsby-source-custom-api` can return all of that data properly but it's all inside of an array called `data`. Since the data is put inside of a single node with an array of `data` you're able to access everything fine but are unable to use any of the goodies of Gatsby like `filter`.

`gatsby-source-dropinblog` solves this by doing the grunt work of handling all three requests for you and generating the nodes in the proper scope so you can use Gatsby to its full potential.

❤️ If this plugin is helpful for you, consider giving it a star it on [GitHub](https://github.com/DropInBlog/gatsby-source-plugin).
