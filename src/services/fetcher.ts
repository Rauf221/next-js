// services/fetcher.ts
export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Fetch error: ${error.message}`);
      throw error;
    } else {
      console.error("Unknown fetch error");
      throw new Error("Unknown fetch error");
    }
  }
};
