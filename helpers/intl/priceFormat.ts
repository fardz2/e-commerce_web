export function formatToRupiah(amount: number): string {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // atau 2 jika ingin dua digit desimal
    });

    return formatter.format(amount);
}