export async function restHandler<T>(
  url: string,
  method?: "GET" | "POST",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
): Promise<T> {
  return await fetch(url, { method, body: body && JSON.stringify(body) }).then(
    async (resp) => {
      if (resp.ok) {
        return await resp.json();
      }
      throw new Error(
        `${restHandler.name}: Failed fetching ${url}; status: ${resp.status}; message: ${resp.statusText}`
      );
    }
  );
}
