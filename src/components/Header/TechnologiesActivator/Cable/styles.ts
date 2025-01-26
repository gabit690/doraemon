export const getCableStyles = (isActive: boolean) => {
  return `h-1 flex-grow outline outline-2 bg-green-400 outline-black after:content-[*] ${isActive ? 'opacity-100' : 'opacity-25'}`
}
