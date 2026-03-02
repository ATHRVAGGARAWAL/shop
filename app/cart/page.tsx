import { Container } from '../../components/ui/container'
import CartContent from '../../components/cart/cart-content'

export const metadata = {
    title: 'Shopping Cart | Devki Nandan & Sons',
    description: 'Review your items and proceed to checkout',
}

export default function CartPage() {
    return (
        <main className="flex-grow py-12 bg-[#f8fafc]">
            <Container>
                <CartContent />
            </Container>
        </main>
    )
}
