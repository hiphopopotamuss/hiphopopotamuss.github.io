export async function clipsLoader() {
  return { clips: fetchClips() }; // can be a Promise for Suspense streaming
}