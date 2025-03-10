import { OrderingEnum } from "@/enums/ordering.enum";

export type OrderingAction = { type: OrderingEnum };

export function OrderingReducer(state: OrderingEnum, action: OrderingAction) {
  switch (action.type) {
    case OrderingEnum.ALPHABETICALLY:
      return OrderingEnum.ALPHABETICALLY;
    case OrderingEnum.RATE:
      return OrderingEnum.RATE;
    default:
      return state;
  }
}
