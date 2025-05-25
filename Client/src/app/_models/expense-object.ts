import { CategoryObject } from "./category-object"
import { ModeOfPaymentObject } from "./mop-object"

export interface ExpenseObject {
  id: number
  amount: number
  name: string
  userId: string
  user: any
  categoryId: number
  category: CategoryObject
  dateCreated: string
  description: string
  modeOfPaymentId: number
  modeOfPayment: ModeOfPaymentObject
}


