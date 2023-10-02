export const useSettings = () => {
  const prismic = usePrismic()
  return useAsyncData("$settings", () => {
    return prismic.client.getSingle("settings")
  }).data
}