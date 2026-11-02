/* ==========================================================
   Sunrise Tea – site data
   Edit prices, names and images here. Nothing else needs to change.
   ========================================================== */

/* WhatsApp number used by every order / enquiry button (country code + number, no + or spaces) */
const WA = "919924983251";

/* Image files (inside /assets/images). Keys are used by the product list below. */
const IMG = {
  "logo": "assets/images/logo.png",
  "ad": "assets/images/ad.webp",
  "f_premium": "assets/images/f_premium.webp",
  "f_royal": "assets/images/f_royal.webp",
  "f_super": "assets/images/f_super.webp",
  "f_best": "assets/images/f_best.webp",
  "b_premium": "assets/images/b_premium.webp",
  "b_royal": "assets/images/b_royal.webp",
  "b_best": "assets/images/b_best.webp",
  "f_denrich": "assets/images/f_denrich.webp",
  "f_elaichi": "assets/images/f_elaichi.webp"
};
/* Thumbnails for the cart: special products reuse their front image */
IMG.t_denrich = IMG.f_denrich;
IMG.t_elaichi = IMG.f_elaichi;

/* Products
   c = category (dana | dust | special)   g = colour group   n = name   p = price (Rs)
   pk = optional fixed 500 g / 250 g pack prices (if missing, they are worked out from the 1 kg price)
   u = unit ("pack" for fixed packs, otherwise sold per kg)   w = pack weight label
   wt = weight in kg   f / b / t = front / back / thumbnail image keys */
const P = [
  { "id": "dana-premium", "c": "dana", "g": "premium", "n": "Sunrise Premium Dana", "p": 510, "pk": { "500": 260, "250": 135 }, "f": "f_premium", "b": "b_premium" },
  { "id": "dana-royal", "c": "dana", "g": "royal", "n": "Sunrise Royal Dana", "p": 490, "pk": { "500": 250, "250": 130 }, "f": "f_royal", "b": "b_royal" },
  { "id": "dana-super", "c": "dana", "g": "super", "n": "Sunrise Super Dana", "p": 460, "pk": { "500": 240, "250": 125 }, "f": "f_super", "b": null },
  { "id": "dana-best", "c": "dana", "g": "best", "n": "Sunrise Best Dana", "p": 360, "f": "f_best", "b": "b_best" },
  { "id": "dust-premium", "c": "dust", "g": "premium", "n": "Sunrise Premium Dust Tea", "p": 490, "pk": { "500": 250, "250": 130 }, "f": "f_premium", "b": "b_premium" },
  { "id": "dust-royal", "c": "dust", "g": "royal", "n": "Sunrise Royal Dust Tea", "p": 480, "pk": { "500": 245, "250": 125 }, "f": "f_royal", "b": "b_royal" },
  { "id": "dust-super", "c": "dust", "g": "super", "n": "Sunrise Super Dust Tea", "p": 460, "pk": { "500": 235, "250": 120 }, "f": "f_super", "b": null },
  { "id": "dust-best", "c": "dust", "g": "best", "n": "Sunrise Best Dust Tea", "p": 440, "pk": { "500": 230, "250": 115 }, "f": "f_best", "b": "b_best" },
  { "id": "dust-assam", "c": "dust", "g": "assam", "n": "Sunrise Assam Dust Tea", "p": 360, "f": null, "b": null },
  { "id": "dust-apni", "c": "dust", "g": "apni", "n": "Sunrise Apni Dust Tea", "p": 320, "f": null, "b": null },
  { "id": "sp-denrich", "c": "special", "g": "denrich", "n": "Denrich Milk Powder", "p": 45, "u": "pack", "w": "100 g pack", "wt": 0.1, "f": "f_denrich", "t": "t_denrich", "b": null },
  { "id": "sp-elaichi", "c": "special", "g": "elaichi", "n": "Sunrise Elaichi Magic", "p": 200, "u": "pack", "w": "50 g pack", "wt": 0.05, "f": "f_elaichi", "t": "t_elaichi", "b": null }
];
