import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;