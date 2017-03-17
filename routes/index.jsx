import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Main from '../src/javascripts/main'

const router = express.Router();

function renderFullPage(renderedContent) {
  return `
  <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8">
        <title>React Server Side Rendering using Express</title>
        <link rel="stylesheet" type="text/css" href="/stylesheets/style.css" />
    </head>

    <div id="main">${renderedContent}</div>

    <script type="text/javascript" charset="utf-8" src="/javascripts/main.bundle.js"></script>
    </body>
    </html>

  `;
}

router.get('/', function(req, res, next) {
  const renderedContent = ReactDOMServer.renderToString(<Main />);
  const renderedPage = renderFullPage(renderedContent);
  res.status(200).send(renderedPage);
});

module.exports = router;
