# Batch Notes - GoodFellas Barbershop Soehat

## Production Direction

- Business type: Premium barbershop
- Layout DNA: goodfellas
- Primary conversion: Book Chair
- Secondary conversion: Choose Barber
- Customer journey: GoodFellas should sell trust before appointment: visitors pick barber, service, time, and see proof of premium grooming results.

## Image Strategy

This sandbox cannot reliably download and compress binary photos, so the site uses stable fixed remote image URLs from images.unsplash.com. No random image endpoint is used. Replace these with local compressed files in assets/photos/ when final brand-approved photography is available.

## WhatsApp Placeholder

The JavaScript contains BUSINESS_WHATSAPP as an intentionally empty replaceable variable. Add the confirmed business phone number in script.js if the official WhatsApp number is available. Until then, the generator uses a WhatsApp share URL with a brand-specific message.

## Validation

Run:

```powershell
npm run validate
npm run build
```
