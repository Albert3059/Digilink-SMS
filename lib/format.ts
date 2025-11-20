export function formatCurrency(value: number | string | null | undefined) {
  const amount = typeof value === "string" ? Number.parseFloat(value) : Number(value)
  const safe = Number.isFinite(amount) ? amount : 0

  try {
    return new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(safe)
  } catch (err) {
    // Fallback to simple formatting with R prefix
    return `R${safe.toFixed(2)}`
  }
}
