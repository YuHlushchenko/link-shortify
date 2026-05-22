# API Contract

## Overview

Base URL: `https://api.yourdomain.com`

All endpoints except `GET /s/{slug}`, `POST /links/anonymous`, and `GET /links/anonymous` require authentication via AWS Cognito JWT token in the `Authorization` header.

Anonymous users may create up to **5 active links** (configurable via `ANON_LINK_LIMIT`). Deleting a link frees up a slot. The limit is enforced per `SHA256(IP + browser fingerprint)` combination.

## Rate Limiting

Rate limits apply to link creation endpoints to prevent abuse. When a limit is exceeded, the API returns `429 Too Many Requests`.

| Endpoint | Identifier | Per minute | Per day |
| -------- | ---------- | ---------- | ------- |
| `POST /links` | `userId` | 10 | 200 |
| `POST /links/anonymous` | `SHA256(IP + fingerprint)` | 10 | 200 |

Limits are enforced via Upstash Redis sliding window algorithm.

---

## Anonymous Links

### Create Anonymous Link

`POST /links/anonymous`

Creates a shortened link for an unauthenticated user. No `Authorization` header required.

**Request Body**

| Field       | Type   | Required | Description                                 |
| ----------- | ------ | -------- | ------------------------------------------- |
| fingerprint | string | Yes      | Browser fingerprint (e.g. from FingerprintJS) |
| originalUrl | string | Yes      | Destination URL                             |
| slug        | string | No       | Custom slug. Auto-generated if not provided |
| expiresAt   | number | No       | Unix timestamp                              |

```json
{
  "fingerprint": "abc123...",
  "originalUrl": "https://example.com/very/long/url"
}
```

**Response**

```json
201 Created
{
  "slug": "x7k2mq",
  "originalUrl": "https://example.com/very/long/url",
  "status": "active",
  "createdAt": 1735689600,
  "clickCount": 0
}
```

**Errors**

| Status                | Description                                           |
| --------------------- | ----------------------------------------------------- |
| 409 Conflict          | Slug already exists                                   |
| 429 Too Many Requests | Anonymous link limit reached (`ANON_LINK_LIMIT` = 5) |

---

### Get Anonymous Links

`GET /links/anonymous`

Returns all active anonymous links for the current browser session. No `Authorization` header required.

**Query Parameters**

| Parameter   | Type   | Required | Description        |
| ----------- | ------ | -------- | ------------------ |
| fingerprint | string | Yes      | Browser fingerprint |

**Response**

```json
200 OK
{
  "links": [
    {
      "slug": "x7k2mq",
      "originalUrl": "https://example.com",
      "status": "active",
      "createdAt": 1735689600,
      "clickCount": 3
    }
  ]
}
```

---

## Auth

### Claim Anonymous Links

`POST /auth/claim`

Transfers all anonymous links created in the current browser session to the authenticated user's account. Can be called multiple times from different IP + fingerprint combinations.

**Request Headers**

`Authorization: Bearer {accessToken}`

**Request Body**

| Field       | Type   | Required | Description        |
| ----------- | ------ | -------- | ------------------ |
| fingerprint | string | Yes      | Browser fingerprint |

```json
{
  "fingerprint": "abc123..."
}
```

**Response**

```json
200 OK
{
  "claimed": 3
}
```

---

### Delete Account

`DELETE /auth/account`

Deletes the authenticated user's Cognito account (including linked OAuth providers) and all associated data from the database.

**Request Headers**

`Authorization: Bearer {accessToken}`

**Response:** `204 No Content`

---

## Links

### Get All Links

`GET /links`

Returns all shortened links for the authenticated user.

**Query Parameters**

| Parameter | Type   | Required | Description                                       |
| --------- | ------ | -------- | ------------------------------------------------- |
| sortBy    | string | No       | `createdAt` or `clickCount`. Default: `createdAt` |
| order     | string | No       | `asc` or `desc`. Default: `desc`                  |
| status    | string | No       | `active`, `inactive`, or `expired`                |

**Response**

```json
200 OK
{
  "links": [
    {
      "slug": "abc123",
      "originalUrl": "https://example.com",
      "status": "active",
      "createdAt": 1735689600,
      "updatedAt": 1735689600,
      "expiresAt": 1767225600,
      "clickCount": 42
    }
  ]
}
```

---

### Create Link

`POST /links`

Creates a new shortened link.

**Request Body**

| Field       | Type   | Required | Description                                 |
| ----------- | ------ | -------- | ------------------------------------------- |
| originalUrl | string | Yes      | Destination URL                             |
| slug        | string | No       | Custom slug. Auto-generated if not provided |
| expiresAt   | number | No       | Unix timestamp                              |

```json
{
  "originalUrl": "https://example.com/very/long/url",
  "slug": "my-link",
  "expiresAt": 1767225600
}
```

**Response**

```json
201 Created
{
  "slug": "my-link",
  "originalUrl": "https://example.com/very/long/url",
  "status": "active",
  "createdAt": 1735689600,
  "expiresAt": 1767225600,
  "clickCount": 0
}
```

**Errors**

| Status                | Description         |
| --------------------- | ------------------- |
| 409 Conflict          | Slug already exists |
| 429 Too Many Requests | Rate limit exceeded |

---

### Update Link

`PATCH /links/{slug}`

Updates one or more attributes of a link.

**Request Body**

| Field     | Type   | Required | Description                                      |
| --------- | ------ | -------- | ------------------------------------------------ |
| status    | string | No       | `active` or `inactive`                           |
| expiresAt | number | No       | Unix timestamp. Pass `null` to remove expiration |

```json
{
  "status": "inactive"
}
```

**Response**

```json
200 OK
{
  "slug": "my-link",
  "status": "inactive",
  "updatedAt": 1735689600
}
```

---

### Delete Link

`DELETE /links/{slug}`

Marks a link as deleted. The slug is permanently reserved and cannot be reused.

**Response**

```json
204 No Content
```

---

### Bulk Delete Links

`DELETE /links`

Deletes multiple links at once.

**Request Body**

```json
{
  "slugs": ["abc123", "my-link", "xyz789"]
}
```

**Response**

```json
204 No Content
```

---

## Clicks

### Get Click History

`GET /links/{slug}/clicks`

Returns the click history for a specific link.

**Query Parameters**

| Parameter | Type   | Required | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| from      | number | No       | Unix timestamp, start of date range |
| to        | number | No       | Unix timestamp, end of date range   |

**Response**

```json
200 OK
{
  "clicks": [
    {
      "clickId": "uuid",
      "clickedAt": 1735689600,
      "country": "UA",
      "referrer": "https://twitter.com",
      "userAgent": "Mozilla/5.0 ..."
    }
  ]
}
```

---

## Redirect

### Redirect to Original URL

`GET /s/{slug}`

Redirects the user to the original URL. Does not require authentication. Handled by a dedicated Lambda function, bypassing API Gateway.

**Response**

```json
302 Found
Location: https://example.com/very/long/url
```

**Errors**

| Status        | Description                           |
| ------------- | ------------------------------------- |
| 404 Not Found | Slug does not exist                   |
| 410 Gone      | Link is inactive, deleted, or expired |

---

## Notifications

### Get All Notifications

`GET /notifications`

Returns all notifications for the authenticated user, sorted by date descending.

**Query Parameters**

| Parameter  | Type    | Required | Description                                  |
| ---------- | ------- | -------- | -------------------------------------------- |
| unreadOnly | boolean | No       | If `true`, returns only unread notifications |

**Response**

```json
200 OK
{
  "notifications": [
    {
      "notificationId": "uuid",
      "message": "Your link 'my-link' has expired and been deactivated.",
      "isRead": false,
      "createdAt": 1735689600
    }
  ]
}
```

---

### Mark Notification as Read

`PATCH /notifications/{notificationId}`

Marks a single notification as read.

**Response**

```json
200 OK
{
  "notificationId": "uuid",
  "isRead": true
}
```

---

### Mark All Notifications as Read

`PATCH /notifications`

Marks all notifications for the authenticated user as read.

**Response**

```json
204 No Content
```
