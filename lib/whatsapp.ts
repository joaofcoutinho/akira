const FALLBACK_NUMBER = '5511999999999';

export const whatsappNumber = () =>
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? FALLBACK_NUMBER;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${whatsappNumber()}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
