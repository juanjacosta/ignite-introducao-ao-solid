import { app } from ".";

const port = 3333;
app.listen(port, () =>
  console.log(`Server running on http: http://localhost:${port}`)
);
