import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "5491150513698"; // 11 5051-3698

interface OrderForm {
  name: string;
  address: string;
  phone: string;
}

const CartDrawer = () => {
  const { items, updateQuantity, removeItem, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<OrderForm>({ name: "", address: "", phone: "" });

  const handleSubmitOrder = () => {
    if (!form.name.trim() || !form.address.trim() || !form.phone.trim()) return;

    const orderLines = items.map(
      (i) => `• ${i.quantity}x ${i.product.name} ($${(i.product.price * i.quantity).toLocaleString("es-AR")})`
    );

    const message = [
      `🍕 *Nuevo Pedido - Rústico y Casero*`,
      ``,
      `*Cliente:* ${form.name.trim()}`,
      `*Dirección:* ${form.address.trim()}`,
      `*Teléfono:* ${form.phone.trim()}`,
      ``,
      `*Pedido:*`,
      ...orderLines,
      ``,
      `*Total: $${totalPrice.toLocaleString("es-AR")}*`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    clearCart();
    setShowForm(false);
    setIsCartOpen(false);
    setForm({ name: "", address: "", phone: "" });
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-foreground/40 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-50 flex flex-col shadow-rustic-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-display text-xl font-bold text-foreground">Tu Pedido</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Cerrar carrito"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground font-body py-12">
                  Tu carrito está vacío
                </p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4 bg-background rounded-lg p-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-semibold text-foreground truncate">
                          {item.product.name}
                        </h4>
                        <p className="font-body text-sm text-primary font-bold">
                          ${(item.product.price * item.quantity).toLocaleString("es-AR")}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                            aria-label="Reducir cantidad"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-body text-sm font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors font-body"
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order form */}
              {showForm && items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6 space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    maxLength={100}
                  />
                  <input
                    type="text"
                    placeholder="Dirección de entrega"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    maxLength={200}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    maxLength={20}
                  />
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">Total</span>
                  <span className="font-display text-2xl font-bold text-foreground">
                    ${totalPrice.toLocaleString("es-AR")}
                  </span>
                </div>

                {!showForm ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-body font-bold text-base hover:bg-tomato-dark transition-colors"
                  >
                    Confirmar Pedido
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitOrder}
                    disabled={!form.name.trim() || !form.address.trim() || !form.phone.trim()}
                    className="w-full py-4 rounded-xl bg-secondary text-secondary-foreground font-body font-bold text-base hover:bg-olive-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Enviar por WhatsApp
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
