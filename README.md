<h1 align="center">East One Coffee Roasters</h1>

<p>E-commerce site for a coffee shop and roastery in Carroll Gardens, Brooklyn. The primary inspiration for this project was to improve page load times and overall performance for users while providing ease-of-use and low costs for the business. According to <a href="https://lighthouse-metrics.com/">Lighthouse Metrics</a>, the site is currently scoring 100/100 for overall performance while the old site scores 6/100.
</p>

<p align="center"><a href="https://east-one.netlify.app/">View Live Demo</a></p>

## Technology Stack

- [Gatsby](https://gatsbyjs.org/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [DatoCMS](https://datocms.com/)
- [Snipcart](https://snipcart.com/)
- [Netlify](https://netlify.com/)

## Installation & Usage

To run this project locally, install its dependencies:

```
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
gatsby develop
```

To build the final, production-ready static website:

```
gatsby build
```

The final result will be saved in the `public` directory.

## Features

- Users can view information about the business and its products
- Users can purchase coffee through the "Buy Coffee" page and individual product pages
- Business owner pays no fixed costs to operate the site and a 2% Snipcart fee on sales

## Roadmap

- Optimize styling for mobile and additional screen sizes
- Build out additional pages (Locations, Wholesale, etc.)
- Customize Snipcart styles
- Continue to optimize performance, accessibility and SEO

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Luke Waring - [@luke_waring](https://twitter.com/luke_waring)

Project Link: [https://github.com/lukewaring/east-one](https://github.com/lukewaring/east-one)
