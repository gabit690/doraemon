export const getTailwindClasses = (active: boolean): string => {
  return `absolute bg-white rounded-full ${active ? 'animate-[twinkle_3s_infinite_ease-in-out,moveStar_60s_linear_infinite]' : ''}`
}
