# API Contract

## Overview

Base URL: `https://api.yourdomain.com`

All endpoints except `GET /s/{slug}` require authentication via AWS Cognito JWT token in the `Authorization` header.

---

## Auth

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
| status    | string | No       | `active`, `inactive`, or `deleted`                |

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
