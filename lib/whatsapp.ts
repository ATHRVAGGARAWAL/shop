import { Product } from './products'

interface CartItem extends Product {
    quantity: number
}

export function generateWhatsAppMessage(cart: CartItem[], totalPrice: number): string {
    const businessNumber = '919418033069' // Replace with actual business WhatsApp number

    let message = '🛒 *New Order Request*\n\n'
    message += '📦 *Items:*\n'

    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.name}*\n`
        message += `   Brand: ${item.brand}\n`
        message += `   Quantity: ${item.quantity}\n`
        message += `   Price: ₹${item.price.toLocaleString('en-IN')} each\n`
        message += `   Subtotal: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`
    })

    message += `\n💰 *Total Amount: ₹${totalPrice.toLocaleString('en-IN')}*\n\n`
    message += '📍 Please confirm availability and delivery details.'

    return encodeURIComponent(message)
}

export function openWhatsAppChat(cart: CartItem[], totalPrice: number): void {
    const message = generateWhatsAppMessage(cart, totalPrice)
    const businessNumber = '919418033069' // Replace with actual business WhatsApp number

    // Use WhatsApp Web URL for desktop, WhatsApp app URL for mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${businessNumber}&text=${message}`
        : `https://web.whatsapp.com/send?phone=${businessNumber}&text=${message}`

    window.open(whatsappUrl, '_blank')
}
