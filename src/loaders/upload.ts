import { redirect } from "react-router";

export async function uploadAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const file = formData.get("clip") as File;
  await saveClip(file);
  return redirect("/clips");
}