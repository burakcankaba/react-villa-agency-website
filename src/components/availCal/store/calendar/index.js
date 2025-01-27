import create from 'zustand'
import { format } from "multi-date";
import { DATE_FORMAT, PRICE_ROW_COUNT } from "../../config/index.js";


const today = new Date();
today.setDate(today.getDate() - 1);
export const useCalendar = create((set, get) => ({
    blocks: ['2022-12-14', '2022-12-15', '2022-12-16', '2022-12-17'],
    showenMonthCount: 2,
    dates: { checkin: "", checkout: "" },
    getSelectedDatePrices: () =>
        Object.entries(get().priceDates).reduce(
            (p, [value, key]) => {
                const checkin = get().dates.checkin;
                const checkout = get().dates.checkout;
                if (checkin === "") return { ...p, total: 0, count: 0 };

                const date = new Date(value);
                date.setHours(0);
                if (
                    (checkout === "" && format(checkin, DATE_FORMAT) === value) ||
                    (date >= checkin && date <= checkout)
                ) {
                    p = { ...p, total: p.total + key.price, count: ++p.count };
                }
                return { ...p };
            },
            { total: 0, count: 0 }
        )
    ,
    getSelectedDateRanges: () => {
        const arr = [];
        const checkin = get().dates.checkin;
        const checkout = get().dates.checkout;
        if (checkin === "") return;
        const startDate = new Date(checkin);
        const endDate = new Date(checkout !== "" ? checkout : checkin);
        while (startDate <= endDate) {
            arr.push({ date: format(startDate, DATE_FORMAT), price: get().priceDates[format(startDate, DATE_FORMAT)]?.price ?? 0 });
            startDate.setDate(startDate.getDate() + 1);
        }
        return arr;
    },
    setDates: (dates) => { set(() => ({ dates })) },
    pendingPayments: [{
        dateRanges:["2022-12-19", "2022-12-20", "2022-12-21", "2022-12-22"],
        checkinDate:"2022-12-19",
        checkoutDate:"2022-12-22",

    }],

    priceDates: [...new Array(PRICE_ROW_COUNT).keys()]
        .map(() => {
            today.setDate(today.getDate() + 1);
            return {
                [format(new Date(today), DATE_FORMAT)]: {
                    price: Math.floor(Math.random() * 100) + 1,
                },
            };
        })
        .reduce((p, _, i, a) => ({ ...p, ...a[i] }), {}),
    setPendingPayments: (_payments) => { set((state) => ({ pendingPayments: [...state.pendingPayments, { ..._payments }] })) },
    setBlocks: (_blocks) => { set((state) => ({ blocks: [...state.blocks, ..._blocks] })) },

}
))


export default useCalendar;