export const initialState = {
  nps: 75,
  targetSales: 120,
  targetAmount: 70000,
  dayInfo: {
    domingo: { sales: 1, amount: 2000 },
    segunda: { sales: 4, amount: 4000 },
    terca: { sales: 4, amount: 3500 },
    quarta: { sales: 14, amount: 14000 },
    quinta: { sales: 5, amount: 5000 },
    sexta: { sales: 5, amount: 4200 },
    sabado: { sales: 10, amount: 10000 },
  },
  get resultAmount() {
    let amount = 0;
    for (const day in this.dayInfo) {
      amount += this.dayInfo[day].amount;
    }
    return amount;
  },
  get percentAmount() {
    return (this.resultAmount / this.targetAmount) * 100;
  },
  get resultSales() {
    let sales = 0;
    for (const day in this.dayInfo) {
      sales += this.dayInfo[day].sales;
    }
    return sales;
  },
  get percentSales() {
    return (this.resultSales / this.targetSales) * 100;
  },
  get highestSale() {
    let highest = 0;
    let day;
    for (const key in this.dayInfo) {
      if (this.dayInfo[key].sales > highest) {
        highest = this.dayInfo[key].sales;
        day = key;
      }
    }
    return day;
  },
  get lowerSale() {
    let lower = 999999999;
    let day;
    for (const key in this.dayInfo) {
      if (this.dayInfo[key].sales < lower) {
        lower = this.dayInfo[key].sales;
        day = key;
      }
    }
    return day;
  },
};

export function Reducer(state, action) {
  switch (action.type) {
    case 'update_nps':
      return { ...state, nps: action.payload };
    case 'update_targetSales':
      return { ...state, targetSales: action.payload };
    case 'update_targetAmount':
      return { ...state, targetAmount: action.payload };
    case 'update_sales':
      return { ...state, dayInfo: action.payload };
    default:
      return state;
  }
}
