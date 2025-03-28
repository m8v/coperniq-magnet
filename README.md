This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Embedding the Form

To embed this contact form in your website, add the following iframe code to your HTML:

```html
<iframe
  src="https://portal.coperniq.io/<company>/new"
  width="100%"
  height="600px"
  frameborder="0"
  style="border: none; border-radius: 4px;"
  title="Coperniq Lead Magnet"
></iframe>
```

### Customization Options

You can customize the iframe appearance by adjusting the following attributes:
- `width` and `height`: Modify the dimensions to fit your layout
- `style`: Add custom CSS styles for borders, border-radius, etc.
- `frameborder`: Set to "0" for no border or "1" for a border

To get your specific embedding URL:
1. Go to Workspace Settings
2. Navigate to the Portal section
3. Replace `<company>` in the iframe code with your company identifier from the portal URL
