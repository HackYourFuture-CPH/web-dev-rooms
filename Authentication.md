# Authentication and API

API endpoints by default require authentication. To authenticate an API request, it has to contain an `Authorization` header with a valid value. While the application is being developed, there will be temporary authentication mechanism to simplify development and testing.

## Authentication header

The value for the `Authorization` header should be in the form of `Bearer TOKEN:{SLACKID}` where `SLACKID` is the value of the `slack_id` column in the `users` table.

There are a handful of users added through seeds and new users can always be registered via `/login-test` page. Inspect the database for valid values.

## Postman (and other REST tools)

To test via Postman or any other REST tool, ensure that the request has a header `Authorization` set to `Bearer TOKEN:{SLACKID}` where `SLACKID` is the slackId from the database. Check the seeds.

This will ensure that the user is the one found in the database.

<img width="581" alt="image" src="https://user-images.githubusercontent.com/1407815/103465391-46226300-4d3b-11eb-8543-fdabee554126.png">

## Frontend usage

Calling an authenticated API requires sending the mentioned header with the correct value. To simplify this, whenever a call to a protected endpoint is required use the `useAuthenticatedFetch` hook to obtain a `fetch` function. Use the acquired function to call API endpoints.

### POST, PUT, PATCH

Post, put and patch calls should look like the following:

```tsx
const { fetch } = useAuthenticatedFetch();

await fetch(`/api/user/register/student`, {
  method: 'post',
  // body of the request
  data: {
    name,
    groupId,
  },
});
```

### GET

For GET requests, only specify the URL:

```tsx
const { fetch } = useAuthenticatedFetch();

await fetch(`/api/user/register/student`);
```

### DELETE

Delete calls have no body, but a custom method must be specified:

```tsx
const { fetch } = useAuthenticatedFetch();
await fetch(`/api/user/register/student`, {
  method: 'delete',
});
```
