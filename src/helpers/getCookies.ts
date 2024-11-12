interface cookiesType {
  csrfToken: string;
  _csrf: string;
  accessToken: string;
}

export function getCookies() {
  // Split cookies into individual cookies
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    ) as cookiesType;

  return cookies;
}
