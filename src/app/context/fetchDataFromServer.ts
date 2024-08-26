"use server";
export async function fetchDataFromServer(param: string) {
  return Promise.resolve(`${param} is from server`);
}
