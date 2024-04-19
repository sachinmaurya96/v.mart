//select differen differen category product
export function selectProducts(products,limit=8) {
    const selectedProducts = [];
    const selectedCategories = new Set();
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
  
    for (const product of shuffledProducts) {
      if (!selectedCategories.has(product.category)) {
        selectedProducts.push(product);
        selectedCategories.add(product.category);
      }
  
      if (selectedProducts.length === limit) {
        break; 
      }
    }
  
    return selectedProducts;
  }


  // Function to calculate discounted price
export function calculateDiscountedPrice(originalPrice, discountPercentage) {
    discountPercentage = Math.max(0, Math.min(100, discountPercentage));
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  }
  

  
  // Function to find products with the highest star ratings
export function findHighestRatedProducts(products, limit) {
    const sortedProducts = products.sort((a, b) => b.rating - a.rating);
    const topRatedProducts = sortedProducts.slice(0, limit);
    return topRatedProducts;
  }

// Function to find products with the highest discounts
export function findHighestDiscountProducts(products, limit) {
    const sortedProducts = products.sort((a, b) => b.discountPercentage - a.discountPercentage);
    const topProducts = sortedProducts.slice(0, limit);
    return topProducts;
  }

  export const getDateMonth =(blog)=>{
    const timestamp = new Date(blog.created_at);
    // Get month name
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(timestamp);
    // Get date
    const date = timestamp.getDate();
    return {monthName,date}
  }

  