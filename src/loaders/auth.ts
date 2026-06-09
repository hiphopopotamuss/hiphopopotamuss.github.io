import { redirect } from "react-router";

export async function authLoader() {
  const session = await getSession(); // your auth check
  if (!session) throw redirect("/login");
  return { user: session.user };
}