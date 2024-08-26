"use server";
function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function fetchData(counter: number) {
  // await sleep(1000);
  return `Data from server ${counter}`;
}
