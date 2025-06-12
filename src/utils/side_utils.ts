export function formatePrice(amount: number, currency: "INR" | "USD" = "INR") {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,

    }).format(amount)
}