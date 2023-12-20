import { type PageProps } from "$fresh/server.ts";

const App = ({ Component }: PageProps) => (
  <html>
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      <title>berenson.dev</title>
      <meta name="description" content="Spencer Berenson's personal website." />
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <Component />
    </body>
  </html>
);

export default App;
