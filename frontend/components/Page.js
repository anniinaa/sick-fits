import Header from './Header';

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <h2>I am the page vai mitä</h2>
      {children}
    </div>
  );
};

export default Page;
