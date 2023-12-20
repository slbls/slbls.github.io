import { type PageProps } from "$fresh/server.ts";

const App = ({ Component }: PageProps) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
