import { cookies } from "next/headers";

export const deleteSession = () => {
  const cookiesStore = cookies();

  try {
    if (cookiesStore.has("token")) cookiesStore.delete("token");
  } catch (err) {
    console.log(err);
  }
};
