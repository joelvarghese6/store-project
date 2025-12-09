import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: Record<string, CartItem>;
  addItem: (product: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getItemQuantity: (productId: string) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartItems: () => CartItem[];
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: {},
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items[product.id];
          if (existingItem) {
            return {
              items: {
                ...state.items,
                [product.id]: {
                  ...existingItem,
                  quantity: existingItem.quantity + 1,
                },
              },
            };
          }
          return {
            items: {
              ...state.items,
              [product.id]: {
                ...product,
                quantity: 1,
              },
            },
          };
        });
      },
      removeItem: (productId) => {
        set((state) => {
          const { [productId]: _, ...rest } = state.items;
          return { items: rest };
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => {
          const existingItem = state.items[productId];
          if (!existingItem) return state;
          return {
            items: {
              ...state.items,
              [productId]: {
                ...existingItem,
                quantity,
              },
            },
          };
        });
      },
      getItemQuantity: (productId) => {
        return get().items[productId]?.quantity || 0;
      },
      getTotalItems: () => {
        return Object.values(get().items).reduce(
          (total, item) => total + item.quantity,
          0
        );
      },
      getTotalPrice: () => {
        return Object.values(get().items).reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getCartItems: () => {
        return Object.values(get().items);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

