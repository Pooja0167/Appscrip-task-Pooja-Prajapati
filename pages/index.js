import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import SortBar from '../components/SortBar';
import ProductGrid from '../components/ProductGrid';
import { fetchAllProducts, fetchCategories } from '../lib/fetchProducts';
import styles from '../styles/Home.module.css';

export default function Home({ products: initialProducts, categories: initialCategories, fetchError }) {
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [loadError, setLoadError] = useState(fetchError);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Fallback: agar server-side (SSR) fetch fail ho gaya (jaise host provider ki IP
  // API ne block kar di), to browser se khud dobara fetch try karte hain -
  // browser requests aksar block nahi hoti.
  useEffect(() => {
    if (fetchError) {
      Promise.all([fetchAllProducts(), fetchCategories()])
        .then(([freshProducts, freshCategories]) => {
          setProducts(freshProducts);
          setCategories(freshCategories);
          setLoadError(null);
        })
        .catch((err) => {
          setLoadError(err.message || 'Unable to load products');
        });
    }
  }, [fetchError]);

  function toggleCategory(category) {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }

  const visibleProducts = useMemo(() => {
    let result = products;

    if (selectedCategories.length) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    const sorted = [...result];
    if (sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === 'newest') sorted.sort((a, b) => b.id - a.id);
    else if (sortBy === 'popular') sorted.sort((a, b) => b.rating.rate - a.rating.rate);

    return sorted;
  }, [products, selectedCategories, sortBy]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.slice(0, 20).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://your-deployed-site.netlify.app/product/${product.id}`,
      name: product.title,
    })),
  };

  return (
    <>
      <Head>
        <title>Discover Our Products | LOGO Official Store</title>
        <meta
          name="description"
          content="Browse our full catalogue of bags, accessories, jewelery and clothing. Filter by category and sort by price to find exactly what you need."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-deployed-site.netlify.app/" />
        <meta property="og:title" content="Discover Our Products | LOGO Official Store" />
        <meta
          property="og:description"
          content="Browse our full catalogue of bags, accessories, jewelery and clothing."
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </Head>

      <Header />

      <main>
        {loadError && (
          <p style={{ background: '#ffe5e5', color: '#900', padding: '12px 24px', textAlign: 'center' }}>
            Debug: Product fetch failed — {loadError}
          </p>
        )}

        <section className={`container ${styles.hero}`}>
          <h1>Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our latest
            collection curated just for you.
          </p>
        </section>

        <div className="container">
          <SortBar
            count={visibleProducts.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onToggleFilters={() => setFiltersOpen((v) => !v)}
          />

          <div className={styles.layout}>
            <Sidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              isOpen={filtersOpen}
            />

            <section aria-label="Product results">
              <h2 className="visually-hidden">Product results</h2>
              <ProductGrid products={visibleProducts} />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [products, categories] = await Promise.all([fetchAllProducts(), fetchCategories()]);
    return { props: { products, categories, fetchError: null } };
  } catch (error) {
    return {
      props: {
        products: [],
        categories: [],
        fetchError: error.message || 'Unknown error',
      },
    };
  }
}