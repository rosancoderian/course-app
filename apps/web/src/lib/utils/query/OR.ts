export function OR(q?: string) {
  if (q && typeof q === 'string') return `|| ${q}`
  return ''
}
