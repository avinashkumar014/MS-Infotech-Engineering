# MS INFOTECH Engineering Website

A responsive React and Vite website for industrial engineering, steel fabrication and PEB construction services.

## Run locally

```sh
npm install
npm run dev
```

Create a `.env` file from `.env.example` and set `VITE_API_URL` to the origin of a backend that implements `POST /api/enquiries`. The enquiry form validates required fields and displays a clear error if the endpoint is not configured or the request fails; it does not report a false success.

## Editable business content

- Update the provisional company name, contact details, social links and placeholder statistics in `src/data/site.js`.
- Update service descriptions and illustrative photos in `src/data/services.js`.
- Replace illustrative project cards in `src/data/projects.js` with approved project information and photography before publishing.
- Images currently load from Unsplash. Confirm image licensing and suitability for your use before launch.

## Pages

Home, About, Services, five service detail pages, PEB Structures, Projects and Contact.
