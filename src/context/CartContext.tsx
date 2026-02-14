import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Watch } from '../types';

interface CartItem extends Watch {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (watch: Watch) => void;
    removeFromCart: (watchId: string) => void;
    updateQuantity: (watchId: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('wayne-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('wayne-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (watch: Watch) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === watch.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === watch.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...watch, quantity: 1 }];
        });
    };

    const removeFromCart = (watchId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== watchId));
    };

    const updateQuantity = (watchId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(watchId);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === watchId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = subtotal; // Can add taxes/shipping later

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            subtotal,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
