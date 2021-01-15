export function formatApiError(error) {
  if (!error || !error.isAxiosError || !error.response) {
    return 'An unknown error 🤦‍♂️';
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      if (data && data.error) {
        return `Bad request. 🤖 ${data.error}`;
      }

      return `Bad request.`;

    case 401:
      return 'Missing authentication 🚨';

    case 403:
      return 'Access denied 🚫';

    case 404:
      return 'Not found 🤷‍♀️';

    case 500:
      return 'Internal server error 🙊';

    default:
      return `Unknown error. 🤦‍♂️ status=${status}`;
  }
}
