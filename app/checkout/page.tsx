import { Container } from '../../components/ui/container'
import CheckoutContent from '../../components/checkout/checkout-content'

export const metadata = {
    title: 'Checkout | Devki Nandan & Sons',
    description: 'Complete your purchase securely',
}

export default function CheckoutPage() {
    return (
        <main className="flex-grow py-12 bg-white">
            <Container>
                <CheckoutContent />
            </Container>
        </main>
    )
}
