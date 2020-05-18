<h3 align="center">East One Coffee Roasters</h3>

<p align="center">E-commerce site for a coffee shop and roastery in Carroll Gardens, Brooklyn
    <br/>
    <a href="https://east-one.netlify.app/">View Live Demo</a>
</p>

## About The Project

### Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [GraphQL](http://graphql.org/)
- [DatoCMS](https://www.datocms.com/)
- [Snipcart](https://snipcart.com/)
- [Netlify](https://netlify.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation & Usage

To run this project locally, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## Features

- Users can view information about the business and its products
- Users can purchase coffee through the Buy Coffee page and individual product pages
- Business owner pays no fixed costs to operate the site and only a 2% Snipcart fee on purchases

## Roadmap

- Optimize styling for mobile and additional screen sizes
- Build out additional pages (Locations, Wholesale, etc.)
- Customize Snipcart styles

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

Your Name - [@luke_waring](https://twitter.com/luke_waring)

Project Link: [https://github.com/lukewaring/east-one](https://github.com/lukewaring/east-one)
