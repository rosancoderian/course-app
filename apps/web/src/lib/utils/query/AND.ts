export default function AND(q?: string) {
  if (q && typeof q === 'string') return `&& ${q}`
  return ''
}
