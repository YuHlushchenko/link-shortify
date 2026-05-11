## MVP API Endpoints

| Endpoint            | Method | Description                                                              |
| ------------------- | ------ | ------------------------------------------------------------------------ |
| `/link/createLink`  | POST   | Create a new shortened link. Accepts `originalUrl`; returns `shortSlug`. |
| `/link/getAllLinks` | GET    | Retrieve all links (can be filtered/sorted client-side if needed).       |
| `/:slug`            | GET    | Redirect to the `originalUrl` and increment the `clicks` counter.        |
