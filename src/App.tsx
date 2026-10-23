import type { AlertBoxProps, UserProfileCardProps, User, ProductDisplayProps } from "./types/index"
import { AlertBox } from "./Components/AlertBox/AlertBox"
import UserProfileCard from "./Components/UserProfileCard/USerProfileCard"
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay"
import type { Product } from "./types/index"



const alertProps: AlertBoxProps = {
  type: 'success', message: "Your profile has been updated successfully!",
  onClose: () => window.alert('Alert CLosed'), children: <p>You can now continue using the application</p>
}

const user: User = { id: '1001', name: "John Doe", email: "john.doe@example.com", role: "Software Engineer" }
const userId = user.id;
const userProfile: UserProfileCardProps = { user: user, showEmail: true, showRole: true, onEdit: (userId) => alert(`Editing user ${userId}`), children:"Last login: 2 hours ago" }

const product: Product = { id: '1', name: "Wireless Headphones", price: 199.99, description: "High-quality wireless headphones with noise cancellation.", imageUrl: 'https://www.engadget.com/img/gallery/best-headphones-wireless-bluetooth-120543205/intro-1787676830.webp', inStock: true }
const productId=product.id;
const productDisplay: ProductDisplayProps = { product: product, showDescription: true, showStockStatus: true, onAddToCart: (productId)=> alert(`Added product ${productId} to cart`), children:"Free Shipping"}

export default function App() {
  return (<div>
    <AlertBox {...alertProps} />
    <UserProfileCard {...userProfile} />
    <ProductDisplay {...productDisplay} />
  </div>)
}


