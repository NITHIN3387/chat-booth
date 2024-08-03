import { type Secret, sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { deleteSession } from "./delete-session";

interface UserType {
  id: string;
  name: string;
  email: string;
}

export const createSession = (user: UserType) => {
  const cookiesStore = cookies();

  try {
    const token = sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_KEY as Secret,
      { expiresIn: "2d" }
    );

    cookiesStore.set("token", token, {
      maxAge: 2 * 24 * 60 * 60,
      httpOnly: true,
    });

    return token;
  } catch (err) {
    deleteSession()

    console.log(err);
    return null;
  }
};
