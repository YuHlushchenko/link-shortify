## MVP Data Model (Link)

| Field         | Type                   | Description                                                      |
| ------------- | ---------------------- | ---------------------------------------------------------------- |
| `_id`         | ObjectId (auto)        | Unique document ID (MongoDB primary key).                        |
| `originalUrl` | String                 | The full original URL to redirect to.                            |
| `shortSlug`   | String (unique)        | Unique slug or code (e.g., `Bn14aCOlnxj`) used in the short URL. |
| `clicks`      | Number (default 0)     | Click counter, incremented on each redirect.                     |
| `isActive`    | Boolean (default true) | Flag to mark if the link is active or inactive (soft-disable).   |
| `createdAt`   | Date                   | Timestamp when the link was created.                             |
