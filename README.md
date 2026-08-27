# Jit Fresh Masala — HTML, CSS & JavaScript

This is a standalone, mobile-friendly website. No build tool or framework is required.

## Run the website

Open `index.html` in a browser. For the most reliable result, serve the folder with any static web server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Main files

- `index.html` — page structure and content
- `style.css` — design and responsive layout
- `script.js` — products, quantities, search, languages, testimonials and UPI payment
- `assets/` — logo and product images

## Important settings

At the top of `script.js`, edit the `CONFIG` object to change:

- Regular order Google Form
- Combo order Google Form
- UPI ID and payee name
- WhatsApp number

Replace the placeholder phone, email, address and social links in `index.html` before publishing. Replace the certificate and testimonial placeholders with genuine business information.

## Payment note

The UPI button works through the phone's installed UPI app. The QR code uses a small browser library loaded from jsDelivr, so the QR needs internet access when it is generated. Customers should always verify the receiver name and amount in their UPI app before paying.
