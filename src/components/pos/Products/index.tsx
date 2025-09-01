// Local Imports
import { Product, ProductCard } from "./ProductCard";

// ----------------------------------------------------------------------

const products: Product[] = [
  {
    "uid": "1",
    "image": "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Jollof Rice",
    "category": "Rice Dish",
    "price": "3.50"
  },
  {
    "uid": "2",
    "image": "https://images.unsplash.com/photo-1716959669858-11d415bdead6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Egusi Soup",
    "category": "Soup",
    "price": "5.00"
  },
  {
    "uid": "3",
    "image": "https://images.unsplash.com/photo-1733700469173-15d46efc2c09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Suya",
    "category": "Grilled Meat",
    "price": "2.00"
  },
  {
    "uid": "4",
    "image": "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Pounded Yam & Egusi",
    "category": "Swallow",
    "price": "6.50"
  },
  {
    "uid": "5",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Beans_Ball-Akara.jpg",
    "name": "Akara (Bean Cake)",
    "category": "Snack",
    "price": "1.20"
  },
  {
    "uid": "6",
    "image": "https://www.royacshop.com/wp-content/uploads/2018/09/moi-moi.png",
    "name": "Moi Moi",
    "category": "Steamed Bean Pudding",
    "price": "2.50"
  },
  {
    "uid": "7",
    "image": "https://i.ytimg.com/vi/aJc3JL5Praw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCmD2SDroeWDY45ZYOQ-5Rls3kSYw",
    "name": "Ofada Rice & Ayamase",
    "category": "Local Rice Dish",
    "price": "7.00"
  },
  {
    "uid": "8",
    "image": "https://i.ytimg.com/vi/u27D4ilTqLs/maxresdefault.jpg",
    "name": "Fufu & Ogbono Soup",
    "category": "Swallow",
    "price": "6.00"
  },
  {
    "uid": "9",
    "image": "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/catfish-pepper-soup.jpg",
    "name": "Catfish Pepper Soup",
    "category": "Soup",
    "price": "4.50"
  },
  {
    "uid": "10",
    "image": "https://www.tastingtable.com/img/gallery/dodo-the-delectable-nigerian-plantains-you-need-to-make/l-intro-1667494216.jpg",
    "name": "Fried Plantain (Dodo)",
    "category": "Side Dish",
    "price": "1.80"
  },
  {
    "uid": "11",
    "image": "https://assets.unileversolutions.com/recipes-v2/159354.jpg",
    "name": "Nkwobi",
    "category": "Delicacy (Cow Foot in Palm Oil Sauce)",
    "price": "8.00"
  },
  {
    "uid": "12",
    "image": "https://www.foodnify.com/wp-content/uploads/2024/09/okpa-ugwu.jpg",
    "name": "Okpa",
    "category": "Steamed Pudding (Bambara Nut)",
    "price": "2.80"
  }
]

export function Products() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.uid} {...product} />
      ))}
    </div>
  );
}
