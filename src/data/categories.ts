import { Category } from '../types/Category'

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true},
    rent: { title: 'Aluguel', color: 'brown', expense: true},
    transport: { title: 'Transporte', color: 'black', expense: true},
    clothes: { title: 'Roupas', color: 'pink', expense: true},
    others: {title: 'Outros', color: 'purple', expense: true},
    salary: { title: 'Salário', color: 'green', expense: false},
    pension: { title: 'Pensão', color: 'chartreuse', expense: false},
    investments: { title: 'Investimentos', color: 'darkgreen', expense: false}
}

