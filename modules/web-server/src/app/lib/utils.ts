export async function restHandler<T>(url: string): Promise<T> {
  return await fetch(url).then(async (resp) => {
    if (resp.ok) {
      return await resp.json();
    }
    throw new Error(
      `${restHandler.name}: Failed fetching ${url}; status: ${resp.status}; message: ${resp.statusText}`
    );
  });
}
